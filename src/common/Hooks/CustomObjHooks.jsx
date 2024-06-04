import React from 'react'

function CustomObjHooks(initialState) {
    const [value, setValue] = useState(initialState)
  
    function onChange(e){
      setValue(e.target.value)
    }
  
    function clearInput(){
      setValue('')
    }
    function greetUser(){
      alert(`Hi, `+ value)
    }
    function showValue(){
      console.log(value)
    }
    return {value, onChange, clearInput, greetUser, showValue}

}

export default CustomObjHooks