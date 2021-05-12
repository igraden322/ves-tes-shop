import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
<<<<<<< HEAD
import { ADMIN_ROUTE, BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
=======
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
>>>>>>> 1f8403f9cb12e2f81a5b2e8952fe5a40a6efd7a4
import { Button, Container } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('email');
        history.push(SHOP_ROUTE)
    }
<<<<<<< HEAD

=======
>>>>>>> 1f8403f9cb12e2f81a5b2e8952fe5a40a6efd7a4
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{ color: "whitesmoke" }} to={SHOP_ROUTE}>
                        VES TES
                    </NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{ color: "whitesmoke" }}>
                            <Button variant={"outline-light"} onClick={() => logOut()}>Выйти ({`${localStorage.getItem('email')}`})</Button>
                            <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)} className="ml-2">Панель администратора</Button>
<<<<<<< HEAD
                            <Button variant={"outline-light"} onClick={() => history.push(BASKET_ROUTE)} className="ml-2">Корзина</Button>
=======
>>>>>>> 1f8403f9cb12e2f81a5b2e8952fe5a40a6efd7a4
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{ color: "whitesmoke" }}>
                            <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
        </div>
    )
})

export default NavBar;