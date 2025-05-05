const express =require('express')
const router= express.Router();

const Person = require('./../models/person');


// POST methos of person
router.post('/',async(req,res)=>{
    try{
        const data =req.body // Assuming the request body contains the person data
        // create a new Person documents using the Mongoose model
        const newPerson = new Person(data);
        // save the new person to the database

        const response = await newPerson.save();
        console.log('data saved');
        res.status(200).json(response)
        } 
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }

    }) 


// GET method to get the person
router.get('/',async(req,res)=>{
    try{
        //use the Mongoose model to fetch all person form the database.
        const response = await Person.find();
        console.log('data find');
        // send the list of person as Json response
        res.status(200).json(response)
    }
    catch(err){
        console.log('listening on port 3000');
        res.status(500).json({error:'Internal Server Error'});
    }
})

// parametrized api calls
router.get('/:workType',async(req,res)=>{
    try{
        const workType= req.params.workType;
        if(workType =='chef'|| workType =='waiter'|| workType =='manager')
        {
            const response= await Person.find({work:workType})
            console.log("response fetched");
            res.status(200).json(response);
        }
        else
        {
        res.status(404).json({error:'Invalid work type'});
        }

    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal server Error'})
    }

})

// PUT method to update the person based on object id
router.put('/:id',async(req,res)=>{
    try{
        const personid= req.params.id // Extract the id from the URL parameter
        const updatedPersonData = req.body

        const response = await Person.findByIdAndUpdate(personid,updatedPersonData,{
            new:true, // Return the updated document
            runValidators:true// Run Mongoose validation
        })
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }

        console.log('Data Updated')
        res.status(200).json(response)
    }
    catch(err)
    {
    console.log(err);
    res.status(500).json({error:'Internal server Error'})
    }
})


// DELETE method to get the person
router.delete('/:id',async(req,res)=>{
    try{
        const personid= req.params.id // Extract the id from the URL parameter

        // Assuming you have a Person model
        const response = await Person.findByIdAndDelete(personid);
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }

        console.log('Data Deleted')
        res.status(200).json({message:'Person Deleted Successfully'});
    }
    catch(err)
    {
    console.log(err);
    res.status(500).json({error:'Internal server Error'})
    }

})

module.exports = router;