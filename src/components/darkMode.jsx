import React from 'react'
import Dark from   "../Images/darkMode.png"
import Light from   "../Images/lightMode.png"

import "../CSS/darkMode.css"

class DarkMode extends React.Component {
    state={
        darkMode: "ON",
        darkLightImg: Light,
    }
    darkMode() {
        var x = document.getElementsByClassName("darkMode")[0]
        var Click = document.getElementsByClassName("switchImg")[0]
        var body = document.getElementsByTagName("BODY")[0]
        var container = document.getElementsByClassName("container")[0]
        var input = document.getElementsByClassName("inputCalc")[0]
        if (this.state.darkMode === "ON") {
           body.style.backgroundColor = "white"
           container.style.backgroundColor = "white"
           input.style.color = "black"
            this.setState({
                darkMode: "OFF",
                darkLightImg: Dark, 
            })
        }
        if (this.state.darkMode === "OFF") {
            body.style.backgroundColor = "#707070"
            container.style.backgroundColor = "black"
            input.style.color = "white"
            this.setState({
                darkMode: "ON",
                darkLightImg: Light,
            })
        }
        
    }
    lightMode() {
        
    }
    render() {
        return (
            <div  className="switchContainer">
                <div className="switch">
                    <img src={this.state.darkLightImg}  onClick={() => this.darkMode()} className="switchImg"/>
                </div>
            </div>
        )
    }
}

export default DarkMode;