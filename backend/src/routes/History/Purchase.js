const e = require("express");
const { Router } = require("express");
const { Purchase, User } = require("../../db");
const router = Router();

router.post("/post-purchase", async (req, res, next) => {
    const {id,idUser,products}=req.body
    try {
        if(!id || !idUser || !products){
            return res.status(404).send('Error: falta un argumento')
        }else{
            const user = await User.findOne({where:{id:idUser}})

            if(!user?.id){
                return res.status(404).send('Error: no hay user')
            }else{
                const newPurch={
                    id,
                    idUser,
                    products
                }

                const createPurch = await Purchase.create(newPurch)

                if(!createPurch?.id){
                    return res.status(404).send('Error: no se pudo crear')
                }else{
                    return res.send(createPurch)
                }

            }
        }
    } catch (error) {
        next(error)
    }
});

//User
router.get('/user-purchase/:id', async(req,res,next)=>{
    const {id}=req.params
    try {
        if(!id){
            return res.status(404).send('Error: no hay ID')
        }else{
            const user = await User.findOne({where:{id}})
            if(!user?.id){
                return res.status(404).send('Error: no se pudo encontrar el usuario')
            }else{
                const purchase = await Purchase.findAll({where:{idUser:id}})

                if(purchase.length===0){
                    return res.send('No purchases found')
                }else{
                    return res.send(purchase)
                }
            }

        }
    } catch (error) {
        next(error)
    }
})

// Admin
router.get('/admin-purchase', async(req,res,next)=>{
    try {

                const purchase = await Purchase.findAll()

                if(purchase.length===0){
                    return res.send('No purchases found')
                }else{
                    return res.send(purchase)
                }


    } catch (error) {
        next(error)
    }
})

module.exports = router;
