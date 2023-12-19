//@ts-check

// import { parse as ev, events } from "Text2Frame-JS";
import { parse as ev, events as c } from "../dist";

const test = (name, expect, to) => {
  console.log(`=== ${name} ===`);
  console.log(expect);
  console.log("================== \n");
  if (to && expect !== to.trimStart()) throw new Error(name + ": test failed!");
};

test(
  "ShowChoices",
  ev(
    c.message.ShowChoices({
      background: "DIM",
      position: "MIDDLE",
      init: "NONE",
      cancel: "BRANCH",
      cases: [
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
    })
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
    c.message.ScrollingText({
      noSkip: true,
      text: ev(
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
    })
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
    c.flow.Check({
      condition: "$gameSwitches.value(10)",
      then: ev(
        c.message.Window({ name: "名前" }),
        "てきすとてきすとてきすとてきすと"
      ),
    })
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
    c.flow.Loop({
      content: ev(
        c.message.Window({ name: "名前" }),
        "てきすとてきすとてきすとてきすと"
      ),
    })
  ),
  `
<Loop>
<Name: 名前>
てきすとてきすとてきすとてきすと
<RepeatAbove>`
);

test(
  "Comment",
  ev(
    c.flow.Comment({
      text: ev("てきすとてきすとてきすとてきすと"),
    })
  ),
  `
<Comment>
てきすとてきすとてきすとてきすと
</Comment>`
);

test(
  "Script",
  ev(
    c.interpreter.Script({
      code: ev("てきすとてきすとてきすとてきすと"),
    })
  ),
  `
<Script>
てきすとてきすとてきすとてきすと
</Script>`
);

test(
  "BattleProcessing",
  ev(
    c.scene.BattleProcessing({
      id: { variableId: 123 },
      ifWin: ev("よっしゃあかったぞ"),
      ifLose: ev(
        "ちょっとーーー",
        "",
        "つよすぎんよ",
        c.flow.Loop({ content: ev("がめおヴぇｒ") })
      ),
    })
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
    c.movement.SetMovementRoute({
      id: "THIS_EVENT",
      repeat: false,
      skip: false,
      wait: true,
      routes: (r) => [
        r.jump(1, 2),
        r.wait(60),
        r.changeSwitch({ switchId: 3 }, true),
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
    })
  ),
  `
<SetMovementRoute: ThisEvent, false, false, true>
<Jump: 1, 2>
<McWait: 60>
<SwitchOn: SW[3]>
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
