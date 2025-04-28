import React, { useContext, useEffect, useState } from 'react'; // Ensure all necessary hooks are imported
import axios from 'axios'; // Import axios here
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext'; // Ensure you're importing your StoreContext correctly
import './MyOrders.css';

const MyOrders = () => {
    const { url, token } = useContext(StoreContext);
    const [data, setData] = useState([]);

    const fetchOrders = async () => {
        try {
            const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
            setData(response.data.data);
        } catch (error) {
            console.error("Error fetching orders:", error); // Log the error for debugging
        }
    };

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            <div className="container">
                {data.map((order, index) => (
                    <div key={index} className="my-orders-order">
                        <img src={assets.parcel_icon} alt="" />
                        <p>{order.items.map((item, index) => {
                            if (index === order.items.length - 1) {
                                return item.name + " x " + item.quantity;
                            } else {
                                return item.name + " x " + item.quantity + ", ";
                            }
                        })}</p>
                        <p>₹{order.amount}.00</p>
                        <p>Items: {order.items.length}</p>
                        <p><span>&#x25cf;</span> <b>{order.status}</b></p>
                        <button onClick={fetchOrders()}>Track Order</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyOrders;
