function shoSky(crn: number) {
    for (let index = 0; index <= 4; index++) {
        for (let index2 = 0; index2 <= 4; index2++) {
            led.plotBrightness(index2, index, 12 * cosmos[crn + (index2 + 50 * index)])
        }
    }
}
function findDir() {
    dir2 = 0
    if (input.acceleration(Dimension.X) < -300) {
        dir2 = 4
    } else {
        if (input.acceleration(Dimension.Y) > 300) {
            dir2 = 3
        }
        if (input.acceleration(Dimension.Y) < -500) {
            dir2 = 1
        }
    }
    if (input.acceleration(Dimension.X) > 300) {
        dir2 = 2
    }
    return dir2
}
let d = 0
let dir2 = 0
let cosmos: number[] = []
let alt = 2
for (let index = 0; index < 5 * 50; index++) {
    if (40 < randint(0, 50)) {
        cosmos.push(randint(2, 6))
    } else {
        cosmos.push(0)
    }
}
let corner = 0
let speed = 0
basic.forever(function () {
    led.plot(2, alt)
    basic.pause(100)
    led.unplot(2, alt)
    shoSky(corner)
    d = findDir()
    if (d == 1) {
        alt += -1
        if (alt < 0) {
            alt = 0
        }
    }
    if (d == 3) {
        alt += 1
        if (alt > 4) {
            alt = 4
        }
    }
    if (d == 4) {
        speed = -1
    }
    if (d == 2) {
        speed = 1
    }
    if (d == 0) {
        speed = 0
    }
    corner = speed + corner
})
