radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 5) {
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Run, 100)
        basic.showNumber(5)
    } else if (receivedNumber == 6) {
        mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Left, 50, 100)
        basic.showNumber(6)
    } else if (receivedNumber == 7) {
        mbit_小车类.CarCtrlSpeed2(mbit_小车类.CarState.Car_Right, 100, 50)
        basic.showNumber(7)
    } else if (receivedNumber == 8) {
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Back, 100)
        basic.showNumber(8)
    } else {
        mbit_小车类.CarCtrlSpeed(mbit_小车类.CarState.Car_Stop, 100)
        basic.showNumber(0)
    }
})
radio.setGroup(88)
