import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Checkout = () => (
    <Fragment>
        <h3>Step 2 <span role="img" aria-label="card">🛒</span></h3>
        <p>Checkout component</p>
        <Link to='/timeslot'>Continue</Link>
    </Fragment>
)