namespace controller {
    //% block
    export function isLeftJoystickClicked() {
        return pins.digitalReadPin(DigitalPin.P8) == 0
    }
    //% block
    export function leftJoystickX () {
        return 2 - Math.round(pins.map(
        pins.analogReadPin(AnalogPin.P1),
        0,
        1023,
        0,
        4
        ))
    }
    //% block
    export function leftJoystickY() {
        return 2 - Math.round(pins.map(
            pins.analogReadPin(AnalogPin.P0),
            0,
            1023,
            0,
            4
        ))
    }
    //% block
    export function isRightJoystickClicked() {
        return pins.digitalReadPin(DigitalPin.P9) == 0
    }
    //% block
    export function rightJoystickX () {
        return 2 - Math.round(pins.map(
        pins.analogReadPin(AnalogPin.P3),
        0,
        1023,
        0,
        4
        ))
    }
    //% block
    export function rightJoystickY () {
        return 2 - Math.round(pins.map(
        pins.analogReadPin(AnalogPin.P2),
        0,
        1023,
        0,
        4
        ))
    }
    pins.setPull(DigitalPin.P8, PinPullMode.PullUp)
    pins.setPull(DigitalPin.P9, PinPullMode.PullUp)
    led.enable(false)
}
