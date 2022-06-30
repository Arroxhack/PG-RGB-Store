const { Router } = require('express');
const { Product, Category, Brand } = require('../../db');
const router = Router();

router.get('/filter/', async (req,res,next)=>{
    const {brand, category} = req.query
    try {
        const allProduct = await Product.findAll()
        if(category && category!=='all' && brand && brand !== 'all'){
            const filterCatBrand = []

            allProduct.forEach(p=>{
                const cat = p.category[0]
                const bran = p.brand
                if(cat===category && bran===brand){
                    filterCatBrand.push(p)
                }
            })

            res.status(200).send(filterCatBrand)
        }
        if(category==='all' && brand){
            const allBrand = []
            
            allProduct.forEach(p=>{
                if(brand===p.brand){
                    allBrand.push(p)
                }
            })

            res.status(201).send(allBrand)
        }
        if(category && category!=='all'&&brand===undefined){
            const filterCat = []
            allProduct.forEach(p=>{
                const cat = p.category[0]
                if(cat===category){
                    filterCat.push(p)
                }
            })
            res.status(202).send(filterCat)
        }
        if(brand==='all'){
            const filterCat = []
            allProduct.forEach(p=>{
                const cat = p.category[0]
                if(cat===category){
                    filterCat.push(p)
                }
            })
            res.status(203).send(filterCat)
        }
        if(category==='all'){
            res.status(204).send(allProduct)
        }

    } catch (error) {
        next(error)
    }
})

module.exports = router;
