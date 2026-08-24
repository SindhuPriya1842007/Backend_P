const asyncHandler = () =>{
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error));
    }
}

export {asyncHandler}




// const asyncHandler=()=>{}
// const asyncHandler = (func) => {}
// const asyncHandler = (func) => async ()=> {} 


//Using try-catch block to handle errors in async functions

// const asyncHandler=(fn)=>async (req,res,next)=>{
//     try{
//             await fn(req,res,next)
//     }catch(error){
//         res.status(error.code || 500).json({
//             success:false,
//             message:error.message || "Internal Server Error"
//         })
//     }
// }