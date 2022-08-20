/**
 * The convergence may not be optimal (try 80 for example). I worked around some issues by using a ceiling rounded div by 2.
 */
input.onButtonPressed(Button.A, function () {
    Result = 1
})
input.onButtonPressed(Button.AB, function () {
    Result = 3
})
input.onButtonPressed(Button.B, function () {
    Result = 2
})
let Result = 0
let Step = 25
let Guess = 50
Result = 0
basic.showString("Go")
while (Result != 3) {
    basic.showNumber(Guess)
    if (Result == 1) {
        Guess = Guess - Step
        Step = Math.ceil(Step / 2)
        Result = 0
    } else if (Result == 2) {
        Guess = Guess + Step
        Step = Math.ceil(Step / 2)
        Result = 0
    }
}
basic.showString("J'ai trouvé !")
basic.pause(2000)
control.reset()
