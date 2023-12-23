//@ts-check
const { ev, cmd } = require("../dist/Text2Frame-JS");

require("colors");
const Diff = require("diff");

//@ts-expect-error
const test = (name, expect, to) => {
  if (to && expect !== to.trimStart()) {
    console.log(`=== ${name} ===`);
    Diff.diffChars(to.trimStart(), expect).forEach((part) => {
      process.stderr.write(
        part.value[part.added ? "green" : part.removed ? "red" : "grey"]
      );
    });
    console.log("\n==================\n");
    throw new Error(name + ": test failed!");
  }
};

test(
  "ShowChoices",
  ev(
    cmd.message.ShowChoices(
      [
        {
          name: "あいう",
          then: ev(
            cmd.message.Window({ name: "あいう" }),
            "あいうあいうあいうあいうあいう"
          ),
        },
        {
          name: "えおか",
          then: ev(
            cmd.message.Window({ name: "えおか" }),
            "えおかえおかえおかえおかえおか"
          ),
        },
        {
          name: null,
          then: ev("キャンセルキャンセルキャンセルキャンセル"),
        },
      ],
      {
        background: "DIM",
        position: "MIDDLE",
        init: "NONE",
        cancel: "BRANCH",
      }
    )
  ),
  `
<ShowChoices: Dim, Middle, None, Branch>
<When: あいう>
<Name: あいう>
あいうあいうあいうあいうあいう
<When: えおか>
<Name: えおか>
えおかえおかえおかえおかえおか
<WhenCancel>
キャンセルキャンセルキャンセルキャンセル
<End>`
);

test(
  "ScrollingText",
  ev(
    cmd.message.ScrollingText(
      ev(
        cmd.message.Window({ name: "名前" }),
        "てきすとてきすとてきすとてきすと",
        "あいうあいうあいうあいうあいう",
        "えおかえおかえおかえおかえおか",
        "きくけきくけきくけきくけきくけ",
        "てきすとてきすとてきすとてきすと",
        "あいうあいうあいうあいうあいう",
        "えおかえおかえおかえおかえおか",
        "きくけきくけきくけきくけきくけ"
      ),
      {
        noSkip: true,
      }
    )
  ),
  `
<ScrollingText: 2, true>
<Name: 名前>
てきすとてきすとてきすとてきすと
あいうあいうあいうあいうあいう
えおかえおかえおかえおかえおか
きくけきくけきくけきくけきくけ
てきすとてきすとてきすとてきすと
あいうあいうあいうあいうあいう
えおかえおかえおかえおかえおか
きくけきくけきくけきくけきくけ
</ScrollingText>`
);

test(
  "Check",
  ev(
    cmd.flow.Check(
      "$gameSwitches.value(10)",
      ev(
        cmd.message.Window({ name: "名前" }),
        "てきすとてきすとてきすとてきすと"
      )
    )
  ),
  `
<If: Script, $gameSwitches.value(10)>
<Name: 名前>
てきすとてきすとてきすとてきすと
<End>`
);

test(
  "Loop",
  ev(
    cmd.flow.Loop(
      ev(
        cmd.message.Window({ name: "名前" }),
        "てきすとてきすとてきすとてきすと"
      )
    )
  ),
  `
<Loop>
<Name: 名前>
てきすとてきすとてきすとてきすと
<RepeatAbove>`
);

test(
  "Comment",
  ev(cmd.flow.Comment(ev("てきすとてきすとてきすとてきすと"))),
  `
<Comment>
てきすとてきすとてきすとてきすと
</Comment>`
);

test(
  "Script",
  ev(
    cmd.etc.Script(() => {
      console.log("あいうえお");
    })
  ),
  `
<Script>
console.log("あいうえお");
</Script>`
);

test(
  "BattleProcessing",
  ev(
    cmd.scene.BattleProcessing(
      { variableId: 123 },
      {
        ifWin: ev("よっしゃあかったぞ"),
        ifLose: ev(
          "ちょっとーーー",
          "",
          "つよすぎんよ",
          cmd.flow.Loop(ev("がめおヴぇｒ"))
        ),
      }
    )
  ),
  `
<BattleProcessing: V[123]>
<IfWin>
よっしゃあかったぞ
<IfLose>
ちょっとーーー

つよすぎんよ
<Loop>
がめおヴぇｒ
<RepeatAbove>
<End>`
);

