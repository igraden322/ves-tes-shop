import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import CategoryBar from '../components/CategoryBar';
import ProductList from '../components/ProductList';
import TypeBar from '../components/TypeBar';

const Shop = () => {
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <CategoryBar/>
                    <ProductList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop