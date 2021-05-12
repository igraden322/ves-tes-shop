import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react'
import { getRecords } from '../http/basketProductApi'
import { Context } from '../index';
import { Card, ListGroup, Row } from 'react-bootstrap';
import BasketItem from '../components/BasketItem';
import ProductItem from '../components/ProductItem';
import { fetchOneProduct } from '../http/productApi';
import BasketList from '../components/BasketList';

const Basket = () => {
    const { basket } = useContext(Context)
    
    return (
        <Row className="d-flex">
            <BasketList />
        </Row>
    );
};

export default Basket