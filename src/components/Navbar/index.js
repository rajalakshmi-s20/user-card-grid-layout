import React, {useState} from 'react';
import { Nav,NavLink,NavBtn,NavBtnLink } from './NavbarElements';
import {Oval} from 'react-loader-spinner';
import SocialCard from './SocialCard';

const Navbar = () => {
  const [users, setUsers] = useState([]);

  const [loading,setLoading] = useState(false);

  const loadUsers = async()=>{
  setLoading(true);
  const response = await fetch("https://reqres.in/api/users?page=1");
  const jsonresponse = (await response.json()).data;
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
    {loading ? (
    <div className='loader'>
    <Oval
    height="100"
    width="100"
    radius="9"
    color="black"
    secondaryColor="grey"
    ariaLabel="loading"
    />
    </div>
    ) : ( 
    <div className='card_container'>
    {users.map((email,id) => (
      <SocialCard jsonresponse={email} key={id} />
    ))}
    </div>
    )}
    </>       
  )
}

export default Navbar;