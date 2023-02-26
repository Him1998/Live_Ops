import React from "react";
import { Link } from "react-router-dom";

function Offers() {
    return(
        <div>
            <Link to='/offers/create'><h2>Create Offers</h2></Link>
            <Link to='/offers/show'><h2>Show Offers</h2></Link>
        </div>
    )
}

export default Offers;