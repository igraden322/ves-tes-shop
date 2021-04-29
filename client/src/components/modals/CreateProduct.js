import React, { useContext, useState } from 'react'
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap';
import { Context } from '../..';

const CreateProduct = ({ show, onHide }) => {
    const { product } = useContext(Context);
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить товар
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выбирете категорию</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product.categories.map(category =>
                                <Dropdown.Item key={category.id}>
                                    {category.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>Выбирете тип</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product.sizes.map(size =>
                                <Dropdown.Item key={size.id}>
                                    {size.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control placeholder="Введите название товара.." className="mt-3" />
                    <Form.Control placeholder="Введите стоимость товара.." type='number' className="mt-3" />
                    <Form.Control type='file' className="mt-3" />
                    <hr />
                    <Button variant={'outline-dark'} onClick={addInfo}>
                        Добавить характеристику
                    </Button>
                    {info.map(i =>
                        <Row className='mt-4' key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Введите название.."
                                />
                            </Col>

                            <Col md={4}>
                                <Form.Control
                                    placeholder="Введите описание.."
                                />
                            </Col>
                            <Col md={4}>
                                <Button variant={'outline-danger'} onClick={() => removeInfo(i.number)}>Удалить</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={onHide}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CreateProduct;