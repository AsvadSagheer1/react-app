import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, CardGroup, CardImg, CardSubtitle, CardTitle, Col, Container, Spinner } from 'reactstrap'

export default function Albums() {

    const [loading, setLoading] = useState(false)
    const [albumsList, setAlbumsList] = useState([])
    const navigate = useNavigate()

    useEffect(() => {

        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/albums", {
            method: "GET"
        })
            .then((data) => data.json())
            .then((data) => {
                setLoading(false);
                console.log(data)
                setAlbumsList(data)
            })
            .catch((error) => {
                setLoading(false);
                console.log(error)
            })


    }, [])

    const handleClick = (id) => {
        navigate("/albumDetails/" + id)
    }

    return (
        <Container fluid>
            <CardGroup>
                {albumsList.map((item, index) => (
                    <Col key={`${index}`} xs="12" sm="4">
                        {/* <Link to={`/albumDetails/${item.id}`}> */}
                        <Card onClick={() => handleClick(item.id)}>
                            <CardImg
                                alt="Card image cap"
                                src={`https://picsum.photos/318/1${index}`}
                                top
                                width="100%"
                            />
                            <CardBody>
                                <CardTitle tag="h5">
                                    {item.title}
                                </CardTitle>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    Card subtitle
                                </CardSubtitle>
                            </CardBody>
                        </Card>
                        {/* </Link> */}
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
