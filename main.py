@namespace
class controller:
    # % block
    def isLeftJoystickClicked():
        return pins.digital_read_pin(DigitalPin.P8) == 0
    # % block
    def leftJoystickX():
        return 2 - Math.round(pins.map(pins.analog_read_pin(AnalogPin.P1), 0, 1023, 0, 4))
    # % block
    def leftJoystickY():
        return 2 - Math.round(pins.map(pins.analog_read_pin(AnalogPin.P0), 0, 1023, 0, 4))
    # % block
    def isRightJoystickClicked():
        return pins.digital_read_pin(DigitalPin.P9) == 0
    # % block
    def rightJoystickX():
        return 2 - Math.round(pins.map(pins.analog_read_pin(AnalogPin.P3), 0, 1023, 0, 4))
    # % block
    def rightJoystickY():
        return 2 - Math.round(pins.map(pins.analog_read_pin(AnalogPin.P2), 0, 1023, 0, 4))
    pins.set_pull(DigitalPin.P8, PinPullMode.PULL_UP)
    pins.set_pull(DigitalPin.P9, PinPullMode.PULL_UP)
    led.enable(False)