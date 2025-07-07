import { useRef,useState } from "react";

export function CustomTextInput2()
 {
    // textInput должна быть объявлена здесь, чтобы реф мог иметь к ней доступ
    const textInput = useRef(null);
    const [value, setValue] = useState("");
  
    function handleClick()
     { 
      textInput.current.className="valid"; 
      textInput.current.focus();
          
      //alert(textInput.current.value);
      alert(value);
    }
    function handleChange(e)
    {
      setValue(e.target.value);
    }  
    return (
      <div>
        <input type="text" ref = {textInput} onChange={handleChange}/>

        <input type="button" value="Фокус на поле для ввода текста"    onClick={handleClick}   />
      </div>
    );
  }
  