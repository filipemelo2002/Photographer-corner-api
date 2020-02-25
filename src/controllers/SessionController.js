const Admin = require('../models/Admin')

module.exports = {
    async index(req, res){
        const {user, pass} = req.body

        if(user && pass){
            const admin = await  Admin.findOne({
                user,
                pass
            }) 
            
            if(admin){
                res.status(200).json(admin)
            }
        }else{
            return res.status(400).json({message:"Not found user"})
        }    
    },
}