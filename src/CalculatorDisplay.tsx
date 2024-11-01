function CalculatorDisplay({value,result}:{value:string,result:string}){
    return (
        <div>
            <p>{value}</p>
            <p>{result}</p>
        </div>
    )
}

export default CalculatorDisplay