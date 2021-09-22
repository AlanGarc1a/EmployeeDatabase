import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const Employee = ({ id, firstName, lastName, age, gender, birthday }) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{firstName} {lastName}</Card.Title>
                <ListGroup variant="flush">
                    <ListGroup.Item>Age: {age}</ListGroup.Item>
                    <ListGroup.Item>Gender: {gender}</ListGroup.Item>
                    <ListGroup.Item>Birthday: {birthday}</ListGroup.Item>
                </ListGroup>
                <Link to={`/edit/${id}`} className="text-white">
                    <Button variant="warning" className="mr-3">
                        Edit
                    </Button>
                </Link>
                <Link to={`/employee/${id}`} className="text-white">
                    <Button className="primary">
                        View
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

export default Employee;