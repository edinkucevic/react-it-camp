// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import "./App.css";
import React from "react";
import Increamenter from "./components/Increamenter/Increamenter";

export default function App() {
  const[count, setCount] = React.useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1)
  }


  const sayHello = (name) => {
    alert(`Hello ${name}`)
  };
 
  //  let count = 0;


  return (
    <div className="card-container">
      {count}


      <button 
      onClick = {handleClick}
      // onClick={() => {
      //   count++
      //   console.log(count);
      // }}
      >Increase
      </button> 

      
      {/* <button onClick={() => sayHello('Edin')}>Click me</button>
      <button 
       onClick={() => {
         sayHello("Rick");
         console.log("Neka nova funkcija nije definisana");
       }}
       >
         In line anonimna funkcija
       </button> */}
       <Increamenter />
    </div>
  )
}




