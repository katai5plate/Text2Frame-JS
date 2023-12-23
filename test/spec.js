//@ts-check
const { ev, cmd: c } = require("../dist/Text2Frame-JS.js");

//@ts-expect-error
const test = (name, expect, to) => {
  console.log(`=== ${name} ===`);
  console.log(expect);
  console.log("================== \n");
  if (to && expect !== to.trimStart()) throw new Error(name + ": test failed!");
};

test(
  "ShowChoices",
  ev(
    c.message.ShowChoices(
      [
        {
          name: "あいう",
          then: ev(
            c.message.Window({ name: "あいう" }),
            "あいうあいうあいうあいうあいう"
          ),
        },
        {
          name: "えおか",
          then: ev(
            c.message.Window({ name: "えおか" }),
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
    c.message.ScrollingText(
      ev(
        c.message.Window({ name: "名前" }),
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
    c.flow.Check(
      "$gameSwitches.value(10)",
      ev(c.message.Window({ name: "名前" }), "てきすとてきすとてきすとてきすと")
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
    c.flow.Loop(
      ev(c.message.Window({ name: "名前" }), "てきすとてきすとてきすとてきすと")
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
  ev(c.flow.Comment(ev("てきすとてきすとてきすとてきすと"))),
  `
<Comment>
てきすとてきすとてきすとてきすと
</Comment>`
);

test(
  "Script",
  ev(
    c.etc.Script(() => {
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
    c.scene.BattleProcessing(
      { variableId: 123 },
      {
        ifWin: ev("よっしゃあかったぞ"),
        ifLose: ev(
          "ちょっとーーー",
          "",
          "つよすぎんよ",
          c.flow.Loop(ev("がめおヴぇｒ"))
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
    c.movement.SetMovementRoute(
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
