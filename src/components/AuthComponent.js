import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'

export const Auth = () => (
    <Fragment>
        <h3>Step 1 <span role="img" aria-label="lock">🔒</span></h3>
        <p>Auth component</p>
        <Link to='/checkout'>Continue</Link>
    </Fragment>
)