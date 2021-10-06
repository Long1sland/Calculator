const number = document.querySelectorAll(".number");
const display = document.querySelector("#display");
const reset  = document.querySelector("#reset");
const deletes = document.querySelector("#del");


class calulator {
    constructor (screen) {
        this.display = screen
        this.clear()
    }

    clear() {
        this.value = ""
    }

    updateDisplay() {
        this.display.value = this.value.toString()
    }

    appendOnScreen (number) {
        this.value += number.innerText
    }

    appendKeys () {
        this.value += this.display.value
    }

    inputChecker (){
        if(true) {
            console.log("water")
        }

        else{
            console.log("no problem")
        }
    }

    delete () {
        this.value = this.value.slice(0,-1)
    }

    compute () {

    }
}

const calculator = new calulator(display)


number.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendOnScreen(button)
        calculator.updateDisplay()
    })
})





reset.addEventListener("click", () => {
    calculator.clear()
    calculator.updateDisplay()
})

deletes.addEventListener("click", () => {
    calculator.delete()
    calculator.updateDisplay()
})

