import React from 'react';
import { Link } from 'react-router-dom';
import "../../node_modules/@flaticon/flaticon-uicons/css/all/all.css";

function Navbar() {
  return (
    <div className='fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 max-w-xl w-full'>
      <nav>
        <ul className="flex flex-row gap-4 items-center justify-center">
          <li className="flex flex-row gap-4 flex-auto">
            <Link to="/" className="text-orange-950 p-4 rounded-lg inline-flex items-center gap-2 mx-auto font-medium">
              <i className="fi fi-rr-user relative -bottom-1 text-3xl"></i>
              <span className="text-xl inline-block">Profile</span>
            </Link>
          </li>
          <li className="flex flex-row gap-4 flex-auto">
            <Link to="/tasks" className="text-orange-950 p-4 rounded-lg inline-flex items-center gap-3 mx-auto font-medium">
              <i className="fi fi-rr-note relative -bottom-1 text-3xl"></i>
              <span className="text-xl inline-block">Tasks</span>
            </Link>
          </li>
          <li className="flex flex-row gap-4 flex-auto">
            <Link to="/notes" className="text-orange-950 p-4 rounded-lg inline-flex items-center gap-3 mx-auto font-medium">
              <i className="fi fi-rr-edit relative -bottom-1 text-3xl"></i>
              <span className="text-xl inline-block">Notes</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
