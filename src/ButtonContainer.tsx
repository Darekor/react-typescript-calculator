function ButtonContainer({onAdd,onRemove,onEquality,onClear}:{onAdd:(a:string)=>void,onRemove:()=>void, onEquality:()=>void, onClear:()=>void}){
    
    function makeNumberButtons(){
        let res = [];
        for (let i =0; i<10;++i){
            res.push(
                <button className="number-button" key={i.toString()} onClick={()=>onAdd(i.toString())}>{i}</button>
            );
        }     
        return res  
    }

    function makeSignButtons(){
        let signs = ['+','-','*','/','(',')','.'];
        let res = [];
        signs.forEach(sign => {
            res.push(
                <button key={sign} className="sign-button" onClick={()=>onAdd(sign)}>{sign}</button>
            )
        });
        res.push(
            <button key={"⌫"} className="sign-button" onClick={()=>onRemove()}>⌫</button>
        )
        res.push(
            <button key={"="} className="sign-button" onClick={()=>onEquality()}>=</button>
        )
        res.push(
            <button key={"AC"} className="sign-button" onClick={()=>onClear()}>AC</button>
        )
        return res;
    }
    
    return (

        <div id="button-container">
                {makeNumberButtons()}
                {makeSignButtons()}
        </div>
    )
}

export default ButtonContainer