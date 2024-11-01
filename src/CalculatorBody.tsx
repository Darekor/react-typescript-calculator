import CalculatorDisplay from "./CalculatorDisplay"
import ButtonContainer from "./ButtonContainer"
import { useState } from "react"
import { evaluate } from "mathjs";

const SYNTAXERRORR = "Syntax Error!";
function CalculatorBody() {

  const [display,setDisplay] = useState("2+2");

  function addSymbol(symbol:string){
    setDisplay(display+symbol);
  }

  function removeSymbol(){
    setDisplay(display.substring(0,display.length-1));
  }

  function calculate(){
    try {
      let res = evaluate(display).toString();
      return res;
    } 
    catch (error) {
      return SYNTAXERRORR;
    }
  }


  function makeResult(){
    let t = calculate()
    if (t!=SYNTAXERRORR)
      setDisplay(t); 
  }

  return (
    <div>
      <CalculatorDisplay value={display} result={calculate()}/>
      <ButtonContainer onAdd={addSymbol} onRemove={removeSymbol} onEquality={makeResult}/>
    </div>
  )
}

export default CalculatorBody
