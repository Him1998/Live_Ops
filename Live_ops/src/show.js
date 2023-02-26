import React, { useEffect, useState } from "react";


function Show() {

    const [data,setdata] = useState(null);

    const fetchAllPosts = async () => {
        const resp = await fetch('http://localhost:8080/offers/show')
        setdata(await resp.json())
    }

    useEffect(() => {
        fetchAllPosts()
    }, [])

    return (
        <div>
            {
                data?.result?.map?.((offer, index) => {
                    return (
                        <div>
                            <li key={index}>{offer.offer_id}</li>
                            <li key={index}>{offer.offer_title}</li>
                            <li key={index}>{offer.offer_description}</li>
                            <img src={offer.offer_image} />
                            <li key={index}>{offer.offer_sort_order}</li>
                            <li key={index}>{offer.item_id}</li>
                            <li key={index}>{offer.quantity}</li>
                            <li key={index}>{offer.days_of_week}</li>
                            <li key={index}>{offer.dates_of_month}</li>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Show;