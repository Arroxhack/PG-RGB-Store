const { Router } = require('express');
const { promises } = require('nodemailer/lib/xoauth2');
const {ProductComment, Product, User} = require('../../db');
const router = Router();

router.get('/comment/:id', async (req,res,next)=>{
    const {id}=req.params
    try {
        let findComment = await ProductComment.findAll({
            where:{productId: id}
        })
        
        findComment = findComment.sort((a,b)=>{
            if(a.id<b.id) return 1;
            if(a.id>b.id) return -1;
            return 0
        })

        const response = findComment.map( async q=>{
            const productID = await Product.findOne({where:{id:q.productId}})
            const userID = await User.findOne({where: {id:q.userId}})
            const newResponse = {
                id:q.id,
                comentario: q.comentario,
                response: q.response,
                user: userID.username,
                product: productID.name,
                fechaPreg: q.createdAt.toString().slice(4,-41),
                fechaRta: q.updatedAt.toString().slice(4,-41)
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

        res.send('Comment was successfully created')
    } catch (error) {
        next(error)
    }
})

router.get('/not-response', async(req,res,next)=>{
    try {
        let notResponse = await ProductComment.findAll({
            where:{response:null}
        })

        notResponse = notResponse.sort((a,b)=>{
            if(a.id<b.id) return -1;
            if(a.id>b.id) return 1;
            return 0
        })

       const response = notResponse.map( async (r)=>{
            const productID = await Product.findOne({where:{id:r.productId}})
            const userID = await User.findOne({where:{id:r.userId}})

            const newResponse = {
                id:r.id,
                comentario: r.comentario,
                response: r.response,
                user: userID.username,
                product: productID.name,
                fechaPreg: r.createdAt.toString().slice(4,-41),
                fechaRta: r.updatedAt.toString().slice(4,-41)
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
        res.send('success')
    } catch (error) {
        next(error)
    }
})

router.delete('/delete-question/:id', async(req,res,next)=>{
    const {id} = req.params
    try {
        
        const deleteQuestion = await ProductComment.destroy({where:{id}})

        res.send('Comment deleted')

    } catch (error) {
        next(error)
    }
})


module.exports = router;