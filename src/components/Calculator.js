import React from "react"
import { relative } from "path";

class Calculator extends React.Component {
    constructor() {
        super()
        this.state ={
            displayText:"",
            variableOne: 0,
            variableTwo: 0,
            action:"", 
            clear: false
        }
        this.addToDisplay = this.addToDisplay.bind(this)
        this.clearDisplay = this.clearDisplay.bind(this)
        this.deleteLastChar = this.deleteLastChar.bind(this)
        this.gcd = this.gcd.bind(this)
        this.lcm = this.lcm.bind(this)
        this.result = this.result.bind(this)
    }

    addToDisplay(event) {
        const {innerText} = event.target
        this.setState((prevState) => {
            if(prevState.clear)
                return{
                    displayText: innerText,
                    clear: false
                }
            else if(prevState.displayText.length < 10)  
                return { displayText : prevState.displayText + innerText}
    })
    }

    clearDisplay(event) {
        this.setState({ 
            displayText : ""
        })
    }

    deleteLastChar(event) {
        this.setState((prevState) => {
            return { 
            displayText : prevState.displayText.slice(0, -1)
            }
        })
    }
          
    gcd(event) {
        this.setState((prevState) => { 
            return{
            variableOne: prevState.displayText,
            displayText : "",
            action: "gcd"
            }
        })
    }

    lcm(event) {
        this.setState((prevState) => { 
            return{
            variableOne: prevState.displayText,
            displayText : "",
            action: "lcm"
            }
        })
    }

    calculateGCD(variableOne,variableTwo) {
        let result = 1
        if (variableOne % variableTwo === 0) {
            result = variableTwo
        }
        else if (variableTwo % variableOne === 0) {
            result = variableOne
        }
        else {
            const max = variableOne > variableTwo? variableTwo : variableOne
            for(let i=2;i<= max; i++) {
                if(i >= variableOne || i >= variableTwo)
                    break
                while(variableOne % i == 0 && variableTwo % i == 0) {
                    result *= i
                    variableOne /= i
                    variableTwo /= i
                }
            }
        }
        return result
    }

    calculateLCM(variableOne,variableTwo) {
        let result = 1
        if (variableOne % variableTwo === 0) {
            result = variableOne
        }
        else if (variableTwo % variableOne === 0) {
            result = variableTwo
        }
        else {
            const max = variableOne > variableTwo? variableTwo : variableOne
            for(let i=2;i<= max; i++) {
                if(i >= variableOne || i >= variableTwo)
                    break
                while(variableOne % i == 0 && variableTwo % i == 0) {
                    result *= i
                    variableOne /= i
                    variableTwo /= i
                }
            }
            result *= variableOne * variableTwo
        }
        return result
    }

    result(event) {
        this.setState((prevState) => {
            if(prevState.action === "gcd"){
                let variableOne = parseInt(prevState.variableOne)
                let variableTwo = parseInt(prevState.displayText)   
                let result = this.calculateGCD(variableOne,variableTwo)
                return{
                    variableOne: 0,
                    displayText : result,
                    clear: true,
                    action: ""
                    }

            }
            else if(prevState.action == "lcm"){
                let variableOne = parseInt(prevState.variableOne)
                let variableTwo = parseInt(prevState.displayText)   
                let result = this.calculateLCM(variableOne,variableTwo)
                return{
                    variableOne: 0,
                    displayText : result,
                    clear: true,
                    action: ""
                    }
            }
        })
    }

    render() {
        return (
            <div className="calculator" style={{marginTop: 5 +'em', marginLeft: 20 + 'em'}}>
                <input type="text" value={this.state.displayText}
                 readOnly></input>
                 <br/>
                <button onClick={this.addToDisplay}>1</button>
                <button onClick={this.addToDisplay}>2</button>
                <button onClick={this.addToDisplay}>3</button>
                <button onClick={this.addToDisplay}>4</button>
                <button onClick={this.addToDisplay}>5</button>
                <br/>
                <button onClick={this.addToDisplay}>6</button>
                <button onClick={this.addToDisplay}>7</button>
                <button onClick={this.addToDisplay}>8</button>
                <button onClick={this.addToDisplay}>9</button>
                <button onClick={this.addToDisplay}>0</button>
                <br/>
                <button onClick={this.clearDisplay}>C</button>
                <button onClick={this.deleteLastChar}>D</button>
                <button onClick={this.gcd}>GCD</button>
                <button onClick={this.lcm}>LCM</button>
                <button onClick={this.result}>=</button>
            </div>
        )
    }
}

export default Calculator