import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, Redirect, useParams } from 'react-router-dom';
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
    const [department, setDepartment] = useState('');
    const [project, setProject] = useState('');

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
            const res = await axios.delete(`/api/employee/delete/${id}`);

            if (res.status === 200) {
                setRedirect(true);
                setModal(false);
            }
        } catch (err) {
            console.log(err.response);
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
                        <ListGroup.Item>department: {department}</ListGroup.Item>
                        <ListGroup.Item>Project: {project}</ListGroup.Item>
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

    useEffect(() => {
        const fetchEmployee = async () => {
            try {
                const res = await axios.get(`/api/employee/${id}`);
                console.log(res);
    
                if(res.status === 200) {
                    setFirstName(res.data.firstName);
                    setLastName(res.data.lastName);
                    setAge(res.data.age);
                    setGender(res.data.gender);
                    setBirthday(res.data.birthday);
                    setDepartment(res.data.department.name);
                    setProject(res.data.project.name);
                }
    
            } catch(error) {
                console.log(error.response);
            }
        }
        
        fetchEmployee();

        return () => { fetchEmployee(); }
    },[id]);

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
                            <ListGroup.Item>Department: {department}</ListGroup.Item>
                            <ListGroup.Item>Project: {project}</ListGroup.Item>
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