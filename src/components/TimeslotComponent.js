import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export const TimeSlot = () => (
    <Fragment>
        <h3>Step 3 <span role="img" aria-label="delivery">🚛</span></h3>
        <p>TimeSlot component</p>
        <Link to='/payment'>Continue</Link>
    </Fragment>
)