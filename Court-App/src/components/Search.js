import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import axios from "axios";
import "./navbar.css";
function Search() {
    const [cnr, setCnr] = useState({});

    const [_id,setId] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("llllll")
    
        var config = {
            method: 'get',
            url: `http://localhost:4000/searchbaar/${_id}`,
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
            <h4> Name : {cnr && cnr.Name}</h4>
            <h4> Court name : {cnr && cnr.Nameofcourt}</h4>
            <h4> Police Station : {cnr && cnr.Nameofpolicestation}</h4>
            <h4> Next date : {cnr && cnr.Nextdateofhearing}</h4>
            <h4> Last date : {cnr && cnr.Lastdateofhearing}</h4>
        </div>
    );
}

export default Search;

