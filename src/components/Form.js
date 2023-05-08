import React, { useState } from "react";

// Funtional Component: with withState

// Uisng Arrow Function
const FormCustom = ({ myStyles }) => {
    // console.log(`${JSON.stringify(myStyles)}`);

    // use state and other React features without writing a class.
    const [inputStyles, setInputStyles] = useState(myStyles);
    let errorStyles = inputStyles;

    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        if (name === "") {
            event.target.elements.name.setCustomValidity("Please enter your name.");
            setInputStyles({ display: 'inline-block' });
            // console.log(`errorStyles: ${JSON.stringify(errorStyles)}`);
        } else {
            event.target.elements.name.setCustomValidity("");
            setInputStyles({ display: 'none' });
        }
        // Here you can handle the form submission logic, such as making an API call or updating the state.
    };

    return (
        <div className="componentSpace">
            <h3>Functional Component:</h3>
            <p>With hooks: useState</p>
            <br />
            <form className="searchBar" onSubmit={handleSubmit}>
                <h4>User name:</h4>
                <input type="text" id="name" name="name"></input>
                <br />
                <div id="error-message" className="error-message" style={errorStyles}>Please enter your name.</div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormCustom;