basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() > 26 && input.temperature() < 34) {
        basic.showArrow(ArrowNames.East)
    } else {
        if (input.temperature() > 34) {
            basic.showArrow(ArrowNames.North)
        } else {
            basic.showArrow(ArrowNames.South)
        }
    }
})
