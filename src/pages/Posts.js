import React, { useEffect, useState } from 'react'
import { Card, CardBody, CardFooter, CardGroup, CardHeader, CardText, CardTitle, Col, Container, Spinner } from 'reactstrap'


export default function Posts() {
    const [loading, setLoading] = useState(false)
    const [postsList, setPostsList] = useState([])


    useEffect(() => {

        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((data) => {
                setLoading(false);
                console.log(data)
                setPostsList(data)
            })
            .catch((error) => {
                setLoading(false);
                console.log(error)
            })


    }, [])
    return (
        <Container>
            <CardGroup>
                {postsList.map((item, index) => (
                    <Col key={`${index}`} xs="12" sm="4">
                        <Card
                            className="my-2"
                            style={{
                                width: '18rem'
                            }}
                        >
                            <CardBody>
                                <CardTitle tag="h5">
                                    {item.title}
                                </CardTitle>
                                <CardText>
                                    {item.body}
                                </CardText>
                            </CardBody>
                            <CardFooter>
                                {item.id}
                            </CardFooter>
                        </Card>
                    </Col>
                ))}
                <div className='d-flex align-self-center'>
                    {loading ? <Spinner
                        className="m-5"
                        color="primary"
                    >
                        Loading...
                    </Spinner>
                        : null}
                </div>
            </CardGroup>
        </Container >
    )
}
