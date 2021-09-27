import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Link, Redirect, useParams } from 'react-router-dom';
import axios from 'axios';

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
    const [salary, setSalary] = useState('');
    const [department, setDepartment] = useState('');
    const [project, setProject] = useState('');

    const [firstNameError, setFirstNameError] = useState(false);
    const [LastNameError, setLastNameError] = useState(false);
    const [ageError, setAgeError] = useState(false);
    const [birthdayError, setBirthdayError] = useState(false);
    const [salaryError, setSalaryError] = useState(false);
    const [departmentError, setDepartmentError] = useState(false);
    const [projectError, setProjectError] = useState(false);
    const [redirect, setRedirect] = useState(false);

    const { id } = useParams();

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

    const onSalaryHandler = (event) => {
        event.persist();
        setSalary(event.target.value);
    }

    const onDepartmentHandler = (event) => {
        event.persist();
        setDepartment(event.target.value);
    }

    const onProjectHandler = (event) => {
        event.persist();
        setProject(event.target.value);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault();

        var pattern = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;

        if (firstName === '') {
            setFirstNameError(true);
        }
        else if (lastName === '') {
            setLastNameError(true);
        }
        else if (age < 0) {
            setAgeError(true);
        }
        else if (!pattern.test(birthday)) {
            setBirthdayError(true);
        }
        else if (salary === '') {
            setSalaryError(true);
        }
        else if(department === '') {
            setDepartmentError(true);
        }
        else if(project === '') {
            setProjectError(true);
        }
        else {
            const newEmployee = {
                firstName,
                lastName,
                age,
                gender,
                birthday,
                salary,
                department,
                project
            }

            try {
                const res = await axios.put(`/api/employee/update/${id}`, newEmployee);
                if (res.status === 200) {
                    setRedirect(true);
                }
            } catch (error) {
                console.log(error.response);
            }
        }
    }

    useEffect(() => {
        const fetchEmployee = async () => {
            const res = await axios.get(`/api/employee/${id}`);
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setAge(res.data.age);
            setBirthday(res.data.birthday);
            setGender(res.data.gender);
            setSalary(res.data.salary);
            setDepartment(res.data.department.name);
            setProject(res.data.project.name);
        }
        
        fetchEmployee();
    }, [id]);

    if(redirect) {
        return <Redirect to="/" />
    }

    return (
        <Container fluid>
            <div style={centerForm}>
                <Form onSubmit={onSubmitHandler}>
                    <p className="h3 mb-5 text-center">Update Employee: {firstName} {lastName}</p>
                    <Form.Row>
                        <Form.Group className="mr-5">
                            <Form.Label>First Name: </Form.Label>
                            <Form.Control type="text" placeholder="First Name" isInvalid={firstNameError} value={firstName} onChange={onFirstNameHandler} />
                            <Form.Control.Feedback type="invalid">Please enter a First name</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Last Name: </Form.Label>
                            <Form.Control type="text" placeholder="Last Name" isInvalid={LastNameError} value={lastName} onChange={onLastNameHandler} />
                            <Form.Control.Feedback type="invalid">Please enter a Last name</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group className="mr-5">
                            <Form.Label>Age: </Form.Label>
                            <Form.Control type="Number" placeholder="Age" isInvalid={ageError} value={age} onChange={onAgeHandler} />
                            <Form.Control.Feedback type="invalid">Please enter a valid age</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Sex: </Form.Label>
                            <Form.Control as="select" value={gender} placeholder="Gender" onChange={onGenderHandler}>
                                <option>Male</option>
                                <option>Female</option>
                                <option>NonBinary</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group className="mr-5">
                            <Form.Label>Birthday: </Form.Label>
                            <Form.Control type="date" placeholder="Birthday" isInvalid={birthdayError} value={birthday} onChange={onBirthdayHandler} />
                            <Form.Control.Feedback type="invalid">Please enter a birthday in mm/dd/yyyy</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Salary: </Form.Label>
                            <Form.Control type="text" placeholder="salary" isInvalid={salaryError} value={salary} onChange={onSalaryHandler} />
                            <Form.Control.Feedback type="invalid">Please enter a salary</Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group colum='sm' className="mr-5">
                            <Form.Label>Department:</Form.Label>
                            <Form.Control type="text" placeholder="department" isInvalid={departmentError} value={department} onChange={onDepartmentHandler} />
                            <Form.Control.Feedback type="invalid">Please enter a Department</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group colum='sm' className="mr-5">
                            <Form.Label>Project:</Form.Label>
                            <Form.Control type="text" placeholder="project" isInvalid={projectError} value={project} onChange={onProjectHandler} />
                            <Form.Control.Feedback type="invalid">Please enter a Project</Form.Control.Feedback>
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