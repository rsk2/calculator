import React from "react";

class Calculator extends React.Component {
    constructor() {
        super()
        this.state ={
            displayText:"0",
            variableOne: "0",
            variableTwo: "0",
            action:"", 
            forgetDisplayText: false,
            historyText:" "
        }
        this.historyRef = React.createRef()
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
            if (parseInt(prevState.displayText) === 0)
                prevState.displayText = ""
            if(prevState.forgetDisplayText)
                return{
                    displayText: innerText,
                    forgetDisplayText: false
                } 
            if(prevState.displayText.length < 10)  
                return { displayText : prevState.displayText + innerText}
    })
    }

    clearDisplay(event) {
        this.setState({ 
            displayText : "0"
        })
    }

    deleteLastChar(event) {
        this.setState((prevState) => {
            let newDisplayText = "0"
            if(prevState.displayText.length > 1)
                newDisplayText = prevState.displayText.slice(0, -1)
            return { 
            displayText : newDisplayText
            }
        })
    }

    componentDidMount() {
        
    }
          
    gcd(event) {
        this.setState((prevState) => { 
            if (!prevState.displayText )
                prevState.displayText = "0"
            return{
            variableOne: prevState.displayText,
            displayText : "",
            action: "gcd",
            historyText: prevState.displayText + " GCD "
            }
        })
    }

    lcm(event) {
        this.setState((prevState) => {
            if (!prevState.displayText )
                prevState.displayText = "0" 
            return{
            variableOne: prevState.displayText,
            displayText : "",
            action: "lcm",
            historyText: prevState.displayText + " LCM "
            }
        })
    }

    calculateGCD(variableOne,variableTwo) {
        if (variableOne === 0 || variableTwo === 0)
            return 0
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
            let variableOne = parseInt(prevState.variableOne)
            if (prevState.displayText === "")
                prevState.displayText = 0
                let variableTwo = parseInt(prevState.displayText)  
                if(prevState.action === "gcd"){
                let result = String(this.calculateGCD(variableOne,variableTwo))
                return{
                    variableOne: 0,
                    displayText : result,
                    forgetDisplayText: true,
                    action: "",
                    historyText: prevState.historyText + " " + prevState.displayText + " = " + result
                    }

                }
                else if(prevState.action == "lcm"){      
                let result = String(this.calculateLCM(variableOne,variableTwo))
                return{
                    variableOne: 0,
                    displayText : result,
                    forgetDisplayText: true,
                    action: "",
                    historyText: prevState.historyText + " " + prevState.displayText + " = " + result
                    }
                }
        })
    }

    render() {
        return (
            <div className="calculator" >           
                <input type="text" value={this.state.displayText} className="display"
                readOnly></input>
                 <div className="inputBoxes">
                    <div className="row1">
                        <button onClick={this.addToDisplay}>1</button>
                        <button onClick={this.addToDisplay}>2</button>
                        <button onClick={this.addToDisplay}>3</button>
                        <button onClick={this.addToDisplay}>4</button>
                        <button onClick={this.addToDisplay}>5</button>
                        <button onClick={this.clearDisplay} style={{backgroundColor:"#ff3333", color:"white"}}>
                            C</button>
                    </div>
                    <div className="row2">
                        <button onClick={this.addToDisplay}>6</button>
                        <button onClick={this.addToDisplay}>7</button>
                        <button onClick={this.addToDisplay}>8</button>
                        <button onClick={this.addToDisplay}>9</button>
                        <button onClick={this.addToDisplay}>0</button>
                        <button onClick={this.deleteLastChar} style={{backgroundColor:"#fc33ff", color:"white"}}> 
                            &#8592; </button>
                    </div>
                    
                    <div className="row3">
                        <button onClick={this.gcd} style={{backgroundColor:"#33fff9"}}>
                            GCD</button>
                        <button onClick={this.lcm} style={{backgroundColor:"#33ff90"}}>
                            LCM</button>                       
                    </div>
                    <div className = "row4">
                    <button onClick={this.result} style={{backgroundColor:"#338dff", color:"white"}}>
                            =</button>
                    </div>
                   
                </div>
                <textarea  value={this.state.historyText} readOnly 
                     className="history" ref={this.historyRef} 
                     rows={Math.ceil(this.state.historyText.length/24)}></textarea>
            </div>
        )
    }
}

export default Calculator