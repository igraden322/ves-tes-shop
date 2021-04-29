import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'

const ProductPage = () => {
    const product = { id: 1, name: "Свитшот", price: 1750, img: "../../../server/static/9c35ffcc-3f30-416e-b2f3-0c4dbad789ea.jpg", category: 'Свитшоты' };
    const description = [
        { id: 1, title: 'Цвет', description: 'Серый' },
        { id: 2, title: 'Материал', description: 'Хлопок 100%' },
        { id: 3, title: 'Страна-производитель', description: 'Россия' },
        { id: 4, title: 'Сезон', description: 'Мульти' },
        { id: 5, title: 'Узор', description: 'Нет' }
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={6}>
                    <Image width={600} height={650} src={product.img} />
                </Col>
                <Col md={6}>
                    <Card className="d-flex pl-3 pr-3 pt-3 flex-column jusyify-content-around" style={{ width: 375, height: 950, border: '3px solid lightgray', borderRadius: '4px', margin: 'auto' }}>
                        <h2>{product.name}</h2>
                        <h4>{product.category}</h4>
                        <h4>
                            {product.price} ₽
                        </h4>
                        <Button variant={"outline-dark"}>
                            Добавить в корзину
                        </Button>
                        <h3>О товаре</h3>
                        {description.map((info, index) =>
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