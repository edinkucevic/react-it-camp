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
// import React, { useState } from "react";
// import TeamCard from "./components/TeamCard/TeamCard";

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


// 

// const DATA = [
//   "Prva recenica",
//   "Druga recenica",
//   "Treca Recenica",
//   "Cetvrta recenica",
//   "....",
//   "Stota recenica",
// ];


// export default function App()  {
  
//   const [array , setArray] = useState (DATA);

//   const generateNewWord = () => Math.random().toString(36).slice(2, 7);

//   const reverseArray = () => {
//       const _array = [...array]
//       const reversed = _array.reverse(); // OVAKO SE PRAVI KOPIJA NIZA
//       setArray(reversed);

//   }


//   return (
//     <div className="card-container">
//       <button onClick={() => setArray(prev => [generateNewWord(), ...prev])}>
//         Dodaj random recenicu
//       </button>
//       <button onClick = {reverseArray}>REVERSE recenice</button>
//       <h4>Recenice iz niza</h4>
//       <ul>
//         {array.map((el) => (
//           <li key = {el} > {el}</li>
//         ))}
//       </ul>
      
//       <div>radi l' ovo</div>
//     </div>
//   )

// }
// const favoriteTeams = [
//   { id: 0, name: "Arsenal", points: 6 },
//   { id: 1, name: "Man. City", points: 6 },
//   { id: 2, name: "Man. United", points: 0 },
//   { id: 3, name: "Liverpool", points: 2 },
//   { id: 4, name: "Novi Pazar", points: 9 },
//   { id: 5, name: "Partizan", points: 5 },

// ]

// export default function App()  {

//   // const [teams , setTeams] = useState(favoriteTeams);

//   // const deleteTeam = (id) => {
//   // const newTeams = teams.filter((team) => team.id !== id);
//   // setTeams(newTeams)
//   }

//   return <div className="card-container">
//     <button
//     onClick={() => 
//     setTeams((prev) => [
//       ...prev,
//       {
//         id: Math.random(),
//         name: "Novi Tim",
//         points: 4,
//       },
//     ])
//     }
//     ></button>

//     {teams.map((team) => (
//       <TeamCard
//       key={team.id}
//       name={team.name}
//       points={team.points}
//       onDeleteTeam ={() => deleteTeam(team.id)}
//       />
      
//     ))}
//   </div>


// };



// import React from "react"
// import PostList from "./components/PostsList/PostsList"
// import "./App.css"

// const App = () => {
//     return (
//         <div className = "card-container">
//             <PostList />
//         </div>
//     )
// }

// export default App;


import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
 
const BASE_URL = "https://api.quotable.io";
 
export default function App() {
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({});
  const [page, setPage] = useState(1);
 
  function getAuthors(page) {
    setLoading(true);
    try {
      axios
        .get(`${BASE_URL}/authors?sortBy=quoteCount&page=${page}&limit=15`)
        .then((res) => {
          console.log(res.data);
          setPagination({
            page: res.data.page,
            lastPage: res.data.totalPages,
          });
          setAuthors(res.data.results);
        });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
 
  useEffect(() => {
    getAuthors(page);
  }, [page]);
 
  return (
    <div className="card-container">
      Page {pagination.page} / {pagination.lastPage}
      <button onClick={() => setPage((prev) => prev + 1)}>Next page </button>
      {!loading ? (
        <div>
          {authors.map((author) => (
            <div key={author._id}>
              <h4>{author.name}</h4>
              <h5>{author.description}</h5>
              <p>{author.bio}</p>
              <p>Quoute count: {author.quoteCount}</p>
              <hr />
            </div>
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
 