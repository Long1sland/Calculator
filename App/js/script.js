const number = document.querySelectorAll(".number");
const display = document.querySelector("#display");
const reset  = document.querySelector("#reset");
const deletes = document.querySelector("#del");
const equals = document.querySelector("#equals")


class calulator {
    constructor (screen) {
        this.display = screen
        this.clear()
    }

    clear() {
        this.value = ""
    }

    updateDisplay() {
        this.display.value = this.value
    }

    appendOnScreen (number) {
        this.value += number.innerText
    }

    appendKeys () {
        this.value = this.display.value.toString()
    }

    delete () {
          this.value = this.value.toString().slice(0,-1)  
    }

    compute () {
        
        try {
            this.value = eval(this.value)
        }

        catch {
            alert("Invalid Input!")
            this.clear()
        }
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

equals.addEventListener("click", () => {
    calculator.compute()
    calculator.updateDisplay()
})

display.addEventListener("change",() => {
    calculator.appendKeys()
    calculator.compute()
    calculator.updateDisplay()
    calculator.clear()    
})

