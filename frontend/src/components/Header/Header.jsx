import './Header.css'
import {Container, Row, Button} from 'reactstrap'
import {Link, NavLink} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { useEffect, useRef } from 'react'
const nav_links=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/about',
        display:'About'
    },
    {
        path:'/tours',
        display:'Tours'
    },
]
const Header = () => {
    const headerRef= useRef(null);
    const stickyHeaderFunc=()=>{
        window.addEventListener('scroll',()=>{
            if(document.body.scrollTop>80||document.documentElement.scrollTop>80 ){
                headerRef.current.classList.add('sticky_header')
            }else{
                headerRef.current.classList.remove('sticky_header')
            }
        })
    }
    useEffect(()=>{
        stickyHeaderFunc();
        return window.removeEventListener('scroll',stickyHeaderFunc)
    })
  return (
    <header className='header' ref={headerRef}>
        <Container>
            <Row>
                <div className="nav_wrapper d-flex align-items-center justify-content-between">
                    {/* ========== Logo start =========== */}
                    <div className="logo">
                        <img src={logo} alt="Website logo" />
                    </div>
                     {/* ========== Logo end =========== */}

                    {/* ========== Menu start =========== */}
                    <div className="navigation">
                        <ul className='menu d-flex align-items-center gap-5'>
                            {
                                nav_links.map((item,index)=>(
                                    <li key={index} className='nav_item'>
                                        <NavLink to={item.path}>{item.display}</NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    {/* ========== Menu end =========== */}
                    <div className="nav_right d-flex align-items-center gap-4">
                        <div className="nav_btns d-flex align-items-center gap-4">
                            <Button className='btn secondary_btn'>
                                <Link to='/login'>Login</Link>
                            </Button>
                            <Button className='btn primary_btn' ><Link to='/register'>Register</Link></Button>
                        </div>
                        <span className='mobile_menu'>
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Row>
        </Container>
    </header>
  )
}

export default Header