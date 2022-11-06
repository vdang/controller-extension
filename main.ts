namespace controller {
    //% block
    export function isLeftJoystickClicked() {
        return pins.digitalReadPin(DigitalPin.P8) == 0
    }
    function leftJoystickX () {
        return 2 - Math.round(pins.map(
        pins.analogReadPin(AnalogPin.P1),
        0,
        1023,
        0,
        4
        ))
    }
    //% block
    export function isLeftJoystickMovedLeft() {
        return leftJoystickX() < 0
    }
    //% block
    export function isLeftJoystickMovedRight() {
        return leftJoystickX() > 0
    }
    function leftJoystickY() {
        return 2 - Math.round(pins.map(
            pins.analogReadPin(AnalogPin.P0),
            0,
            1023,
            0,
            4
        ))
    }
    //% block
    export function isLeftJoystickMovedDown() {
        return leftJoystickY() < 0
    }
    //% block
    export function isLeftJoystickMovedUp() {
        return leftJoystickY() > 0
    }
    //% block
    export function isRightJoystickClicked() {
        return pins.digitalReadPin(DigitalPin.P9) == 0
    }
    function rightJoystickX () {
        return 2 - Math.round(pins.map(
        pins.analogReadPin(AnalogPin.P3),
        0,
        1023,
        0,
        4
        ))
    }
    //% block
    export function isRightJoystickMovedLeft() {
        return rightJoystickX() < 0
    }
    //% block
    export function isRightJoystickMovedRight() {
        return rightJoystickX() > 0
    }
    function rightJoystickY () {
        return 2 - Math.round(pins.map(
        pins.analogReadPin(AnalogPin.P2),
        0,
        1023,
        0,
        4
        ))
    }
    //% block
    export function isRightJoystickMovedDown() {
        return rightJoystickY() < 0
    }
    //% block
    export function isRightJoystickMovedUp() {
        return rightJoystickY() > 0
    }
    pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P9, PinPullMode.PullUp)
    led.enable(false)
}
