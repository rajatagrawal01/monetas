const mtgnHelperWoGas=require('../helper/monetas_without_gas_helper');


exports.sendMonetas=async function(req,res){
    console.log("transaction initiated");
    let sender_address=req.body.sender_address;
    let rec_address=req.body.rec_address;
    let amount=req.body.amount;
    let sender_pvt_key=req.body.sender_pvt_key;
    try{
       let isSentData=await mtgnHelperWoGas.sendMonetasWithoutGas(sender_address,rec_address,amount,sender_pvt_key);
     
       if(isSentData.isSuccess){
             res.json(isSentData);
       }else{   
           res.json(isSentData);
       }
    }catch(err){
        console.log(err);
        res.json(isSentData)
    }
}
