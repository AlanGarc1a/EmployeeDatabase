import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const centerForm = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '95vh',
}

const EmployeeCreate = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const [job, setJob] = useState('');

    const [firstNameError, setFirstNameError] = useState(false);
    const [LastNameError, setLastNameError] = useState(false);
    const [ageError, setAgeError] = useState(false);
    const [birthdayError, setBirthdayError] = useState(false);
    const [jobError, setJobError] = useState(false);
    const [redirect, setRedirect] = useState(false);

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

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        var pattern = /^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;

        if (firstName === '') {
            setFirstNameError(true);
        }
        if (lastName === '') {
            setLastNameError(true);
        }
        if (age < 0) {
            setAgeError(true);
        }
        if (!pattern.test(birthday)) {
            setBirthdayError(true);
        }
        if (job === '') {
            setJobError(true);
        }
        else {
            const newEmployee = {
                firstName,
                lastName,
                age,
                gender,
                birthday,
                job
            }

            try {
                const res = await axios.post('http://localhost:5000/api/create', newEmployee);

                if(res.status === 200) {
                    setRedirect(true);
                }
            } catch(error) {
                throw new Error('Error Creating Employee');
            }
        }
    }

    if (redirect) {
        <Redirect to="/" />
    }

    return (

        <Container fluid>
            <div style={centerForm}>
                <Form onSubmit={onSubmitHandler}>
                    <p className="h3 mb-5 text-center">Add Employee</p>
                    <Form.Row>
                        <Form.Group column='sm' className="mr-5">
                            <Form.Label>First:</Form.Label>
                            <Form.Control type="text" placeholder="First Name" isInvalid={firstNameError} value={firstName} onChange={onFirstNameHandler} />
                            <Form.Control.Feedback type="invalid">Please enter a First name</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group colum='sm'>
                            <Form.Label>Last:</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" isInvalid={LastNameError} value={lastName} onChange={onLastNameHandler} />
                            <Form.Control.Feedback type="invalid">Please enter a Last name</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group colum='sm' className="mr-5">
                            <Form.Label>Age:</Form.Label>
                            <Form.Control required type="number" placeholder="Age" isInvalid={ageError} value={age} onChange={onAgeHandler} />
                            <Form.Control.Feedback type="invalid">Please enter a valid age</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Sex:</Form.Label>
                            <Form.Control required as="select" value={gender} onChange={onGenderHandler}>
                                <option>Male</option>
                                <option>Female</option>
                                <option>Other</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group colum='sm' className="mr-5">
                            <Form.Label>Birthday:</Form.Label>
                            <Form.Control type="text" placeholder="mm/dd/yyyy" isInvalid={birthdayError} value={birthday} onChange={onBirthdayHandler} />
                            <Form.Control.Feedback type="invalid">Please enter a birthday in mm/dd/yyyy</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group colum='sm'>
                            <Form.Label>Job:</Form.Label>
                            <Form.Control type="text" placeholder="Job" isInvalid={jobError} value={job} onChange={onJobHandler} />
                            <Form.Control.Feedback type="invalid">Please enter a job</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit" className="mr-4 mt-5">
                        Submit
                    </Button>
                    <Button variant="secondary" className=" mt-5">
                        <Link to="/" className="text-white">
                            Cancel
                        </Link>
                    </Button>
                </Form>
            </div>
        </Container>
    )
}

export default EmployeeCreate;