import React from "react";
import "./register.css";
import { useState } from "react";

function Create() {

    const [offer_id,setoffer_id] = useState("");
    const [offer_title,setoffer_title] = useState("");
    const [offer_description,setoffer_description] = useState("");
    const [offer_image,setoffer_image] = useState("");
    const [offer_sort_order,setoffer_sort_order] = useState("");
    const [item_id,setitem_id] = useState([]);
    const [quatity,setquatity] = useState([]);
    const [days_of_week,setdays_of_week] = useState([]);
    const [dates_of_month,setdates_of_month] = useState([]);
    const [months_of_year,setmonths_of_year] = useState([]);

    const handleClick = () =>{
        fetch("http://localhost:8080/offers/create" , {
            method : 'POST',
            body : {
                "offer_id": offer_id,
                "offer_title": offer_title,
                "offer_description":offer_description ,
                "offer_image": offer_image,
                "offer_sort_order": offer_sort_order,
                "item_id": item_id,
                "quatity": quatity, 
                "days_of_week": days_of_week,
                "dates_of_month": dates_of_month,
                "months_of_year": months_of_year
            }
        })
    }

    return(
        <div id="create">
            <input placeholder=' Username ' value={offer_id} onChange={(e)=> {setoffer_id(e.target.value)}}/>
            <br/>
            <input placeholder='Password' value={offer_title} onChange={(e)=> {setoffer_title(e.target.value)}}/>
            <br/>
            <input placeholder='Offer Description' value={offer_description} onChange={(e)=> {setoffer_description(e.target.value)}}/>
            <br/>
            <input placeholder='offer image url' value={offer_image} onChange={(e)=> {setoffer_image(e.target.value)}}/>
            <br/>
            <input placeholder='offer sort order' value={offer_sort_order} onChange={(e)=> {setoffer_sort_order(e.target.value)}}/>
            <br/>
            <input placeholder='item id' value={item_id} onChange={(e)=> {setitem_id(e.target.value)}}/>
            <br/>
            <input placeholder='quatity' value={quatity} onChange={(e)=> {setquatity(e.target.value)}}/>
            <br/>
            <input placeholder='days_of_week' value={days_of_week} onChange={(e)=> {setdays_of_week(e.target.value)}}/>
            <br/>
            <input placeholder='dates_of_month' value={dates_of_month} onChange={(e)=> {setdates_of_month(e.target.value)}}/>
            <br/>
            <input placeholder='months_of_year' value={months_of_year} onChange={(e)=> {setmonths_of_year(e.target.value)}}/>
            <br/>
            <p onClick={handleClick}>Create Offer</p>
        </div>
    )

}

export default Create;


// "offer_id":"OFF-100","offer_title":"Diwali Offer",
// "offer_description":"Only for next 10 days!",
// "offer_image":"http:///offers/diwali_celerbration.png",
// "offer_sort_order":"100","item_id":["ITEM-1","ITEM-2"],
// "quatity":[],"days_of_week":[1,2,3],
// "dates_of_month":[5,6,7,8,9,10,11,12,13,14],
// "months_of_year":[11]