import {useEffect, useState} from 'react'
import './App.css'
import CustomObjHooks from './common/Hooks/CustomObjHooks'

function App() {
  const username=CustomObjHooks('')
  const email=CustomObjHooks('')
  const password=CustomObjHooks('')

  useEffect(()=>{
    console.log('component did mount')
  }, [])

 function handleOnSubmit(e){
  e.preventDefault()
  username.showValue()
  email.showValue()
  password.showValue()
  console.log(username.value)
  username.clearInput()
  email.clearInput()
  password.clearInput()
  username.greetUser()
 } 



  return (
    <div>
        <form onSubmit={handleOnSubmit}> 
        <label htmlFor='username'>First Name</label>
        <input type='text' id='username' value={username.value} onChange={username.onChange}/>
        <label htmlFor='email'>Email</label>
        <input type='text' id='email' value={email.value} onChange={email.onChange} />
        <label htmlFor='password'>Last Name</label>
        <input type='password' id='password' value={password.value} onChange={password.onChange} />
        <button type="submit" id='submit'>Submit</button>
      </form>
   


    </div>
  )
}

export default App