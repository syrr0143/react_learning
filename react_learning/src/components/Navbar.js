import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react';
import btncss from '../css/button.module.css'

function ColorSchemesExample(props) {
    const { details } = props;
    // console.log(details.name, details.last)
    let [value, setvalue] = useState(10);
    let [dark, setdark] = useState(false);
    console.log(dark)
    useEffect(() => {
        const body = document.querySelector('body');
        if (dark) {
            body.style.backgroundColor = 'black'
            body.style.color = 'white'
        } else {
            body.style.backgroundColor = 'white'
            body.style.color = 'black'
        }
    }, [dark])

    const navbar = () => {
        setvalue(value++);
        console.log(value)
    }
    const add = (a, b) => {
        setvalue(value++);
        console.log(value)
    }
    return (
        <>

            <Navbar className='navbar' data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home"
                        onClick={navbar}
                    >Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"
                            onClick={() => { add(20, 30) }}
                        >Home {value}</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#mode" onClick={() => { setdark(!dark) }}><button className={btncss.warning}>mode</button>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default ColorSchemesExample;

