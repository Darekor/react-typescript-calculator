import CalculatorDisplay from "./CalculatorDisplay"
import ButtonContainer from "./ButtonContainer"
import { useState } from "react"
import { evaluate } from "mathjs";

const SYNTAXERRORR = "Syntax Error!";

function CalculatorBody() {

  const [display,setDisplay] = useState("");

  function addSymbol(symbol:string){
    if (['+','-','*','/','.'].includes(symbol) && ['+','-','*','/','.'].includes(display[display.length-1]))
        setDisplay(display.substring(0,display.length-1)+symbol);
    else
      setDisplay(display+symbol);
  }

  function clearDisplay(){
    setDisplay("");
  }

  function removeSymbol(){
    setDisplay(display.substring(0,display.length-1));
  }

  function calculate(){
    if (display=="")
      return "";
      try {
        let res:string = evaluate(display).toString();
        return res;
      } 
      catch (error) {
        return SYNTAXERRORR;
      }
  }

  function formatResult(){
    var t = calculate();
    if (t!=="" && t!==SYNTAXERRORR)
      return "= " + t;
    return t;
  }

  function makeResult(){
    let t = calculate()
    if (t!=SYNTAXERRORR)
      setDisplay(t); 
  }

  return (
    <div id="calculator-body">
      <CalculatorDisplay value={display} result={formatResult()}/>
      <ButtonContainer onAdd={addSymbol} onRemove={removeSymbol} onEquality={makeResult} onClear={clearDisplay}/>
    </div>
  )
}

export default CalculatorBody
