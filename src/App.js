import { useState } from 'react';
import './App.css';
import { data } from './data.js'
import { Container, Form, InputGroup, Table } from 'react-bootstrap';

function App() {
  const [result, setresult] = useState('');
  return (
    <>
      <Container>
        <Form>
          <InputGroup className='my-3'><Form.Control onChange={(e) => setresult(e.target.value)} placeholder='search name' /></InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {data?.filter((val) => {
              return result.toLowerCase() === ''
                ? val
                : val.first_name.toLowerCase().includes(result);
            }).map((val, ind) => (
              <tr key={ind}>
                <td>{val.first_name}</td>
                <td>{val.last_name}</td>
                <td>{val.email}</td>
                <td>{val.gender}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default App;
