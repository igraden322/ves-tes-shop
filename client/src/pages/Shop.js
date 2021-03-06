import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Context } from '..';
import CategoryBar from '../components/CategoryBar';
import Pages from '../components/Pages';
import ProductList from '../components/ProductList';
import TypeBar from '../components/TypeBar';
import { fetchCategories, fetchTypes, fetchProducts, fetchOneProduct } from '../http/productApi';

const Shop = observer(() => {
    const { product } = useContext(Context)

    useEffect(() => {
        fetchCategories().then(data => product.setCategories(data))
<<<<<<< HEAD
        fetchTypes().then(data => product.setTypes(data))
=======
        fetchTypes().then(data => product.setSizes(data))
>>>>>>> 1f8403f9cb12e2f81a5b2e8952fe5a40a6efd7a4
        fetchProducts(null, null, 1, 3).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchProducts(product.selectedType.id, product.selectedCategory.id, product.page, 2).then(data => {
            product.setProducts(data.rows)
            product.setTotalCount(data.count)
        })
    }, [product.page, product.selectedType, product.selectedCategory,])

    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <CategoryBar />
                    <Pages />
                    <ProductList />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop