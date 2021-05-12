import React, { useContext, useState } from 'react';
import { Card, Col, Image, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Context } from '..';
import { fetchOneProduct } from '../http/productApi';
import BasketStore from '../store/BasketStore';
import { PRODUCT_ROUTE } from '../utils/consts';

const BasketItem = ({ product }) => {
    const history = useHistory()
    return (
        <Row>
            {product.id}
        </Row>
    )
}

export default BasketItem;