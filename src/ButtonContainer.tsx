function ButtonContainer({onAdd,onRemove,onEquality}:{onAdd:(a:string)=>void,onRemove:()=>void, onEquality:()=>void}){
    
    function makeNumberButtons(){
        let res = [];
        for (let i =0; i<10;++i){
            res.push(
                <button key={i.toString()} onClick={()=>onAdd(i.toString())}>{i}</button>
            );
        }     
        return res  
    }

    function makeSignButtons(){
        let signs = ['+','-','*','/','(',')'];
        let res = [];
        signs.forEach(sign => {
            res.push(
                <button key={sign} onClick={()=>onAdd(sign)}>{sign}</button>
            )
        });
        res.push(
            <button key={"⌫"} onClick={()=>onRemove()}>{"⌫"}</button>
        )
        res.push(
            <button key={"="} onClick={()=>onEquality()}>{"="}</button>
        )
        return res;
    }
    
    return (

        <div>
            {makeNumberButtons()}
            {makeSignButtons()}
        </div>
    )
}

export default ButtonContainer