import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose);

const TransationsSchema = new Schema(
    {
        buyer:{
            type:String,
            default:""
        },
        amount:{
            type:mongoose.Types.Currency,
            Currency:"USD",
            get:(v)=> v/100
        },
        productIds:[
            {

               type:mongoose.Schema.Types.ObjectId,
               ref: "Product",
            },
        
        ],
        
    },
    { timestamps:true ,toJSON:{getters:true}}
);

const Transactions = mongoose.model("Transactions", TransationsSchema)

export default Transactions ;