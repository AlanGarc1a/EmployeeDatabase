import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Employee = ({firstName, lastName, age, gender, birthday, job}) => {
    return (
        <Col className="mt-5">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{firstName} {lastName}</Card.Title>
                    <Card.Subtitle>Job: {job}</Card.Subtitle>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Age: {age}</ListGroup.Item>
                        <ListGroup.Item>Gender: {gender}</ListGroup.Item>
                        <ListGroup.Item>Birthday: {birthday}</ListGroup.Item>
                    </ListGroup>
                    <Button variant="primary" className="mr-3">Edit</Button>
                    <Button variant="primary">View</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);

    const fetchEmployees = async () => {
       const res = await axios.get('http://localhost:5000/api/');
       setEmployees(res.data);
    }

    useEffect(() => {
        fetchEmployees();
    }, []);

    return (
        <Container>
            <Row>
                {employees.map( employee => {
                    return <Employee 
                                key={employee.id}
                                firstName={employee.first_name}
                                lastName={employee.last_name}
                                age={employee.age}
                                gender={employee.gender}
                                birthday={employee.birthday}
                                job={employee.job} 
                            />
                })}
            </Row>
        </Container>
    )
}

export default EmployeeList;