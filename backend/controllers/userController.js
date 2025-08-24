export const getProfile=async(req,res)=>{
    try{
        const userId=req.params.id;
        res.status(200).json({message:`getProfile page, userId: ${userId}`});
    }
    catch(error){
        console.log("Error in getProfile controller", error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export const updateProfile=async(req,res)=>{
    try{
        const userId=req.params.id;
        res.status(200).json({message:`getProfile page, userId: ${userId}`});
    }
    catch(error){
        console.log("Error in updateProfile controller", error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}

export const deleteProfile=async(req,res)=>{
    try{
        const userId=req.params.id;
        res.status(200).json({message:`deleteProfile page, userId: ${userId}`});
    }
    catch(error){
        console.log("Error in deleteProfile controller", error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
}
