import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const Payment = () => (
    <Fragment>
        <h3>Step 4 <span role="img" aria-label="payment">💳</span></h3>
        <p>Payment component</p>
        <Link to='/thanks'>Continue</Link>
    </Fragment>
)