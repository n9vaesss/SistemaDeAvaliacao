import React from "react";


const Result = (props) =>{


    let result = ""

    if(props.value == 0){
        result = "NÃO ATINGIU O ESPERADO"
    }else if(props.value == 1){
        result = "ATINGIU O ESPERADO PARCIALMENTE"
    }else if(props.value == 2){
        result = "ATINGIU O ESPERADO"
    }else if(props.value == 3){
        result = "SUPEROU O ESPERADO"
    }


    return(
        <div>
            <p className= {props.class}>{result}</p>
        </div>
    )
}
export default Result