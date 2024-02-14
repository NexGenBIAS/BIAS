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
        <hr className=' text-[#66FCF1] bg-secondary border-2 border-dark h-1 w-full rounded '/>
        <button onClick={handleAddClick} className='absolute left-1/2 translate-x-[-50%] top-1/2 translate-y-[-50%] bg-secondary w-[45px] h-[45px] rounded-full border-2 border-[#66FCF1]shadow-[-10px_-10px_30px_4px_rgba(02, 252, 241,0.1),_10px_10px_30px_4px_rgba(102, 252, 241,0.15)]'><FaPlus className="mx-auto "/></button>
    </div>
  );
};

export default CircularButton;
