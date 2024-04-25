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
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(false);
  
  const url = 'https://jsonplaceholder.typicode.com/users';
  async function getUsers() {
    setIsLoading(true);
    const response = await fetch(url);
    const users = await response.json();
    if (response.status > 300) {
      setIsLoading(false);
      setStatus(true);
    }
    console.log(users); 
    
    setUser(users);
    setIsLoading(false);
  };

  useEffect(() => {
    getUsers();
  }, []);

  if (isLoading) return <h1>Loading......</h1>
  if (status) return <h1>server error 404 </h1>

  return (
    <>
      <h1>Github User</h1>
      <div className='container'>
        {user.map(item => {
          return (
            <ul key={item.id} style={{ listStyle: "none", background: "#ffff",margin:"1rem",padding:"10px" }}>
              <li><img src='https://rb.gy/88nfvv' /></li>
              <li>{item.name}</li>
              <li><a href={`https://www.${item.website}`}>Profile</a></li>
            </ul>
          )
        })}
      </div>
    </>
  )
}

export default App
