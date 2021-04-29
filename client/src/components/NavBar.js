import React, { useContext } from 'react';
import { Context } from '../index';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { Button, Container } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router-dom'

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const history = useHistory()
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavLink style={{ color: "whitesmoke" }} to={SHOP_ROUTE}>
                        VES TES
                    </NavLink>
                    {user.isAuth ?
                        <Nav className="ml-auto" style={{ color: "whitesmoke" }}>
                            <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Выйти</Button>
                            <Button variant={"outline-light"} onClick={() => history.push(ADMIN_ROUTE)} className="ml-2">Панель администратора</Button>
                        </Nav>
                        :
                        <Nav className="ml-auto" style={{ color: "whitesmoke" }}>
                            <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                        </Nav>
                    }
                </Container>
            </Navbar>
        </div>
    )
})

export default NavBar;