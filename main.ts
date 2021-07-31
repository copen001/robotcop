// LED制御
function LEDを光らせる () {
    robotbit.rgb().show()
    robotbit.rgb().rotate(1)
    basic.pause(200)
}
// 一体一体微妙に異なる動きになるため、調整が必要です。
function 右カニ歩き () {
    robotbit.Servo(robotbit.Servos.S2, 60)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S3, 60)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 110)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S3, 130)
    basic.pause(Wait)
}
// 一体一体微妙に異なる動きになるため、調整が必要です。
function 左カニ歩き () {
    robotbit.Servo(robotbit.Servos.S3, 120)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 120)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S3, 70)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 50)
    basic.pause(Wait)
}
function サーボ初期状態 () {
    robotbit.Servo(robotbit.Servos.S1, 90)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    robotbit.Servo(robotbit.Servos.S4, 90)
}
// 一体一体微妙に異なる動きになるため、調整が必要です。
function 右回り () {
    robotbit.Servo(robotbit.Servos.S2, 120)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S3, 60)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S1, 120)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S4, 70)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S3, 110)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S1, 90)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 90)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S4, 90)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S3, 90)
    basic.pause(Wait)
}
// 一体一体微妙に異なる動きになるため、調整が必要です。
function 左回り () {
    robotbit.Servo(robotbit.Servos.S3, 60)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 120)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S4, 60)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S1, 130)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 70)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S3, 90)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S4, 90)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S1, 90)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 90)
    basic.pause(Wait)
}
// 一体一体微妙に異なる動きになるため、調整が必要です。
function 後退 () {
    robotbit.Servo(robotbit.Servos.S2, 70)
    robotbit.Servo(robotbit.Servos.S3, 70)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S1, 60)
    robotbit.Servo(robotbit.Servos.S4, 60)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 110)
    robotbit.Servo(robotbit.Servos.S3, 110)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S1, 90)
    robotbit.Servo(robotbit.Servos.S4, 90)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 110)
    robotbit.Servo(robotbit.Servos.S3, 110)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S1, 120)
    robotbit.Servo(robotbit.Servos.S4, 120)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 70)
    robotbit.Servo(robotbit.Servos.S3, 70)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S1, 90)
    robotbit.Servo(robotbit.Servos.S4, 90)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    basic.pause(Wait)
}
// 一体一体微妙に異なる動きになるため、調整が必要です。
function 前進 () {
    robotbit.Servo(robotbit.Servos.S2, 60)
    robotbit.Servo(robotbit.Servos.S3, 60)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S1, 120)
    robotbit.Servo(robotbit.Servos.S4, 120)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 110)
    robotbit.Servo(robotbit.Servos.S3, 110)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S1, 90)
    robotbit.Servo(robotbit.Servos.S4, 90)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 120)
    robotbit.Servo(robotbit.Servos.S3, 120)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S1, 60)
    robotbit.Servo(robotbit.Servos.S4, 60)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 70)
    robotbit.Servo(robotbit.Servos.S3, 70)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S1, 90)
    robotbit.Servo(robotbit.Servos.S4, 90)
    basic.pause(Wait)
    robotbit.Servo(robotbit.Servos.S2, 90)
    robotbit.Servo(robotbit.Servos.S3, 90)
    basic.pause(Wait)
}
// LED制御
function LEDを消す () {
    robotbit.rgb().clear()
    robotbit.rgb().show()
    robotbit.rgb().setPixelColor(0, neopixel.colors(NeoPixelColors.Orange))
    robotbit.rgb().setPixelColor(1, neopixel.colors(NeoPixelColors.Indigo))
    robotbit.rgb().setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
    robotbit.rgb().setPixelColor(3, neopixel.colors(NeoPixelColors.Violet))
}
let 距離 = 0
let Wait = 0
// ブザーはP0端子
pins.analogSetPitchPin(AnalogPin.P0)
Wait = 200
let Wait2 = 400
let Switch = 0
basic.clearScreen()
サーボ初期状態()
// LED制御
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P8) == 0) {
        LEDを光らせる()
    } else {
        LEDを消す()
    }
})
// 音センサーで数値(アナログ値)を読み取る
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) < 800) {
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.OnceInBackground)
        if (Switch == 0) {
            Switch = 1
        } else {
            Switch = 0
        }
    }
})
// 超音波センサーで距離(cm)を測定
basic.forever(function () {
    距離 = sonar.ping(
    DigitalPin.P12,
    DigitalPin.P13,
    PingUnit.Centimeters
    )
    // 2桁の数字をスクロール無しで表示する拡張機能「WhaleySansFont」
    whaleysans.showNumber(距離)
    basic.pause(200)
})
// メインの処理
basic.forever(function () {
    if (Switch == 0) {
        サーボ初期状態()
    } else {
        前進()
        if (pins.digitalReadPin(DigitalPin.P8) == 0) {
            for (let index = 0; index < 5; index++) {
                後退()
            }
            if (randint(0, 1) == 0) {
                for (let index = 0; index < 7; index++) {
                    右カニ歩き()
                }
                for (let index = 0; index < 7; index++) {
                    右回り()
                }
            } else {
                for (let index = 0; index < 7; index++) {
                    左カニ歩き()
                }
                for (let index = 0; index < 7; index++) {
                    左回り()
                }
            }
        }
    }
})
