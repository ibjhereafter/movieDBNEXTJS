import React, { Fragment } from 'react';
import styles from '../../styles/Header.module.css';
import Link from 'next/link';


const Header = () => {
    return (
        <header className="container-fluid shadow mb-5">
            <nav className="navbar navbar-expand-lg container">
                <div className="container-fluid">
                    <Link href={`/`}>
                        <a className="navbar-brand me-auto">movieNerds</a>
                    </Link>

                    <button className={`${styles.bgButton} navbar-toggler`} type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse container-fluid" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className={`${styles.textColor} nav-link dropdown-toggle me-5`} id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Services
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item">Action</a></li>
                                    <li><a className="dropdown-item">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <a className={`${styles.textColor} nav-link dropdown-toggle me-5`} id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Industries
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item">Action</a></li>
                                    <li><a className="dropdown-item">Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className={`${styles.textColor} nav-link me-5`} tabIndex="-1"
                                   aria-disabled="true">Case Studies</a>
                            </li>


                            <li className="nav-item dropdown">
                                <a className={`${styles.textColor} nav-link dropdown-toggle me-5`} id="navbarDropdown" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Company
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" >Action</a></li>
                                    <li><a className="dropdown-item" >Another action</a></li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li><a className="dropdown-item">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className={`${styles.textColor} nav-link me-5`} tabIndex="-1"
                                   aria-disabled="true">Blog</a>
                            </li>

                            <li className="nav-item">
                                <a className={`${styles.academy} nav-link me-5`} tabIndex="-1"
                                   aria-disabled="true">Academy</a>
                            </li>

                            <li className="nav-item">
                                <button className={`${styles.menuButton} ${styles.textColor} nav-link btn btn-sm btn-primary me-5`} tabIndex="-1"
                                   aria-disabled="true">Let's Talk</button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
