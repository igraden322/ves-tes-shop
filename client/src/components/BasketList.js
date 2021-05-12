import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react'
import { Context } from '../index';
import { Card, ListGroup, Row } from 'react-bootstrap';
import BasketItem from '../components/BasketItem';
import ProductItem from '../components/ProductItem';
import { fetchOneProduct } from '../http/productApi';
import { getRecord } from '../http/basketProductApi';

const BasketList = () => {
    const { basket } = useContext(Context)
    const [product, setProduct] = useState([]);

    const getProduct = (id) => {
        let func = getRecord(id).then(data => setProduct(data))
        return product;
    }

    return (
        <Row className="d-flex">
            {basket.list.map(basket => {
                console.log(getProduct(basket.productId));
                <BasketItem key={basket.createdAt} product={getProduct(basket.productId)} />
            })}
        </Row>
    );
}



export default BasketList