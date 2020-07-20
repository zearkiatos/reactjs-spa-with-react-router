import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const ThankYou = () => (
    <Fragment>
        <h3>Step 5 <span role="img" aria-label="thanks">😄</span></h3>
        <p>Thank You component</p>
        <Link to='/'>Finally</Link>
    </Fragment>
)