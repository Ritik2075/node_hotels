const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const bodyParser=require('body-parser');
app.use(bodyParser.json()); //req.body
const PORT = process.env.PORT || 3000;


//  this below uncommentd code is the free code thats come together
//  with express module of npm see that on that express page 
app.get('/',(req, res)=> {
    res.send('Welcome to Our Hotel')
  })
  
// const Person = require('./models/person');
// const MenuItem = require('./models/menu');



/*try{
        const tasteType= req.params.taste;
        if(tasteType == 'sweet' || tasteType=='spicy' || tasteType=='sour')
        {
            const response = await MenuItem.find({taste:tasteType})
            console.log("Response fetched");
            res.status(200).json(response)
        }

    }
    catch(err){

    }
// POST methos of person
app.post('/person',async(req,res)=>{
    try{
        const data =req.body // Assuming the request body contains the person data
        // create a new Person documents using the Mongoose model
        const newPerson = new Person(data);
        // save the new person to await newPerson.save(); the database

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
app.get('/person',async(req,res)=>{
    try{
          //use the Mongoose model to fetch all person form the database.
          const response = await Person.find();
          console.log('data find');
          //
const PORT = process.env.PORT || 3000; send the list of person as Json response
          res.status(200).json(response)
    }
    catch(err){
        console.log('listening on port 3000');
        res.status(500).json({error:'Internal Server Error'});
    }
})

// parametrized api calls
app.get('/person/:workType',async(req,res)=>{
    try{

        const workType= req.params.workType;
        if(workType=='chef'|| workType=='waiter'|| workType=='manager')
        {
            const response= await Person.find({work:workType})
            console.log("response fetched");
            res.status(200).json(response);
        }
        else
        {
        res.status(404).json({error:'Invalid work type'});
        }

    }try{
        const tasteType= req.params.taste;
        if(tasteType == 'sweet' || tasteType=='spicy' || tasteType=='sour')
        {
            const response = await MenuItem.find({taste:tasteType})
            console.log("Response fetched");
            res.status(200).json(response)
        }

    }
    catch(err){

    }
    catch(err)
    {
        console.log(err);
        res.status(500).json({error:'Internal server Error'})
    }

})
*/

/*
// POST Method to add a Menu Item
app.post('/menu',async(req,res)=>{
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
app.get('/menu',async(req,res)=>{
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

*/





// Import the  router files
const personRoutes = require('./routes/personroutes');
const menuItemRoutes = require('./routes/menuItemRoutes');

// use the routers
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);


app.listen(PORT,()=>{
    console.log('listening on port 3000');
})






/*
app.get('/chicken',(req, res)=>{
    res.send('sure sir, i would love to server chicken')
})

// this how we create api 
app.get('/idli',(req,res)=>{
    var custommized_idli ={
        name:'rava idli',
        size:'10 cm diameter',
        is_sambhar:true,
        is_chutney:false
    }
    res.send(custommized_idli)
})

app.post('/person',(req,res)=>{
    res.send("person data is saved")
    console.log("data is saved.. of person")
})

app.post('/items',(req,res)=>{
    res.send("items data is saved...")
    console.log("data is saved.. of items")
})

/*
{
    "name":"Alice",
    "age":28,
    "work":"chef",
    "mobile": "123-456-7890",
    "email":"alice@example.com",
    "address":"123 Main st,city",
    "salary":60000
}
*/





// this is only for learning..
/*
// console.log('server is running...')

/*
we can create fucntion many types

*/

// 1. type

/*
function add(a,b){
    return a+b;
}

var result= add(2,8);
console.log(result)
*/

// 2 type
/*
var add = function(a,b){
    return a+b;
}
var result= add(2,8);
console.log(result);
*/

// 3 type this is arrow function

/*
var add=(a,b) => {return a+b;}
var result =add(45,45);
console.log(result)
*/

//  4 type

/*
var add = (a,b) => a+b;

var result = add(123,7)
console.log(result);
*/

// 5 type

/*
(function(){
    console.log('ritik');
})();

*/

// *************** call Back function *********


/*
function callback()
{
    console.log("this is callback function")
}

const add= function(a,b,callback)
{
    var result=a+b;
    console.log("result=",result)
    callback();
}

add(3,4,callback);

*/

// how to do as small in this function

/*
const add= function(a,b,callback)
{
    var result=a+b;
    console.log("result=",result)
    callback();
}

add(2,3 ,function()
{
    console.log('add completed')
});

// this is also and example to do small this function
add(2,3,()=>console.log('add completed'))
*/


// here we import notes.js file 

/*
var _ = require('lodash');
const notes= require('./notes.js')
var age= notes.age
console.log(age);

var data=["person","person",1,2,3,"name","age",2];
var filter=_.uniq(data);
console.log(filter)
*/


// json  string to json object consvert

/*
const jsonString = '{"name":"john","age":30, "city":"New York"}';
const jsonObject = JSON.parse(jsonString)
console.log("this is json object=",jsonObject.name);
*/

// json object
/*
const objectToConvert={name:"alice", age:25};
const jsonStringfied = JSON.stringify(objectToConvert);
console.log(jsonStringfied);

*/


/*
{
       "name": "pankaj",
        "work": "chef",
        "mobile": "123-456-7890",
        "email": "alice@example.com",
        "address": "123 Main st, City",
        "salary": 60000
}
*/