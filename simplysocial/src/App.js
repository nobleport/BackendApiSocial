import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Users from './cumponents/users';
import { useEffect, useState } from 'react';

const API_URL = "http://localhost:3000/api/v1/users";

function getAPIData() {
  return axios.get(API_URL)
    .then(res=>res.data)
}

function App() {
  const [users, setUsers] = useState([])

  useEffect(()=>{
    let mounted = true;
    getAPIData().then(items=> {
      if(mounted) {
        setUsers(items);
      }
    });
    return() => (mounted = false);
  }, []);
  return (
    <div className="App">
      <div>Hello there</div>
      <Users users={users}/>
    </div>
  );
}

export default App;
