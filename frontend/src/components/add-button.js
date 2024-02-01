// CircularButton.js

import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const CircularButton = () => {
  const navigate = useNavigate();
  const handleAddClick = () => {
    navigate('/add-assignment')
  }
  return (
    <div className="  relative my-8 ">
        <hr className=' text-[#66FCF1] bg-[#66FCF1] h-1 w-full rounded '/>
        <button onClick={handleAddClick} className='absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] bg-primary w-[50px] h-[50px] rounded-full border-4 border-[#66FCF1]'><FaPlus className="mx-auto "/></button>
    </div>
  );
};

export default CircularButton;