test(
  "SetMovementRoute",
  ev(
    cmd.movement.SetMovementRoute(
      "THIS_EVENT",
      (r) => [
        r.jump(1, 2),
        r.wait(60),
        r.changeSwitch(3, true),
        r.changeSpeed("NORMAL"),
        r.changeFreq("NORMAL"),
        r.changeImage("Actor1", 4),
        r.changeOpacity(127),
        r.changeBlendMode("ADD"),
        r.playSe({ name: "Open1", volume: 100, pitch: 100, pan: 0 }),
        r.script("console.log('unko')"),
        r.move("DOWN_LEFT"),
        r.move("TOWARD_PLAYER"),
        r.move("RANDOM"),
        r.turn("RANDOM_90"),
        r.turn("AWAY_PLAYER"),
        r.step("BACK"),
        r.changeWalkAnimation(true),
        r.changeStepAnimation(false),
        r.changeDirectionFix(true),
        r.changeNoClip(false),
        r.changeTransparent(true),
      ],
      {
        repeat: false,
        skip: false,
        wait: true,
      }
    )
  ),
  `
<SetMovementRoute: ThisEvent, false, false, true>
<Jump: 1, 2>
<McWait: 60>
<SwitchOn: 3>
<ChangeSpeed: Normal>
<ChangeFrequency: Normal>
<ChangeImage: Actor1, 4>
<ChangeOpacity: 127>
<ChangeBlendMode: Additive>
<McPlaySe: Open1, 100, 100, 0>
<McScript: console.log('unko')>
<MoveLowerLeft>
<MoveTowardPlayer>
<MoveAtRandom>
<Turn90RightorLeft>
<TurnAwayFromPlayer>
<OneStepBackward>
<WalkingAnimationOn>
<SteppingAnimationOff>
<DirectionFixOn>
<ThroughOff>
<TransparentOn>`
);

test(
  "mix 1",
  ev(
    cmd.screen.TintScreen({ r: -68, g: -68, b: -68, x: 0 }, 1),
    cmd.picture.ShowPicture(1, "path/to", {
      position: { mode: "DIRECT", origin: "CORNER", x: 48, y: 0 },
    }),
    cmd.message.Window({ background: "DIM" }),
    "あああああああああ",
    "あああああああああ",
    "あああああああああ",
    "あああああああああ",
    cmd.message.ShowChoices(
      [
        {
          name: "１２３",
          then: ev(
            cmd.picture.ShowPicture(1, "play-shisha/02", {
              position: { mode: "DIRECT", origin: "CORNER", x: 48, y: 0 },
            }),
            cmd.etc.Wait(60),
            cmd.screen.FadeOut()
          ),
        },
        {
          name: "４５６",
          then: ev(),
        },
        {
          name: "７８９",
          then: ev(),
        },
        {
          name: "１０１１",
          then: ev(),
        },
        {
          name: "１２１３",
          then: ev(),
        },
        {
          name: "１４１５",
          then: ev(),
        },
      ],
      {
        background: "DIM",
        position: "LEFT",
        init: "NONE",
        cancel: "DISALLOW",
      }
    )
  ),
  `<TintScreen: ColorTone[-68][-68][-68][0], Duration[1][Wait]>
<ShowPicture: 1, path/to, Position[Upper Left][48][0]>
<Background: Dim>
あああああああああ
あああああああああ
あああああああああ
あああああああああ
<ShowChoices: Dim, Left, None, Disallow>
<When: １２３>
<ShowPicture: 1, play-shisha/02, Position[Upper Left][48][0]>
<Wait: 60>
<FadeOut>
<When: ４５６>
<When: ７８９>
<When: １０１１>
<When: １２１３>
<When: １４１５>
<End>`
);

console.log("DONE!");
