import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageAllOrder.css'

const ManageAllOrder = () => {
    const [allOrder, setallOrder] = useState([]);
    const [isDeleted, setDeleted] = useState(null)
    useEffect(() => {
      fetch("https://sheltered-lake-09229.herokuapp.com/allOrders")
        .then((res) => res.json())
        .then((data) => setallOrder(data));
    }, [isDeleted]);

    console.log(allOrder)
    const handleDelete = id => {
        const url = `https://sheltered-lake-09229.herokuapp.com/deleteOrder/${id}`
        console.log(url)
        fetch(url,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
        })
        .then(res=>res.json())
        .then(result => {
            if(result.deleteCount){
                alert('deleted')
                setDeleted(true)
            }
            else{
                setDeleted(false)
            }
        })
    }
    console.log(allOrder)
    return (
        <div>
            <Table bordered hover responsive="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>status</th>
                    <th>Cancel</th>
                  
                </tr>
                </thead>
                {
                    allOrder.map(order=> <tbody>
                        <tr>
                            <td>1</td>
                            <td>{order.name}</td>
                            <td>{order.email}</td>
                            <td>{order.status}</td>
                            <td> <button onClick={()=>handleDelete(order?._id)} className="btn btn-primary m-2">Delete</button></td>
                          
                        </tr>
                        </tbody>)
                }
           </Table>
       </div>
    );
};

export default ManageAllOrder;