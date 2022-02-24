import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import { Card, Table } from 'react-bootstrap'
import { useState, useEffect } from 'react';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'




function CovidTracker() {
    const [india, setData] = useState([]);
    const [state, stateData1] = useState([]);
    const getCovidData = async () => {
        try {
            // const response = await fetch('https://disease.sh/v3/covid-19/all');
            const response = await fetch('https://data.covid19india.org/data.json');
            // const realData = await response.json();
            const stateData = await response.json();

            console.log(stateData.statewise[0]);

            setData(stateData.statewise[0])
            stateData1(stateData.statewise);

        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCovidData();
    }, [])
    return (

        <>

            <Container fluid>
                <Row className="header">
                    {/* NAVBAR CODE START FROM HERE */}

                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Container fluid>
                            <Navbar.Brand href="#">Covid19 Tracker india</Navbar.Brand>
                            <Navbar.Toggle aria-controls="navbarScroll" />
                            <Navbar.Collapse id="navbarScroll">
                                <Nav
                                    className="me-0 my-2 my-lg-0 navbar"
                                    style={{ maxHeight: 'auto', marginLeft: 'auto' }}
                                    navbarScroll
                                >
                                    <Nav.Link href="home" className="nav">Home</Nav.Link>
                                    <Nav.Link href="https://www.cowin.gov.in/#Search-Vaccination-Center" className="nav">Vaccination Center</Nav.Link>
                                    <Nav.Link href="https://www.cdc.gov/coronavirus/2019-ncov/global-covid-19/index.html" className="nav">Covid19 News</Nav.Link>
                                    <Nav.Link href="https://selfregistration.cowin.gov.in/" className="nav">Download Certificate</Nav.Link>
                                    <Nav.Link href="https://verify.cowin.gov.in/" className="nav">Verify certificate</Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <h1 className="effect"><span><span className="dot"></span></span>Live</h1>
                    <h1>Covid-19 Tracker India </h1>
                </Row>
                <Row xs={1} sm={2} md={3} className="g-4 main home">
                    <Col>
                        <Card className="country">
                            <Card.Body>
                                <p className="cardName"><span></span>COUNTRY</p>
                                <Card.Text>
                                    <h1>INDIA</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="recovered">
                            <Card.Body>
                                <p className="cardName"><span>TOTAL </span>RECOVERED</p>
                                <Card.Text>
                                    <h1>{india.recovered}</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="confirmed">
                            <Card.Body>
                                <p className="cardName"><span>TOTAL </span>CONFIRMED</p>
                                <Card.Text>
                                    <h1>{india.confirmed}</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="death">
                            <Card.Body>
                                <p className="cardName"><span>TOTAL </span>DEATH</p>
                                <Card.Text>
                                    <h1>{india.deaths}</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="active">
                            <Card.Body>
                                <p className="cardName"><span>TOTAL </span>ACTIVE</p>
                                <Card.Text>
                                    <h1>{india.active}</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="updated">
                            <Card.Body>
                                <p className="cardName"><span>LAST </span>UPDATE</p>
                                <Card.Text>
                                    <h1>{india.lastupdatedtime}</h1>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Container className="datatable">

                        {/* //Covid19 state table start from here */}
                        <h1>Covid19 Statewise Report </h1>


                        <Table striped bordered hover variant="dark" size="sm">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>STATE NAME</th>
                                    <th>TOTAL CONFIRMED</th>
                                    <th>TOTAL RECOVERED</th>
                                    <th>TOTAL DEATH</th>
                                    <th>TOTAL ACTIVE</th>
                                    <th>LAST UPDATE</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    state.map((curElement, index) => {

                                        if (index > 0) {
                                            return (
                                                <tr key={index} className="mainData">
                                                    <td>{index}</td>
                                                    <td>{curElement.state}</td>
                                                    <td>{curElement.confirmed}</td>
                                                    <td>{curElement.recovered}</td>
                                                    <td>{curElement.deaths}</td>
                                                    <td>{curElement.active}</td>
                                                    <td>{curElement.lastupdatedtime}</td>
                                                </tr>
                                            )
                                        }
                                    })


                                }


                            </tbody>
                        </Table>
                    </Container>

                </Row>
            </Container>
        </>



    )
}

export default CovidTracker;