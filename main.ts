basic.forever(function () {
    let Light_Level = 0
    if (Light_Level > 128) {
        basic.showString("Good Morning")
    } else {
        images.createBigImage(`
            # . . . . . . . . #
            . # . . . . . . # .
            . . # . . . . # . .
            . . . # . . # . . .
            . . . . # # . . . .
            `).scrollImage(1, 200)
    }
})
