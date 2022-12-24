import React, {useState} from 'react';
import { Nav,NavLink,NavBtn,NavBtnLink } from './NavbarElements';
import {Oval} from 'react-loader-spinner';

const Navbar = () => {
  const [users, setUsers] = useState([]);

  const [loading,setLoading] = useState(false);

  const loadUsers = async()=>{
  setLoading(true);
  const response = await fetch("https://api.github.com/users");
  const jsonresponse = await response.json();
  setLoading(false);
  setUsers(jsonresponse);
  }

  return (
    <>
    <Nav>
        <NavLink to="/">
        <img src={require('../../images/image.png')} alt='logo' />
        </NavLink>
        <NavBtn>
            <NavBtnLink to="/GetUsers" onClick={loadUsers}>Get Users</NavBtnLink>
        </NavBtn>
    </Nav>
    <br/>
    <h1>User Data:</h1>
    {loading ? (
    <Oval
    height="100"
    width="100"
    radius="9"
    color="green"
    secondaryColor="blue"
    ariaLabel="loading"
    />
    ) : ( ""
    )}
    <ul>
      {users.map(({id,login}) => (<li key={id}>login: {login}</li>))}
    </ul>
    </>       
  )
}

export default Navbar;