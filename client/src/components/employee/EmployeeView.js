import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, Redirect } from 'react-router-dom';
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

    const [redirect, setRedirect] = useState(false);
    const [showModal, setModal] = useState(false);

    const { id } = useParams();

    const showDeleteModal = () => {
        setModal(true);
    }

    const closeDeleteModal = () => {
        setModal(false);
    }

    const deleteEmployee = async () => {
        try {
            const res = await axios.delete(`http://localhost:5000/api/delete/${id}`);

            if (res.status === 200) {
                setRedirect(true);
                setModal(false);
            }
        } catch (err) {
            console.log(err);
        }
    }

    const ShowEmployeeModal = () => {
        return (
            <Modal show={showModal} onHide={closeDeleteModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Name: {firstName} {lastName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ListGroup>
                        <ListGroup.Item>Age: {age}</ListGroup.Item>
                        <ListGroup.Item>gender: {gender}</ListGroup.Item>
                        <ListGroup.Item>birthday: {birthday}</ListGroup.Item>
                        <ListGroup.Item>job: {job}</ListGroup.Item>
                    </ListGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="info" onClick={closeDeleteModal}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={deleteEmployee}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }

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

    if (redirect) {
        return <Redirect to="/" />
    }

    return (
        <>
            <ShowEmployeeModal />
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
                                <Button variant="primary" className="mr-4">Home</Button>
                            </Link>
                            <Button variant="danger" onClick={showDeleteModal}>
                                Delete
                            </Button>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}

export default EmployeeView;