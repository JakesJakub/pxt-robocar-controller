radio.set_group(69)

def logo_is_pressed():
    radio.send_number(10)
    basic.show_leds("""
        . . #  . 
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        """)
input.logo_is_pressed()

def button_is_pressed_a():
    radio.send_number(20)
    basic.show_leds("""
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        """)
input.button_is_pressed(Button.A)

def button_is_pressed_b():
    radio.send_number(30)
    basic.show_leds("""
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        """)
input.button_is_pressed(Button.B)

def pin_is_pressed_P0():
    radio.send_number(180)
input.pin_is_pressed(TouchPin.P0)

def pin_is_pressed_P1():
    radio.send_number(360)
input.pin_is_pressed(TouchPin.P1)