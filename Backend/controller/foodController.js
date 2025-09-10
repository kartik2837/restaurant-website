
import foodModel from "../models/foodModel.js";
import fs from 'fs'


//add food item
const addFood = async (req, res) => {
    try {
        // Ensure an image is provided either through `req.file` or `req.body.image`
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image is required"
            });
        }

        // Create a new food item with the image path from `req.file`
        const food = new foodModel({
            ...req.body,
            image: req.file.path // Assuming `req.file.path` contains the image path
        });

        // Save the food item
        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error adding food item", error: error.message });
    }
};


//all food list
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({})
        res.json({ success: true, data: foods })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })

    }
}

// remove food item
const removeFood = async (req, res) => {
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, () => { })

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({ success: true, message: "Food Removed" })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" })


    }

}
export { addFood, listFood, removeFood }