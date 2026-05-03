import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from '../RTK/slicer/cartSlicer';

const Cart = () => {

    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(
            addItem({
                id: 1,
                name: "Phone",
                price: 10000,
            })
        );
    };

    const handleRemove = () => {
        dispatch(removeItem(1));
    };

    return (
        <div>
            <button onClick={handleAdd}>Add Item</button>
            <button onClick={handleRemove}>Remove Item</button>

            <ul>
                {items.map((item) => (<li key={item.id}> {item.name} - ₹{item.price} </li>))}
            </ul>
        </div>
    )
}

export default Cart