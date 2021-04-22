import React from 'react'
import { Card, Container, Form, Button, Row} from 'react-bootstrap'
import { useLocation, NavLink } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите email.."
                    />

                    <Form.Control
                        className="mt-3"
                        placeholder="Введите пароль.."
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink className="p-0" style={{ display: 'inline' }} to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink className="p-0" style={{ display: 'inline' }} to={LOGIN_ROUTE}>Авторизуйтесь!</NavLink>
                            </div>
                        }
                        <Button variant={"outline-success"}>
                            {isLogin ? 'Войти' : 'Зарегистрироваться'}
                        </Button>
                    </Row>

                </Form>
            </Card>

        </Container>
    )
}

export default Auth