import React, { Fragment } from 'react'
import { Nav } from './NavComponent'
export const Home = (props) => {
    return (
        <Fragment>
            <h1>React Router Example</h1>
            <Nav />
            <div>
                {props.children}
            </div>
        </Fragment>
    )
}