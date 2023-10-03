import mongoose from "mongoose";

const dbConnect =  () => {
    try {
     mongoose.connect(process.env.MONGOS_URL);
    console.log('Database connection SucessFull');
    
}catch (err){
    console.log('Database connection Failed');

   }

};

export default  dbConnect;