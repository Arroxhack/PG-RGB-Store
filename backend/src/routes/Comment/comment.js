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
        const {comment} = req.body

        const newComment = await ProductComment.create({
            comentario : comment
        })

        newComment.setProduct(id)

        res.send('exito')
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