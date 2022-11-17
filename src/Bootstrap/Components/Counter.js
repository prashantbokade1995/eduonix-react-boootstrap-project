// import React, {useState} from 'react'
import React from 'react'
import { Col, Container, Row,Card, Button } from 'react-bootstrap'

const Counter = () => {

    // const [state, setState ] = useState({
    //     Count:0
    // });
    // const incr = () => {
    //     setState(value {
    //         Count: state.Count + 1
    //     })
    // };
    // const decr = () => {
    //     setState(value {
    //         Count: state.Count - 1
    //     })
    // };
  return (
    <>
        <Container className= "mt-3">
            <Row>
                <Col xs={4}>
                    <Card className= "shadow-lg">
                        <Card.Body>
                            <p className='display-2'>state.Count</p>
                            <Button variant = "success" className= "m-1" >Incr</Button>
                            {/* <Button variant = "success" className= "m-1" onClick = {incr}>Incr</Button> */}
                            <Button variant = "warning" className= "m-1" >Decr</Button>
                            {/* <Button variant = "warning" className= "m-1" onClick = {decr}>Decr</Button> */}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Counter
