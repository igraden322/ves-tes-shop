import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react'
import { Context } from '../index';
import { Card, ListGroup, Row } from 'react-bootstrap';

const CategoryBar = observer(() => {
    const { product } = useContext(Context)
    return (
        <Row className="d-flex">
            {product.categories.map(category =>
                <Card
                    style={{cursor:"pointer"}}
                    key={category.id}
                    className="p-3"
                    onClick={() => product.setSelectedCategory(category)}
                    border={category.id === product.selectedCategory.id ? 'danger' : 'light'}
                >
                    {localStorage.setItem(category.id,category.name)}
                    {category.name}
                </Card>
            )}

        </Row>
    );
});

export default CategoryBar