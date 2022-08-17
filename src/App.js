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

// import "./App.css";
// import React from "react";
// import Increamenter from "./components/Increamenter/Increamenter";

// export default function App() {
//   const[count, setCount] = React.useState(0);
//   const handleClick = () => {
//     setCount((prev) => prev + 1)
//   }


//   const sayHello = (name) => {
//     alert(`Hello ${name}`)
//   };
 
//   //  let count = 0;


//   return (
//     <div className="card-container">
//       {count}


//       <button 
//       onClick = {handleClick}
//       // onClick={() => {
//       //   count++
//       //   console.log(count);
//       // }}
//       >Increase
//       </button> 

      
//       {/* <button onClick={() => sayHello('Edin')}>Click me</button>
//       <button 
//        onClick={() => {
//          sayHello("Rick");
//          console.log("Neka nova funkcija nije definisana");
//        }}
//        >
//          In line anonimna funkcija
//        </button> */}
//        <Increamenter />
//     </div>
//   )
// }


import "./App.css";
import React, { useEffect, useState } from "react";

 export default function App() {

  // const [name , setName] = React.useState("")
  // const [email , setEmail] = React.useState("")
  // const [hobi , setHobi] = React.useState("")
  // const [password, setPassword] = React.useState("")

  const [formValues , setFormValues] = useState({
    name: "" ,
    email: "",
    hobi: "",
    password: "",
    
  })



    return(
      <div className="card-container">
      <form onSubmit={(e) => { 
      e.preventDefault();
      console.log(formValues)
      console.log(`NAME: ${formValues.name} EMAIL: ${formValues.email} HOBI: ${formValues.hobi} PASSWORD: ${formValues.password}`)
      }}>
        <label htmlFor="html">Name</label>
        <input 
        type="text" 
        id="html"
        name="fav_language"
        value={formValues.name}
        onChange={(event) => setFormValues(prev => ({
           
          ...prev,
          name: event.target.value,
        }))
      }
        />
        <br />
        <label htmlFor="css">email</label>
        <input 
        type="text"
        id="css"
        name="fav_language"
         value={formValues.email}
         onChange={(event) => setFormValues(prev => ({
           
          ...prev,
          name: event.target.value,
        }))
      }
         />
        <br />
        <label htmlFor="javascript">Hobi</label>
        <input 
        type="text"
        id="javascript"
        name="fav_language" 
        value={formValues.hobi}    
        onChange={(event) => setFormValues(prev =>({
          ...prev,
          hobi: event.target.value,
          

          }
        ))}   
         />
        <br />
        <label htmlFor="password">sifra</label>
        <input 
        type="text"
        id="password"
        name="fav_language" 
        // value={password}
        // onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <input type="submit" defaultValue="Submit" />
      </form>
    </div>
    );
}