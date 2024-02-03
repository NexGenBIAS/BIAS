import React, { useState } from 'react';
import { HiOutlineDotsVertical } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { MdOutlineModeEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";

const AssignmentCard = ({ assignments }) => {
  const [hidden, setHidden] = useState(true);
  

  const handleEditClick = () => {
    setHidden(!hidden);
  }
  return (
    <div className="flex flex-wrap ">
      {Object.values(assignments).map((assignment) => (
        <div key={assignment.number} className="mb-4  p-8 rounded-md bg-secondary text-secondary w-full md:w-1/2 lg:w-1/2 xl:w-1/3 gap-2 flex flex-col transition ">
          <div className='justify-between flex border-b-2 border-gray-550 items-center pb-2 relative' >

            <h3 className="text-xl font-bold text-primary ">{`Assignment ${assignment.number}`}</h3>
            <HiOutlineDotsVertical className='text-xl hover:cursor-pointer text-primary' onClick={handleEditClick} />
            {!hidden && (
              <div className='absolute top-[45px] right-0 bg-primary border-dark border-2 p-2 rounded-md text-xs'>
                <div className='flex flex-col gap-2'>
                  <Link to={`/edit-assignment/${assignment.subjectPrefix}/${assignment.number}`} className='hover:bg-secondary px-1 py-0.5 rounded flex items-center gap-2'>Edit File<MdOutlineModeEdit/></Link>
                  <hr className='text-secondary' />
                  <Link to={`/edit-assignment/${assignment.subjectPrefix}/${assignment.number}`} className='hover:bg-secondary px-1 py-0.5 rounded flex items-center gap-2'>Edit Details<MdModeEdit/></Link>
                  <hr className='text-secondary' />
                  <Link to={`/edit-assignment/${assignment.subjectPrefix}/${assignment.number}`} className='hover:bg-secondary px-1 py-0.5 rounded flex items-center gap-2'>Delete <MdOutlineDeleteOutline/></Link>
                </div>

              </div>
            )}
          </div>

          <p className="text-secondary">{`Unit: ${assignment.number}`}</p>
          <p className="text-secondary">{`Given on: ${assignment.givenOn}`}</p>
          <p className="text-secondary">{`Submission date: ${assignment.submission}`}</p>
          <div className='flex md:flex-col flex-row  gap-2 justify-between'>

            <button className=" text-secondary md:px-4 py-2 px-10 rounded w-full bg-secondary border-2 border-dark  mt-2 text-secondary hover:text-primary transition hover:shadow-[5px_5px_0px_0px_rgba(102,252,241)]">
              <a href={`http://65.0.14.141:4000/api/view/${assignment.subjectPrefix}/${assignment.number}`} target="_blank" rel="noopener noreferrer">
                View
              </a>
            </button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default AssignmentCard;
