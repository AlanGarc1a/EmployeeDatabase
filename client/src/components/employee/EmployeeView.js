import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const centerEmployee = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '95vh'
};

const EmployeeView = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const [job, setJob] = useState('');

    const { id } = useParams();

    const fetchEmployee = async () => {
        const res = await axios.get(`http://localhost:5000/api/${id}`);

        setFirstName(res.data.first_name);
        setLastName(res.data.last_name);
        setAge(res.data.age);
        setGender(res.data.gender);
        setBirthday(res.data.birthday);
        setJob(res.data.job);
    }

    useEffect(() => {
        fetchEmployee();
    });

    return (
        <Container>
            <div style={centerEmployee}>
                <Card style={{ width: '25rem' }}>
                    <Card.Header>Name: {firstName} {lastName}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>Gender: {gender}</ListGroup.Item>
                        <ListGroup.Item>Age: {age}</ListGroup.Item>
                        <ListGroup.Item>Birthday: {birthday}</ListGroup.Item>
                        <ListGroup.Item>Job: {job}</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Link to="/">
                            <Button variant="primary">Home</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default EmployeeView;