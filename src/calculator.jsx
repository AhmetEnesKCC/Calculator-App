import React from "react";

import "./CSS/main.css";

class Calculator extends React.Component {
  state = {};
  inputCalc() {
    var val = document.getElementsByName("input")[0];
    val.value = "0"
    val.style.fontSize = "80px"
    for ( var a = 0; a < document.getElementsByClassName("grid-item").length; a++) {
      document.getElementsByClassName("grid-item")[a].style.pointerEvents = "visible"
    } 
  }
  empty() {
    var val = document.getElementsByName("input")[0];
    val.value = "ERROR"
  }
  inputNumbers(num) {
    var val = document.getElementsByName("input")[0];
    var media =  window.matchMedia("(max-width: 576px)")
    if ( val.value === "0") {
      val.value = val.value.slice(0,-1)
      val.value += parseInt(num, 10)
    }
    else if ( val.value !== 0) {
      val.value += parseInt(num, 10)
    if (val.value.length > 5 && val.value.length < 10 ) {
       if ( media.matches) {
        val.style.fontSize = "15vw"
       }
       else {
        val.style.fontSize = "50px"
       }
    }
    else if(val.value.length < 5) {
      if ( media.matches) {
        val.style.fontSize = "20vw"
       }
       else {
        val.style.fontSize = "80px"
       }
    }
    else if (val.value.length > 10) {
      if ( media.matches) {
        val.style.fontSize = "10vw"
       }
       else {
        val.style.fontSize = "30px"
       }
    }
    if (val.value.length > 15) {
      val.value = "ERROR 404"
      document.getElementsByClassName("inputCalc")[0].style.textAlign = "center"
      for ( var a = 0; a < document.getElementsByClassName("grid-item").length; a++) {
        document.getElementsByClassName("grid-item")[a].style.pointerEvents = "none"
      } 
        document.getElementsByClassName("AC")[0].style.pointerEvents = "visible"
      
    }
     
    
    
    }
  }
  equal() {
    var val = document.getElementsByName("input")[0];
    var evaled = eval(val.value)
    val.value = evaled
  }
  inputSymbols(sym) {
    var val = document.getElementsByName("input")[0];
    if (sym === "X") {
      sym = "*"
    }
    if ( val.value !== "0") {
      if ( val.value.match(/\d$/gi)) {
        val.value = val.value + " " + sym + " "
      }
    }
   
  }
  plusMinus() {
    var val = document.getElementsByName("input")[0];
    val.value = -val.value
  }
  render() {
    return (
      <div className="container bgBlack">
        <div className="inputCalcCont">
          <input  name="input" className="inputCalc" disabled value="0" type="text"/>
        </div>
        <div className="grid-container">
          <div  onClick={this.inputCalc} className="grid-item AC">
          <div className="symbol grey">
              <div>AC</div>
            </div>
          </div>
          <div onClick={() => this.plusMinus()} className="grid-item plusMinus">
          <div className="symbol grey">
              <div>-/+</div>
            </div>
          </div>
          <div onClick={() => this.inputSymbols("%")}className="grid-item remain">
          <div className=" symbol grey">
              <div>%</div>
            </div>
          </div>
          <div onClick={() => this.inputSymbols("/")}className="grid-item divide">
          <div className="symbol">
              <div>/</div>
            </div>
          </div>
          <div onClick={() => this.inputNumbers(7)} className="grid-item seven">
            <div className="number">
              <div>7</div>
            </div>
          </div>
          <div onClick={() => this.inputNumbers(8)} className="grid-item eight">
            <div className="number">
            <div>8</div>
            </div>
          </div>
          <div onClick={() => this.inputNumbers(9)} className="grid-item nine">
          <div className="number">
          <div>9</div>
          </div>
          </div>
          <div onClick={() => this.inputSymbols("X")} className="grid-item multiply">
          <div className="symbol">
              <div>x</div>
            </div>
          </div>
          <div onClick={() => this.inputNumbers(4)}className="grid-item four">
          <div className="number">
          <div>4</div>
          </div>
          </div>
          <div onClick={() => this.inputNumbers(5)}className="grid-item five">
          <div className="number">
          <div>5</div>
          </div>
          </div>
          <div onClick={() => this.inputNumbers(6)}className="grid-item six">
          <div className="number">
          <div>6</div>
          </div>
          </div>
          <div onClick={() => this.inputSymbols("-")} className="grid-item minus">
            <div className="symbol">
              <div>-</div>
            </div>
          </div>
          <div onClick={() => this.inputNumbers(1)} className="grid-item one">
          <div className="number">
          <div>1</div>
          </div>
          </div>
          <div onClick={() => this.inputNumbers(2)} className="grid-item two">
          <div className="number">
          <div>2</div>
          </div>
          </div>
          <div onClick={() => this.inputNumbers(3)} className="grid-item three">
          <div className="number">
          <div>3</div>
          </div>
          </div>
          <div onClick={() => this.inputSymbols("+")} className="grid-item plus">
          <div className="symbol">
              <div>+</div>
            </div>
          </div>
          <div onClick={() => this.inputNumbers(0)} className="grid-item zero">
            <div className="number">
              <div>0</div>
            </div>
          </div>
          <div onClick={() => this.inputSymbols(".")} className="grid-item point">
            <div className="symbol">
              <div>.</div>
            </div>
          </div>
          <div onClick={() => this.equal()} className="grid-item equal">
          <div className="symbol">
              <div>=</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
