import React, { useContext, useState } from 'react'
import { Card, Container, Form, Button, Row } from 'react-bootstrap'
import { useLocation, NavLink, useHistory } from 'react-router-dom'
import { observer } from 'mobx-react-lite';
import { login, registration } from '../http/userApi'
<<<<<<< HEAD
import { getRecords } from '../http/basketProductApi'
import { addBasket, getBasket } from '../http/basketApi'
=======
>>>>>>> 1f8403f9cb12e2f81a5b2e8952fe5a40a6efd7a4
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { Context } from '../index';

const Auth = observer(() => {
<<<<<<< HEAD
    const { user, basket } = useContext(Context);
=======
    const { user } = useContext(Context);
>>>>>>> 1f8403f9cb12e2f81a5b2e8952fe5a40a6efd7a4
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
<<<<<<< HEAD
    const [userId, setUserId] = useState('');

=======
>>>>>>> 1f8403f9cb12e2f81a5b2e8952fe5a40a6efd7a4

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            localStorage.setItem('email', data.email)
<<<<<<< HEAD
            data = await getBasket(userId)
            localStorage.setItem('basketId', data.id)
            let func = getRecords(localStorage.getItem('basketId')).then((records) => {
                basket.setList(records);
            });
            basket.setUserId(userId)
            user.setUser(user)
            basket.setBasket(basket)
=======
            user.setUser(user)
>>>>>>> 1f8403f9cb12e2f81a5b2e8952fe5a40a6efd7a4
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? '??????????????????????' : '??????????????????????'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="?????????????? email.."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <Form.Control
                        className="mt-3"
                        placeholder="?????????????? ????????????.."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                ?????? ????????????????? <NavLink className="p-0" style={{ display: 'inline' }} to={REGISTRATION_ROUTE}>??????????????????????????????????!</NavLink>
                            </div>
                            :
                            <div>
                                ???????? ??????????????? <NavLink className="p-0" style={{ display: 'inline' }} to={LOGIN_ROUTE}>??????????????????????????!</NavLink>
                            </div>
                        }
                        <Button variant={"outline-success"} onClick={click}>
                            {isLogin ? '??????????' : '????????????????????????????????????'}
                        </Button>
                    </Row>

                </Form>
            </Card>

        </Container>
    )
})

export default Auth