import React from 'react';
import './header.css';
import {Link, link} from 'react-router-dom'; 5.7K (gzipped: 2.5K)

const Header = ()  => {
    return (
        <div className="header">
            <h3 className="header-title">
                <Link to='/'>
                     Game of Thrones DB
                </Link>
            </h3>
            <ul className="header-list">
                <li>
                    <Link to='/character/'>Character</Link>
                    </li>
                    <li>
                    <Link to='/houses/'>Houses</Link>
                    </li>
                    <li>
                        <Link to='/books/'>Books</Link>
                    </li>
                </ul>
              </div>
    ); 
};

export default Header;