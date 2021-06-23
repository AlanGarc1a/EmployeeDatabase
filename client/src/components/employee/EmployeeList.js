import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const Employee = () => {
    return (
        <Col className="mt-5">
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Alan Garcia</Card.Title>
                    <Card.Subtitle>Job: Engineer</Card.Subtitle>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Age: 24</ListGroup.Item>
                        <ListGroup.Item>Gender: Male</ListGroup.Item>
                        <ListGroup.Item>Birthday: 07/17/1996</ListGroup.Item>
                    </ListGroup>
                    <Button variant="primary" className="mr-3">Edit</Button>
                    <Button variant="primary">View</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

const EmployeeList = () => {
    return (
        <Container>
            <Row>
                <Employee />
            </Row>
        </Container>
    )
}

export default EmployeeList;