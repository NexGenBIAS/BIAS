// AddUser.jsx
import React, { useState, useContext, useEffect} from 'react';
import { UserContext } from '../context/userContextProvider';

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContextProvider';


const AddUser = () => {
  const { userName, setUserName } = useContext(UserContext);
  const { authKey, setAuthKey} = useContext(AuthContext);
  const [name, setName] = useState('');
  const [key, setKey] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if(userName !== ""){
      navigate('/home')
    }
  }, [userName, navigate])
  const handleAddUser = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      setUserName(name);
      setAuthKey(key.trim());
      setName('');
      setKey('');
      navigate('/home')
    }
  };
  console.log(userName)
  console.log(authKey)

  return (
    <div className='flex flex-col min-h-[80vh] justify-center align-middle'>
      
      <form className='flex-col flex md:w-[40%] sm:w-[80%] self-center gap-4'>
      {/* <label className='text-left'>Name:</label> */}
      <input
        type="text"
        id="name"
        value={name}
        className='bg-secondary px-8 py-4 rounded-xl'
        onChange={(e) => setName(e.target.value)}
        placeholder='Username'
        required
      />
      <input
        type="text"
        id="name"
        value={key}
        className='bg-secondary px-8 py-4 rounded-xl'
        onChange={(e) => setKey(e.target.value)}
        placeholder='Key (not required)'
      />
      <button onClick={handleAddUser} className='bg-secondary border-2 border-gray-950 p-2 rounded-md'>Enter</button>
      </form>
      
    </div>
  );
};

export default AddUser;