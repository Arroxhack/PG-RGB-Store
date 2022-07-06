const { Router } = require('express');
const {ProductComment, Product} = require('../../db');
const router = Router();

router.get('/comment/:id', async (req,res,next)=>{
    const {id}=req.params
    try {
        const findComment = await ProductComment.findAll({
            where:{productId: id}
        })
        
        res.send(findComment)

    } catch (error) {
        next(error)
    }
})

router.post('/create-comment/:id', async(req,res,next)=>{
    try {
        const {id} = req.params
        const {comment,user} = req.body

        console.log(id, comment, user, "ES POR ACAAAAAA")

        const newComment = await ProductComment.create({
            comentario : comment
        })
        await newComment.setProduct(id)
        await newComment.setUser(user)

        res.send(newComment)
    } catch (error) {
        next(error)
    }
})

router.get('/not-response', async(req,res,next)=>{
    try {
        const notResponse = await ProductComment.findAll({
            where:{response:null}
        })

        res.send(notResponse)
    } catch (error) {
        next(error)
    }
})

router.put('/create-response/:id', async(req,res,next)=>{

    try {
        const {id} = req.params
        const {response} = req.body

        const newComment = await ProductComment.update({response}
        ,{where:{id}})

        res.send('exito')
    } catch (error) {
        next(error)
    }
})


module.exports = router;