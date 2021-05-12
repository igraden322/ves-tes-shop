import React, { useContext, useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { fetchOneProduct } from '../http/productApi'
import { addRecord, getRecords } from '../http/basketProductApi'
import { Context } from '..'

const ProductPage = () => {
    const { user, basket } = useContext(Context);
    const [product, setProduct] = useState({ info: [] })
    const { id } = useParams()
    const click = async () => {
        try {
            if (user.isAuth) {
                let productId = product.id;
                let basketId = Number.parseInt(localStorage.getItem('basketId'));
                let data = addRecord({ productId, basketId })
                
                alert('Товар ' + product.name + ' добавлен в корзину')
            } else {
                alert('Для добавления товара в корзину необходимо авторизоватсья')
            }
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    useEffect(() => {
        fetchOneProduct(id).then(data => setProduct(data))
    }, [])


    return (
        <Container className="mt-3">
            <Row>
                <Col md={6}>
                    <Image width={600} height={650} src={process.env.REACT_APP_API_URL + product.img} />
                </Col>
                <Col md={6}>
                    <Card className="d-flex pl-3 pr-3 pt-3 flex-column jusyify-content-around" style={{ width: 375, height: 950, border: '3px solid lightgray', borderRadius: '4px', margin: 'auto' }}>
                        <h2>{product.name}</h2>
                        <h4>{product.category}</h4>
                        <h4>
                            {product.price} ₽
                        </h4>
                        <Button variant={"outline-dark"} onClick={click}>
                            Добавить в корзину
                        </Button>
                        <h3>О товаре</h3>
                        {product.info.map((info, index) =>
                            <Row key={info.id} className="d-flex flex-column jusyify-content-around" style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 7, borderRadius: 4 }}>
                                {info.title}:   {info.description}
                            </Row>)}
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductPage