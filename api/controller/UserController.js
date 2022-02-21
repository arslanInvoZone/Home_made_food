const {users,invoices,menus} =require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { subscribe } = require('../routes/User')


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
    const {email,password,name,admin} = req.body
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
        res.status(200).json(name,email,admin)
    } catch (error) {
        res.status(500).json(error);
    }
}
//@des authenticate user
//@route POST /api/users/login
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
    res.status(200).json({user:userWithEmail,token:jwtToken})
    } catch (error) {
        res.status(500).json(error)
    }
}
//@des GET Invoices
//@route Get /api/users/payments
//@acess Public
const getAllInvoices =async (req,res) => {
    try {
        const AllInvoices =  await invoices.findAll()
        if(!AllInvoices){
            return res.status(404).json("Invoices not Found!")
        }
        res.status(200).json(AllInvoices)   
    } catch (error) {
        res.status(500).json(error)
    }
}
//@des user subscribed menus
//@route POST /api/users/subscribed
//@acess Private
const userSubmenu =async (req,res) => {
    try {
        const {uid,mid} = req.body
        const currentUser = await users.findOne({where:{id:uid}})
        const subscribedMenu = await menus.findOne({where:{id:mid}})
        if(subscribedMenu){
           subscribedMenu.subscribed = true || subscribedMenu.subscribed 
        }
        await subscribedMenu.save()
        currentUser.addMenu(subscribedMenu)
        res.status(200).json('You have Subcribed the Menu Successfully!')   
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports = {
    getUser,
    registerUser,
    userAuth,
    getAllInvoices,
    userSubmenu

};