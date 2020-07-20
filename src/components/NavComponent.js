import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
export const Nav = () => {
    return (
        <Fragment>
            <ul role="nav">
                <li><Link to="/client">Client Side</Link></li>
                <li><Link to="/server">Server Side</Link></li>
                <li><Link to="/auth">Go to Checkout</Link></li>
            </ul>
        </Fragment>
    )
}