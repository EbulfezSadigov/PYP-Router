import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

function SupplierList({}) {
    const [posts, setposts] = useState([]);

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/suppliers')
            .then(res => {
                setposts(res.data);
            })

    }, [])

    return (
        <ul className='row' style={{listStyle:"none"}}>
            <div className='col-2'>
            <span><b>Id</b></span>

                {
                    posts && posts.map((item) => {
                        return <li key={item.id}><Link to={'/detail/' + item.id} style={{textDecoration:"none",color:"black"}}>{item.id}</Link></li>
                    })
                }
            </div>
            <div className='col-2'>
            <span><b>Company Name</b></span>

                {
                    posts && posts.map((item, key) => {
                        return <li key={item.id}>{item.companyName}</li>
                    })
                }
            </div>
            <div className='col-2'>
            <span><b>City</b></span>

                {
                    posts && posts.map((item, key) => {
                        return <li key={item.id}>{item.address?.city}</li>
                    })
                }
            </div>
            <div className='col-2'>
            <span><b>Country</b></span>
                {
                    posts && posts.map((item, key) => {
                        return <li key={item.id}>{item.address?.country}</li>
                    })
                }
            </div>
            <div className='col-2'>
            <span><b>Postal Code</b></span>
                {
                    posts && posts.map((item, key) => {
                        return <li key={item.id}>{item.address?.postalCode}</li>
                    })
                }
            </div>
        </ul>

    )
}

export default SupplierList