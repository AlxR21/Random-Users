import { useState, useEffect } from "react";
import "./App.css";

function App() {
  

  const [user, setUser] = useState([]);
  useEffect(() => {
      async function getJoke() {
const url = 'https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10';
const options = {method: 'GET', headers: {accept: 'application/json'}};

try {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data.data.data);
  const dataObjects = data.data.data;
  setUser(dataObjects);
} catch (error) {
  console.error(error);
}
        
      }

      getJoke();
  }, []);
  return (
    <>
      {
        user.map((person) => (
           
            <div className="user-card" key={person.id}>
              {/* <p className="user-name">{person.name}</p> */}
              <img src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} className="user-image" />
              <p className="user-name">{person.name.title} {person.name.first} {person.name.last}</p>
              <p className="user-email">{person.email}</p>
            </div>
          
        ))
      }
    </>
  )
}

export default App;
