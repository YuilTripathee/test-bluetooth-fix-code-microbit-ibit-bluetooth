control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == 1) {
        iBIT.Motor(ibitMotor.Backward, 100)
    } else if (control.eventValue() == 3) {
        iBIT.Motor(ibitMotor.Forward, 100)
    } else if (control.eventValue() == 5) {
        iBIT.Turn(ibitTurn.Right, 50)
    } else if (control.eventValue() == 7) {
        iBIT.Turn(ibitTurn.Left, 50)
    } else if (control.eventValue() == 9) {
        iBIT.Servo(ibitServo.SV1, 30)
    } else if (control.eventValue() == 11) {
        iBIT.Servo(ibitServo.SV1, 90)
    } else if (control.eventValue() == 13) {
        iBIT.Servo(ibitServo.SV2, 0)
    } else if (control.eventValue() == 15) {
        iBIT.Servo(ibitServo.SV2, 90)
    } else {
        iBIT.MotorStop()
    }
})
let newVariable = 0
iBIT.Servo(ibitServo.SV1, 90)
basic.forever(function () {
	
})
