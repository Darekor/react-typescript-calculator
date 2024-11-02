function CalculatorDisplay({value,result}:{value:string,result:string}){
    return (
        <div id="display-container">
            <p id='formula-display'>{value}</p>
            <hr />
            <p id = 'result-display'>{result}</p>
        </div>
    )
}

export default CalculatorDisplay