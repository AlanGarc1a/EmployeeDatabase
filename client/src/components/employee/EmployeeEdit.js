import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const centerForm = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '95vh'
};

const EmployeeEdit = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('Male');
    const [birthday, setBirthday] = useState('');
    const [job, setJob] = useState('');

    const onFirstNameHandler = (event) => {
        event.persist();
        setFirstName(event.target.value);
    }

    const onLastNameHandler = (event) => {
        event.persist();
        setLastName(event.target.value);
    }

    const onAgeHandler = (event) => {
        event.persist();
        setAge(event.target.value);
    }

    const onGenderHandler = (event) => {
        event.persist();
        setGender(event.target.value);
    }

    const onBirthdayHandler = (event) => {
        event.persist();
        setBirthday(event.target.value);
    }

    const onJobHandler = (event) => {
        event.persist();
        setJob(event.target.value);
    }

    return (
        <Container fluid>
            <div style={centerForm}>
                <Form>
                    <p className="h3 mb-5 text-center">Update Employee</p>
                    <Form.Row>
                        <Form.Group className="mr-5">
                            <Form.Label>First Name: </Form.Label>
                            <Form.Control type="text" placeholder="First Name" value={firstName} onChange={onFirstNameHandler} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Last Name: </Form.Label>
                            <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={onLastNameHandler} />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group className="mr-5">
                            <Form.Label>Age: </Form.Label>
                            <Form.Control type="Number" placeholder="Age" value={age} onChange={onAgeHandler} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Sex: </Form.Label>
                            <Form.Control as="select" defaultValue={gender} placeholder="Gender" onChange={onGenderHandler}>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group className="mr-5">
                            <Form.Label>Birthday: </Form.Label>
                            <Form.Control type="text" placeholder="Birthday" value={birthday} onChange={onBirthdayHandler} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Job: </Form.Label>
                            <Form.Control type="text" placeholder="Job" value={job} onChange={onJobHandler} />
                        </Form.Group>
                    </Form.Row>

                    <Button type="submit" variant="info" className="mr-4 mt-5">
                        Update
                    </Button>
                    <Button variant="secondary" className="mt-5">
                        <Link to="/" className="text-white">
                            Cancel
                        </Link>
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default EmployeeEdit;