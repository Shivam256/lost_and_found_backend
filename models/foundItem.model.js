import mongoose from "mongoose";

const Schema = mongoose.Schema;

const FoundItemSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    location:{
        type:{
            type:String,
        },
        coordinates:[Number]
    },
    date:{
        type:Date,
        default:Date.now()
    },
    description:{
        type:String,
    },
    images:[{
        type:String
    }],
    founder:{
        type:Schema.Types.ObjectId,
        ref:'USER',
    },
    tags:[{
        type:String
    }],
    claims:[{
        type:Schema.Types.ObjectId,
        ref:'CLAIM'
    }]
});


const FoundItem = mongoose.model('ITEM',FoundItemSchema);

export default FoundItem;