
import './App.css'
import ToDo from './ToDo';
import Actor from './Actor'
import Singer from './Singer';

function App() {
    const actors = ['bapparaj', 'omar sany', 'salman shah'];

   const singers = [
    {id:1, name: 'Dr. Mahfuz', age: 68},
    {id:2, name: 'Tahsan', age: 40},
    {id:3, name: 'Salman Shah', age: 45}
   ]


  // const time = 50; 
  

  return ( 
    <>
     <h1>Vite + React</h1>

     {
      singers.map(singer => <Singer singer={singer}> </Singer> )
     }

     {
      actors.map(actor => <Actor actor={actor}> </Actor>)
     }


     {/* <ToDo task =  "Learn React" isDone ={true} time= {time} > </ToDo>
     <ToDo task =  "Learn Js" isDone ={true} time= {time} > </ToDo>
     <ToDo task =  "Learn Python" isDone ={false} > </ToDo> */}


    <Person> </Person>
    <Nopp> </Nopp>
    </>
  )
}

function Person() {
  const age = 27;
  const name = "Emon";
  return (
    <p>I am a Person : {name} {age}</p>
  )
}

function Nopp() {

  

  return(
    <> 
    <h1>React core concept is revising..</h1>
    <p>opore P tag ta niye astisi.. </p>
    <Person> </Person>

    <ToDo> </ToDo>
     </>
  )
}


export default App


