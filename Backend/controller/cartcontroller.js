import userModal from '../models/userModel.js'
//add cart
const addToCart = async (req, res) => {
    try {
        let userData = await userModal.findById(req.body.userId)
        let cartData = await userData.cartData;
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1

        }
        else {
            cartData[req.body.itemId] += 1;
        }
        await userModal.findByIdAndUpdate(req.body.userId, { cartData })
        res.json({ success: true, message: "This is Added To Cart" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Error" })

    }
}

// remove item
const removeFromCart = async (req, res) => {
    try {
        let userData = await userModal.findById(req.body.userId);
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;

        }
        await userModal.findByIdAndUpdate(req.body.userId, { cartData })
        res.json({ success: true, message: "This is Removed From Cart" })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "This is Cart Error" })

    }

}


// user data
const getCart = async (req, res) => {
    try {
        let userData = await userModal.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({ success: true, cartData })
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: "Get cart is Error" })

    }
}

export { addToCart, removeFromCart, getCart }