import React, { Component } from "react";
import './App.css';
// Class component: consist of state, render() 

class AddNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputText: "",
            myStyles: {
                display: 'none'
            }
        };
    }

    createUI() {
        return (
            <div className="searchBar" >
                <h4>Other Party:</h4>
                <input placeholder=" Search... " type="text" onChange={this.onKeyPress} value={this.state.inputText}></input>
            </div>
        )
    }

    onKeyPress = (event) => {
        let typedText = event.target.value;
        const charsArray = "(`~$%^&*+=[]{ }<>?/|\\)".split("");
        let inputTextCheckFail = false;
        let checkTypedChar = "";
        for (let item of charsArray) {
            if (typedText.length !== 0) { checkTypedChar = typedText[typedText.length - 1] }
            if (checkTypedChar === item) {
                inputTextCheckFail = true;
                break;
            }
        };
        if (!inputTextCheckFail) { this.setState({ inputText: typedText }) }
    };

    onKeyDown = (event) => {
        console.log("Key Down: " + event.target.value);
        // alert("Hello! I am an alert box!!");
        // event.preventDefault();
        return false;
    }

    render() {
        return (
            <div className="componentSpace">
                <h3>Class Component:</h3>
                <p>Other Party Special Chars Prevention</p>
                {this.createUI()}
            </div>
        )
    }

}

export default AddNew;