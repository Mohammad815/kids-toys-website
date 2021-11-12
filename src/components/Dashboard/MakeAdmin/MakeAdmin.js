import React, { useState } from 'react';
import { Form , Button, Alert} from 'react-bootstrap';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://sheltered-lake-09229.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <div className="form">
            <Form onSubmit={handleAdminSubmit}>
                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Control className=" " type="email" 
                    onBlur={handleOnBlur}placeholder="Enter email" />
                    </Form.Group>
                    <Button type="submit">Make Admin</Button>
            </Form>
            <br />
           
            </div>
            <div>{success && <Alert variant="success">Make Admin successfully!</Alert>}</div>
        </div>
    );
};

export default MakeAdmin;