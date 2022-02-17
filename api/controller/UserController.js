const {users} =require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//@des GET user
//@route Get /api/user/signup
//@acess Public
const getUser = async(req,res) =>{
    try {
        // await User.findAll()
        // .then((user)=>{
        //     console.log(user)
        //     res.sendStatus(200)
        // })
        
        // .catch((err)=>{
        //     console.log(err)
        // })    
        res.send("confidential!")    
    } catch (error) {
        res.Status(500).json('User not Found');
    }
}
//@des register user
//@route POST /api/user/signup
//@acess Public
const registerUser = async(req,res) =>{
    const {name,email,password,admin} = req.body
     //generate new password
    const salt = await bcrypt.genSalt(10);
    
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
        const userAlreadyExits = await users.findOne({where:{email}}).catch((error)=>{
            console.log(error)
        })
        if(userAlreadyExits){
            return res.status(500).json('User Already Exists')
        }
        const newUser = new users({name,email,password:hashedPassword,admin})
        await newUser.save()
        res.status(200).json("User Has been created Successfully")
    } catch (error) {
        res.status(500).json(error);
    }
}
//@des authenticate user
//@route GET /api/users/login
//@acess Private
const userAuth = async(req,res)=>{
    try {
        const {email,password} = req.body

    const userWithEmail = await users.findOne({where:{email}})
    if(!userWithEmail){
        return  res.status(500).json('Invalid username or passowrd!')
    }
    const validPassword = await bcrypt.compare(password,userWithEmail.password)
    if(!validPassword){
        return res.status(500).json('Invalid username or passowrd!')
    }
    
    const jwtToken = jwt.sign(
        {
            id:userWithEmail.id,
            email:userWithEmail.email
        },
        process.env.JWT_SECRET
    ) 
    res.status(200).json({message:"your login Sucessfully!",token:jwtToken})
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports = {
    getUser,
    registerUser,
    userAuth
};