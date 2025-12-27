import  { useState } from 'react';

export default function ControlledInput(){
    const[text,setText]=useState('');
    const[error,setError]=useState("");
    const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
        const valus=e.target.value;
        setText(valus);
        if(valus.length>10){
            setError("Input exceeds maximum length of 10 characters.");
        }else{
            setError("");
        }
    }
    return(
        <>
        <div>ControlledInput</div>
        <input type="text"
        value={text}
        onChange={handleChange}/>
           <p>Typed Text: {text}</p>
       {error && <p style={{color:'red'}}>{error}</p>}
        </>
    )
}