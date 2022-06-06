radio.setGroup(69)
function logo_is_pressed() {
    radio.sendNumber(10)
    basic.showLeds(`
        . . #  . 
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
}

input.logoIsPressed()
function button_is_pressed_a() {
    radio.sendNumber(20)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
}

input.buttonIsPressed(Button.A)
function button_is_pressed_b() {
    radio.sendNumber(30)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
}

input.buttonIsPressed(Button.B)
function pin_is_pressed_P0() {
    radio.sendNumber(180)
}

input.pinIsPressed(TouchPin.P0)
function pin_is_pressed_P1() {
    radio.sendNumber(360)
}

input.pinIsPressed(TouchPin.P1)
