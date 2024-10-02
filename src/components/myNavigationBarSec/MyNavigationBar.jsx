import styles from './myNavigationBar.module.css'
import profile from '../../assets/sidebarImages/profile.jpg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Navbar } from 'react-bootstrap';

export default function MyNavigationBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleToggle = () => setShow(prevShow => !prevShow);
    return (
        <>
            <Navbar className='position-fixed top-0 start-0 end-0 d-block d-lg-none navbar navbar-light' expand={false} style={{zIndex:`2000`}}>
                <div className="container-fluid">
                    <Button className={styles.btnCanvas} onClick={handleToggle}>
                        ☰
                    </Button>

                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton onHide={handleClose}>
                            <Offcanvas.Title></Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className={`${styles.myFixedSidebar_handler}  px-4 py-5 position-relative w-auto`}>
                                <div className={`${styles.fixedContent_Info}`}>
                                    <div className={`${styles.profileImage}`}>
                                        <img src={profile} alt="profile-image" />
                                    </div>
                                    <div className={`${styles.profileName}`}>
                                        <h5>
                                            Mohamed Amged
                                        </h5>
                                    </div>
                                    <div className={`${styles.profileTitle}`}>
                                        <p>
                                            frontend Developer at valkii
                                        </p>
                                    </div>
                                    <div className={`${styles.profileMain_pages}`}>
                                        <ul>
                                            <li>
                                                <NavLink to={'/'}
                                                    className={({ isActive }) =>
                                                        isActive ? `nav-link ${styles.active_custom}`
                                                            : `nav-link ${styles.hover_effect}`
                                                    }
                                                >
                                                    Home
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'about'}
                                                    className={({ isActive }) =>
                                                        isActive ? `nav-link ${styles.active_custom}`
                                                            : `nav-link ${styles.hover_effect}`
                                                    }>
                                                    About
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'skills'}
                                                    className={({ isActive }) =>
                                                        isActive ? `nav-link ${styles.active_custom}`
                                                            : `nav-link ${styles.hover_effect}`
                                                    }>
                                                    Skills
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'experiance'}
                                                    className={({ isActive }) =>
                                                        isActive ? `nav-link ${styles.active_custom}`
                                                            : `nav-link ${styles.hover_effect}`
                                                    }>
                                                    Experiance
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink to={'work'}
                                                    className={({ isActive }) =>
                                                        isActive ? `nav-link ${styles.active_custom}`
                                                            : `nav-link ${styles.hover_effect}`
                                                    }>
                                                    Work
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>

            </Navbar>
            <div className={`${styles.myFixedSidebar_handler}  px-4 py-5 d-none d-lg-block`}>
                <div className={`${styles.fixedContent_Info}`}>
                    <div className={`${styles.profileImage}`}>
                        <img src={profile} alt="profile-image" />
                    </div>
                    <div className={`${styles.profileName}`}>
                        <h5>
                            Mohamed Amged
                        </h5>
                    </div>
                    <div className={`${styles.profileTitle}`}>
                        <p>
                            frontend Developer at valkii
                        </p>
                    </div>
                    <div className={`${styles.profileMain_pages}`}>
                        <ul>
                            <li>
                                <NavLink to={'/'}
                                    className={({ isActive }) =>
                                        isActive ? `nav-link ${styles.active_custom}`
                                            : `nav-link ${styles.hover_effect}`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'about'}
                                    className={({ isActive }) =>
                                        isActive ? `nav-link ${styles.active_custom}`
                                            : `nav-link ${styles.hover_effect}`
                                    }>
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'skills'}
                                    className={({ isActive }) =>
                                        isActive ? `nav-link ${styles.active_custom}`
                                            : `nav-link ${styles.hover_effect}`
                                    }>
                                    Skills
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'experiance'}
                                    className={({ isActive }) =>
                                        isActive ? `nav-link ${styles.active_custom}`
                                            : `nav-link ${styles.hover_effect}`
                                    }>
                                    Experiance
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'work'}
                                    className={({ isActive }) =>
                                        isActive ? `nav-link ${styles.active_custom}`
                                            : `nav-link ${styles.hover_effect}`
                                    }>
                                    Work
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
