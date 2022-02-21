const {meals,menus,users,users_menus} = require('../models')
//@des GET Meals
//@route Get /api/menu/meals
//@acess Public
const getAllMeals =async (req,res) => {
    try {
        const AllWeaklyMeals =  await meals.findAll()
        if(!AllWeaklyMeals){
            return res.status(404).json("Meals not Found!")
        }
        res.status(200).json(AllWeaklyMeals)   
    } catch (error) {
        res.status(500).json(error)
    }
}
//@des Update Meals
//@route PUT /api/menu/meals/:id
//@acess Public
const updatedMeal =async (req,res) => {
    try {
        const {id,status} = req.body
        const meal =  await meals.findOne({where:{id}})
        if(meal){
            meal.status = status || meal.status
        }
        const updatedMeal = await meal.save();
        res.status(200).json(updatedMeal)    
    } catch (error) {
        res.status(500).json(error)
    }
    
 }
 //@des GET Menus
//@route Get /api/menus
//@acess Public
const getAllMenus =async (req,res) => {
    try {
        const AllMenus =  await menus.findAll()
        if(!AllMenus){
            return res.status(404).json("Menus not Found!")
        }
        res.status(200).json(AllMenus)   
    } catch (error) {
        res.status(500).json(error)
    }
}
 //@des Delete Menu
//@route DELETE /api/menus/delete
//@acess Private
const deleteMenu =async (req,res) => {
    try {
        const {id} = req.body
        const deletedMenu = await menus.findOne({where:{id:id}})
        await deletedMenu.destroy();    
        res.status(200).json("Menu has been Deleted!")   
    } catch (error) {
        res.status(500).json(error)
    }
}
 //@des ADD Menu
//@route POST /api/menus/delete
//@acess Private
const addMenu =async (req,res) => {
    try {
        const {menu_name,description,image} = req.body
        const addMenu = new menus({menu_name,description,image})
        await addMenu.save();
        res.status(200).json('Menu Added Successfully!')   
    } catch (error) {
        res.status(500).json(error)
    }
}
 //@des subscribers list
//@route GET /api/menus/subscribers
//@acess Private
const subscribers =async (req,res) => {
    try {
        const subscribers = await users.findAll({
            include:[menus]
        });
        res.status(200).json(subscribers) 
    } catch (error) {
        res.status(500).json(error)
    }
}
module.exports ={
    getAllMeals,
    updatedMeal,
    getAllMenus,
    deleteMenu,
    addMenu,
    subscribers
}