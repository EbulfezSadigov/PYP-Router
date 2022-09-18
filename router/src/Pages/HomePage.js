import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";
import { Route, Routes } from 'react-router-dom';
import AddSupplier from './AddSupplier';
import SupplierDetail from './SupplierDetail';

import SupplierList from './SupplierList';

function HomePage() {

  const [suppliers, setsuppliers] = useState([]);

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => {
              setsuppliers(res.data);
            })

    }, [])

    const add = (post) => {
      setsuppliers([...suppliers, post]);
  }

  return (
    <>
      <div>
      <div>
        <nav>
          <ul style={{listStyle:"none"}} className="d-flex">
            <li className='pe-5'>
              <Link to="/list" style={{textDecoration:"none",fontSize:30}}>List</Link>
            </li>
            <li className='pe-5'>
              <Link to="/detail" style={{textDecoration:"none",fontSize:30}}>Detail</Link>
            </li>
            <li>
              <Link to="/add" style={{textDecoration:"none",fontSize:30}}>Add Supplier</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/list" element={<SupplierList />} />
          <Route path="/detail/:listId" element={<SupplierDetail/>} />
          <Route path="/add" element={<AddSupplier add={add}/>} />
        </Routes>
      </div>
    </div>
    </>
  )
}

export default HomePage