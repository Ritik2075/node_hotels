const express =require('express')
const router= express.Router(); 

const MenuItem = require('./../models/menu');


// POST Method to add a Menu Item
router.post('/',async(req,res)=>{
    try{
        const data= req.body
        const newMenu= new MenuItem(data);
        const response=await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'})

    }
})


// GET Method to get the Menuitems
router.get('/',async(req,res)=>{
    try{
        const response = await MenuItem.find();
        console.log("data find successfully!")
        res.status(200).json(response)
    }
    catch(err){
        console.log("listening on port 3000");
        res.status(500).json({error:'Internal server error'});
    }

})

// parametrized api calls
router.get('/:tasteType',async(req,res)=>{

    try{
        const tasteType= req.params.tasteType;
        if(tasteType == 'sweet' || tasteType=='spicy' || tasteType=='sour')
        {
            const response = await MenuItem.find({taste:tasteType})
            console.log("Response fetched");
            res.status(200).json(response);
        }
        else
        {
            res.status(404).json({error:'Invalid Taste Type'});
        }

    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal server Error'})

    }
})


// PUT method to update the menu Item based on object id
router.put('/:id',async(req,res)=>{
    try{
        const menuid = req.params.id
        const updateMenuData= req.body

        const response = await MenuItem.findByIdAndUpdate(menuid,updateMenuData,{
            new:true,
            runValidators:true
        })
        if(!response){
            return res.status(404).json({error:'This data not found'})
        }
        console.log('Data Updated Successfully!!!')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'})
    }

})



module.exports = router;