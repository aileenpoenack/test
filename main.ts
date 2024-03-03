input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    while (receivedString == "") {
        kanal += 1
    }
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
let kanal = 1
radio.setGroup(kanal)
