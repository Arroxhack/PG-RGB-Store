const { Router } = require('express');
const { promises } = require('nodemailer/lib/xoauth2');
const {ProductComment, Product, User} = require('../../db');
const router = Router();

router.get('/comment/:id', async (req,res,next)=>{
    const {id}=req.params
    try {
        const findComment = await ProductComment.findAll({
            where:{productId: id}
        })

        const response = findComment.map( async q=>{
            const productID = await Product.findOne({where:{id:q.productId}})
            const userID = await User.findOne({where: {id:q.userId}})

            const newResponse = {
                id:q.id,
                comentario: q.comentario,
                response: q.response,
                user: userID.username,
                product: productID.name
            }

            return newResponse
        })

        const sendResponse = await Promise.all(response)
        
        res.send(sendResponse)

    } catch (error) {
        next(error)
    }
})

router.post('/create-comment/:id', async(req,res,next)=>{
    try {
        const {id} = req.params
        const {comment,user} = req.body

        const newComment = await ProductComment.create({
            comentario : comment
        })
        await newComment.setProduct(id)
        await newComment.setUser(user)

        res.send('Comentario creado con exito')
    } catch (error) {
        next(error)
    }
})

router.get('/not-response', async(req,res,next)=>{
    try {
        const notResponse = await ProductComment.findAll({
            where:{response:null}
        })

       const response = notResponse.map( async (r)=>{
            const productID = await Product.findOne({where:{id:r.productId}})
            const userID = await User.findOne({where:{id:r.userId}})

            const newResponse = {
                id:r.id,
                comentario: r.comentario,
                response: r.response,
                user: userID.username,
                product: productID.name
            }

            return newResponse
        })
        const sendResnponse = await Promise.all(response)

        res.send(sendResnponse)
    } catch (error) {
        next(error)
    }
})

router.put('/create-response/:id', async(req,res,next)=>{

    try {
        const {id} = req.params
        const {response} = req.body

        const newComment = await ProductComment.update({response}
        ,{where:{id:id}})

        console.log(newComment)
        res.send('exito')
    } catch (error) {
        next(error)
    }
})


module.exports = router;