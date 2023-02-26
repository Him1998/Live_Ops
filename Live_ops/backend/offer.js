const express = require('express');
const bodyParser = require("body-parser");
const Offer = require('./Schema/offer');

const router = express.Router();

router.get("/",(req,res) =>{
    res.send("<h1>welcome to offers page</h1>");
})

router.post("/create", async (req,res) => {
    try {
        const {offer_id , offer_title , offer_description , offer_image ,
            offer_sort_order ,item_id , quatity , days_of_week , dates_of_month , months_of_year} = req.body;
   
            const offer = await Offer.findOne({offer_id});
   
            if(offer){
               return res.status(409).json({
                status : "failed",
                message : "offer id already exists"
               })
            }

            const data = Offer.create({offer_id ,
                offer_title ,
                offer_description ,
                offer_image ,
                offer_sort_order ,
                item_id ,
                quatity ,
                days_of_week ,
                dates_of_month ,
                months_of_year
            });

            return res.status(200).json({
                status : "Success",
                message : "offer successfully created"
            })

    }catch(e){
        return res.status(500).json({
            status : "Failed",
            message : e.message
        })
    }
});

router.get("/show", async (req,res) => {
    try{
        res.json({result : await Offer.find()});
    }catch(e){
        return res.status(500).json({
            status : "failed",
            message : e.message
        })
    }
});

module.exports = router;
