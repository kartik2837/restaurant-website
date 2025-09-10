import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Contextapi'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const PlaceOrder = () => {
    const { getTotalCartAmount, token, food_list, cartitem, url } = useContext(StoreContext);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: ""

    })
    const onchangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }
    const placeOrder = async (event) => {
        event.preventDefault();
        let orderItems = [];
        food_list.map((item) => {
            if (cartitem[item._id] > 0) {
                let itemInfo = item;
                itemInfo["quantity"] = cartitem[item._id];
                orderItems.push(itemInfo)
            }
        })
        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmount() + 2,

        }
        let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } })
        if (response.data.success) {
            const { session_url } = response.data;
            window.location.replace(session_url);
        }
        else {
            alert(" Error")
        }

    }
    const navigate = useNavigate()
    useEffect(() => {
        if (!token) {
            navigate("/cart")

        }
        else if (getTotalCartAmount() == 0) {
            navigate("/cart")
        }
    })
    return (
        <form onSubmit={placeOrder} className="place-order">
            <div className="place-order-left">
                <p className='title'>Delivery Information</p>
                <div className="multi-fields">
                    <input required onChange={onchangeHandler} value={data.firstName} name='firstName' type="text" placeholder='Enter Your First Name' />
                    <input required onChange={onchangeHandler} value={data.lastName} name='lastName' type="text" placeholder='Enter Your  Last Name' />
                </div>
                <input required onChange={onchangeHandler} value={data.email} name='email' type="email" placeholder='Enter Email-Address' />
                <input required onChange={onchangeHandler} value={data.street} name='street' type="text" placeholder='Street' />
                <div className="multi-fields">
                    <input required onChange={onchangeHandler} value={data.city} name='city' type="text" placeholder='Enter Your City' />
                    <input required onChange={onchangeHandler} value={data.state} name='state' type="text" placeholder='Enter Your State' />
                </div>
                <div className="multi-fields">
                    <input required onChange={onchangeHandler} value={data.zipcode} name='zipcode' type="text" placeholder='Zip code' />
                    <input onChange={onchangeHandler} value={data.country} name='country' type="text" placeholder='Country' />
                </div>
                <input required onChange={onchangeHandler} value={data.phone} name='phone' type="text" placeholder='Enter Your Phone' />

            </div>
            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-detail">
                            <p>Subtotal</p>
                            <p>₹{getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-detail">
                            <p>Delivery Fee</p>
                            <p>₹{getTotalCartAmount() === 0 ? 0 : 100}</p>

                        </div>
                        <hr />

                        <div className="cart-total-detail">
                            <b>Total</b>
                            <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 100}</b>
                        </div>


                    </div>
                    <div>


                    </div>
                    <button type='submit'>Place Order</button>

                </div>

            </div>
        </form>
    )
}

export default PlaceOrder;
