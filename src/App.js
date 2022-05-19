// import logo from './logo.svg';
import React from 'react';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <table border="1px solid black" className="tanvik">
        
//           <tr>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Branch</th>

//           </tr>
        
//         <TableBody/>
//       </table>
//     </div>
//   );
// }
// function TableBody(){
//   let persons=[
//     {
//       name:"tanvik",
//       age:19,
//       branch:"CSE"
//     },
//     {
//       name:"vineeth",
//       age:20,
//       branch:"CSE"
//     },
//     {
//       name:"kalyan",
//       age:20,
//       branch:"CSE"
//     }
//   ]
//   return(
//     persons.map(student =>{
//       return(<tr>
//         <td>
//           {student.name}
//         </td>
//         <td>
//           {student.age}
//         </td>
//         <td>
//           {student.branch}
//         </td>

//       </tr>

//       )
//     })
    
//   )
// }
  
class App extends React.Component{

constructor(props)
{
  super(props)
  this.state={
    isLoggedIn:false
  }
}
login=()=>{
  this.setState({
    isLoggedIn:!this.state.isLoggedIn
  })
}
render()
{
  return(
    <div>
    <h3>User Logged{this.state.isLoggedIn?"in":"out"}</h3>
     <button onClick={this.login}>Log{this.state.isLoggedIn?"in":"out"}</button>
    </div>
  )
  }
}



export default App;
