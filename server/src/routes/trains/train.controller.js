const trains=require('../../models/train.model')
function getalltrains(req,res){
     return res.status(200).json(trains)
}

module.exports={
    getalltrains
}