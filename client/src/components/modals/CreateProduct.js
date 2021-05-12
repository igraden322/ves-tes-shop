import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react'
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap';
import { Context } from '../..';
import { createProducts, fetchCategories, fetchProducts, fetchTypes } from '../../http/productApi';

const CreateProduct = observer(({ show, onHide }) => {
    const { product } = useContext(Context);
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [category, setCategory] = useState(null)
<<<<<<< HEAD
    const [type, setType] = useState(null)
=======
    const [size, setSize] = useState(null)
>>>>>>> 1f8403f9cb12e2f81a5b2e8952fe5a40a6efd7a4
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchCategories().then(data => product.setCategories(data))
<<<<<<< HEAD
        fetchTypes().then(data => product.setTypes(data))
=======
        fetchTypes().then(data => product.setSizes(data))
>>>>>>> 1f8403f9cb12e2f81a5b2e8952fe5a40a6efd7a4
    }, [])

    const addInfo = () => {
        setInfo([...info, { title: '', description: '', number: Date.now() }])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? { ...i, [key]: value } : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addProduct = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${ price }`)
        formData.append('img', file)
        formData.append('categoryId', product.selectedCategory.id)
<<<<<<< HEAD
        formData.append('typeId', product.selectedType.id)
=======
        formData.append('sizeId', product.selectedType.id)
>>>>>>> 1f8403f9cb12e2f81a5b2e8952fe5a40a6efd7a4
        formData.append('info', JSON.stringify(info))
        createProducts(formData).then(data => onHide())
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
                        <Dropdown.Toggle>{product.selectedCategory.name || 'Выберите категорию'}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {product.categories.map(category =>
                                <Dropdown.Item key={category.id} onClick={() => product.setSelectedCategory(category)}>
                                    {category.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{product.selectedType.name || 'Выберите тип'}</Dropdown.Toggle>
                        <Dropdown.Menu>
<<<<<<< HEAD
                            {product.types.map(type =>
                                <Dropdown.Item key={type.id} onClick={() => product.setSelectedType(type)}>
                                    {type.name}
=======
                            {product.sizes.map(size =>
                                <Dropdown.Item key={size.id} onClick={() => product.setSelectedType(size)}>
                                    {size.name}
>>>>>>> 1f8403f9cb12e2f81a5b2e8952fe5a40a6efd7a4
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control placeholder="Введите название товара.." value={name} onChange={e => setName(e.target.value)} className="mt-3" />
                    <Form.Control placeholder="Введите стоимость товара.." value={price} onChange={e => setPrice(Number(e.target.value))} type='number' className="mt-3" />
                    <Form.Control type='file' onChange={selectFile} className="mt-3" />
                    <hr />
                    <Button variant={'outline-dark'} onClick={addInfo}>
                        Добавить характеристику
                    </Button>
                    {info.map(i =>
                        <Row className='mt-4' key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Введите название.."
                                />
                            </Col>

                            <Col md={4}>
                                <Form.Control
                                    value={i.description}
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
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
                <Button variant="outline-success" onClick={addProduct}>Добавить</Button>
            </Modal.Footer>
        </Modal>
    )
})

export default CreateProduct;