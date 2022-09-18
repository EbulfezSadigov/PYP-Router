import React, { useState } from 'react'

function AddSupplier(props) {

    const { add } = props;

    const [id, setid] = useState(0);
    const [Cname, setCname] = useState("");
    const [city, setcity] = useState("");
    const [country, setcountry] = useState("")
    const [code, setcode] = useState("")

    const addSupplier = () => {

        let randomId = Math.floor(Math.random() * 100)

        let newSupplier = {
            id: randomId,
            companyName: Cname,
            City: city,
            Country: country,
            postalCode: code
        };
        add(newSupplier);
    }


    return (
        <div>
            <div>
                <label>Country Name:</label>
                <input type='text' value={Cname} onChange={(e) => setCname(e.target.value)} />
            </div>
            <div>
                <label>City:</label>
                <input type='text' value={city} onChange={(e) => setcity(e.target.value)} />
            </div>
            <div>
                <label>Country:</label>
                <input type='text' value={country} onChange={(e) => setcountry(e.target.value)} />
            </div>
            <div>
                <label>Postal Code:</label>
                <input type='text' value={code} onChange={(e) => setcode(e.target.value)} />
            </div>
            <div>
                <button className='mybtn' onClick={() => addSupplier()}>Add</button>
            </div>
        </div>
    )
}

export default AddSupplier