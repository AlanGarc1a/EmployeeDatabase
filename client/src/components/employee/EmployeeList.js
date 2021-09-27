import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Employee from './Employee';
import axios from 'axios';

const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);

    const fetchEmployees = async () => {
        try {
            const res = await axios.get('/api/employee/');
            setEmployees(res.data);
        } catch(error) {
            console.log(error.response);
        }
    }

    useEffect(() => {
        fetchEmployees();
    },[]);

    return (
        <Container>
            <Row>
                {employees.map((employee, i) => {
                    return (
                        <div className="mt-5 col-xl-4 col-lg-6 col-md-6 col-sm-3 col-xs-12" key={i}>
                            <Employee
                                id={employee.id}
                                firstName={employee.firstName}
                                lastName={employee.lastName}
                                age={employee.age}
                                gender={employee.gender}
                                birthday={employee.birthday}
                            />
                        </div>
                    )
                })}
            </Row>
        </Container>
    )
}

export default EmployeeList;