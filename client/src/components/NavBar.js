import React, { useContext } from 'react';
import { Context } from '..';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/esm/NavLink';
import { SHOP_ROUTE } from '../utils/consts';
import { Button, Container } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const { user } = useContext(Context)
    return (
        <div>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <NavLink style={{ color: "whitesmoke" }} to={SHOP_ROUTE}>
                            VES TES
                    </NavLink>
                        {user.isAuth ?
                            <Nav className="ml-auto" style={{ color: "whitesmoke" }}>
                                <Button variant={"outline-light"}>Выйти</Button>
                                <Button variant={"outline-light"} className="ml-2">Панель администратора</Button>
                            </Nav>
                            :
                            <Nav className="ml-auto" style={{ color: "whitesmoke" }}>
                                <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                            </Nav>
                        }
                    </Container>
                </Navbar>

            </>
        </div>
    )
})

export default NavBar;