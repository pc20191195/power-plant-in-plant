WiFiIoT.on_wifi_connect(function (IP_Address, Device_ID) {
    basic.showIcon(IconNames.Yes)
    OLED.writeStringNewLine(IP_Address)
})
WiFiIoT.on_thingspeak_conn(function (Status, Error_code) {
    OLED.clear()
    OLED.writeStringNewLine("Thingspeak:")
    OLED.writeStringNewLine("Error:")
})
WiFiIoT.on_wifi_disconnect(function (Error_code) {
    basic.showIcon(IconNames.No)
    OLED.clear()
    OLED.writeStringNewLine("Error:" + Error_code)
})
OLED.init(128, 64)
WiFiIoT.initializeWifi(SerialPin.P16, SerialPin.P8)
WiFiIoT.setWifi("Kylie Kwan", "KylieKwan21072007")
basic.forever(function () {
    basic.showString("V=")
    basic.showNumber(pins.digitalReadPin(DigitalPin.P0) * 3 / 1023)
    basic.pause(1000)
    if (WiFiIoT.is_wifi_connect()) {
        WiFiIoT.sendThingspeak(
        "AY2W6QOS98XUD63C",
        pins.digitalReadPin(DigitalPin.P0) * 3 / 1023
        )
        basic.pause(1000)
    }
})
