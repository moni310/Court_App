import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import "./navbar.css";
function Search() {
    const [cnr, setCnr] = useState({});

    const [id,setId] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("llllll")
    
        var config = {
            method: 'get',
            url: `http://localhost:4000/searchbaar/${id}`,
        };
        axios(config)
            .then(function (response) {
                //  console.log(JSON.stringify(response.data));
                console.log(response)
                setCnr(response.data)

            })
            .catch(function (error) {
                console.log(error);
            });
        // setSubmitted(true);
        // setError(false);
    };

    return (

        <div className="main">
            <h1>CNR No. Search</h1>
            <form onSubmit={handleSubmit}>
                <div className="search">
                    <TextField
                        id="outlined-basic"
                        variant="outlined"
                        onChange= {(e)=>{setId(e.target.value)}}
                        fullWidth
                        label="Search"
                    />
                </div>
                <button  className="btn" type="submit">
                    <h3>Submit</h3>
                </button>
            </form>
            <h4> {cnr && cnr.Name}</h4>
            <h4> {cnr && cnr.Nameofcourt}</h4>
            <h4> {cnr && cnr.Nameofpolicestation}</h4>
            <h4> {cnr && cnr.Nextdateofhearing}</h4>
        </div>
    );
}

export default Search;

