// export default function ToDo(props) {
//     return (
//         <li>Task: {props.task} </li>
//     ) 
// }

// export default function ToDo({task, isDone} ) {
//    if(isDone === true) {
//     return <li>Done: {task} </li>
//    }

//    else{
//     return <li> Do now: {task} </li>
//    }
// }

// conditional rendering with ternery operator

export default function ToDo({task, isDone, time = 0}) {
return isDone ? <li>Done:{task} Duration: {time} </li> : <li>Not Done Yet: {task}</li>
}
