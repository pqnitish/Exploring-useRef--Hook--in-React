import { useEffect, useRef } from "react";

function FocusableInputFeild(){
    const inputRef = useRef(null);
    useEffect(()=>{
        inputRef.current.focus();
    },[]);

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="focus me on mount"/>

        </div>
    )
}
export default FocusableInputFeild;