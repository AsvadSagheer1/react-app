import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Card, CardBody, CardGroup, CardImg, CardSubtitle, CardTitle, Col, Container, Spinner } from 'reactstrap'


export default function AlbumDetails() {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [photoList, setPhotoList] = useState([])


    useEffect(() => {

        setLoading(true)
        fetch("https://jsonplaceholder.typicode.com/photos?albumId=" + id, {
            method: "GET"
        })
            .then((data) => data.json())
            .then((data) => {
                setLoading(false);
                console.log(data)
                setPhotoList(data)
            })
            .catch((error) => {
                setLoading(false);
                console.log(error)
            })


    }, [])
    return (
        <Container fluid>
            <CardGroup>
                {photoList.map((item, index) => (
                    <Col key={`${index}`} xs="12" sm="4">
                        <Card>
                            <CardImg
                                alt="Card image cap"
                                src={item.thumbnailUrl}
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
                                    {item.id}
                                </CardSubtitle>
                            </CardBody>
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
