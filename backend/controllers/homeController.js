export const home=async(req,res)=>{
    try{
        res.status(200).json({message:"Home page"});
    }
    catch(error){
        console.log("Error in home controller", error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}