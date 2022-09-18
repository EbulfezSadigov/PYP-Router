import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';


function SupplierDetail() {

    const [detail, setdetail] = useState({});

    let { listId } = useParams();
    

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/suppliers/' + listId)
            .then(res => {
                setdetail(res.data);
            })
    }, [])


    return (<>
        <div className='m-2 border border-3 rounded-pill p-5 mydiv'>
            <h4>Id: {detail.id}</h4>
            <h4>Company Name: {detail.companyName}</h4>
            <h4>City: {detail.address?.city}</h4>
            <h4>Country: {detail.address?.country}</h4>
            <h4>Postal Code: {detail.address?.postalCode}</h4>
        </div>
    </>
    )
}

export default SupplierDetail