
import './App.css'
import Player from './Player'

function App() {
    
 function handleClick () {
  alert('I am clicked')
 }

 const handleClick3 = () => {
  alert('clicked 3')
 }

 const handleAdd5 = (num) => {
  const newNum = num+5;
  alert(newNum);
 }
   
  return ( 
    <>
     <h1>Vite + React</h1>

     <button onClick={handleClick} >Click Me</button>
     <button onClick={handleClick3} >Click Me 3</button>
     <button onClick={() => alert ('click 4')} >Click Me 4</button>
     <button onClick={() => handleAdd5(10)} >Click Me 5</button>


     <Player> </Player>
     </>
  )
}


export default App


