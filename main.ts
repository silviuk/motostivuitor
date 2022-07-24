let B = 0
let G = 0
let R = 0
let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
basic.forever(function () {
    R = 0
    G = 0
    B = 0
    for (let index = 0; index < 255; index++) {
        R += 1
        B += -1
        strip.showColor(neopixel.rgb(R, G, B))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        G += 1
        R += -1
        strip.showColor(neopixel.rgb(R, G, B))
        basic.pause(1)
    }
    for (let index = 0; index < 255; index++) {
        B += 1
        G += -1
        strip.showColor(neopixel.rgb(R, G, B))
        basic.pause(1)
    }
})
