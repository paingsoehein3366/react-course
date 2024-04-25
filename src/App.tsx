import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState([{
    id:0,
    name: "",
    website:""
  }]);
  const url = 'https://jsonplaceholder.typicode.com/users';
  async function getUsers() {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    setUser(users);
  };

  useEffect(() => {
    getUsers();
  },[])

  return (
    <>
      <h1>Github User</h1>
      <div>
        {user.map(item => {
          return (
            <ul key={item.id}>
              <li><img src='https://rb.gy/88nfvv' /></li>
              <li>{item.name}</li>
              <li><a href={item.website}>Profile</a></li>
            </ul>
          )
        })}
      </div>
    </>
  )
}

export default App
