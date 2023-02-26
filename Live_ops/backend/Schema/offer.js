const mongoose = require('mongoose');

const offerSchema = mongoose.Schema({
    offer_id : {type : String , unique : true},
    offer_title : {type : String , required : true},
    offer_description : {type : String , required: true},
    offer_image : {type : String , required : true},
    offer_sort_order : {type : String , required : true},
    item_id : {type : Array} , quatity : {type : Array},
    days_of_week : {type:Array} , dates_of_month : {type:Array} , months_of_year : {type:Array}
})

const offerModel = mongoose.model('Offer' , offerSchema);

module.exports = offerModel ;