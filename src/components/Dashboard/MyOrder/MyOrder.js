import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../Context/useAuth';

const MyOrder = () => {
    const {user}=useAuth();
    const [order, setOrder]= useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/myOrder/${user.email}`)
          .then((res) => res.json())
          .then((data) => setOrder(data));
      }, []); 
      delete order._id;
      console.log(order)
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
                    order.map(order=> <tbody>
                        <tr>
                            <td>1</td>
                            <td>{order.name}</td>
                            <td>{order.price}</td>
                            <td>{order.description}</td>
                            {/* <td> <button onClick={()=>handleDelete(order?._id)} className="btn btn-primary m-2">Delete</button></td> */}
                          
                        </tr>
                        </tbody>)
                }
           </Table>
       </div>
    );
};

export default MyOrder;