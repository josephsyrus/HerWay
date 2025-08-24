export const map=async(req,res)=>{
    try{
        res.status(200).json({message:"Map Page"});
    }
    catch(error){
        console.log("Error in map controller", error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}