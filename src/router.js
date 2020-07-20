import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Client } from './components/ClientComponent'
import { Server } from './components/ServerComponent'
import { Auth } from './components/AuthComponent'
import { Checkout } from './components/CheckoutComponent'
import { TimeSlot } from './components/TimeSlotComponent'
import { Payment } from './components/PaymentComponent'
import { ThankYou } from './components/ThankyouComponent'

export const Router = () => (
    <Switch>
        <Route exact path="/server" component={Server} />
        <Route exact path="/auth" component={Auth} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/timeslot" component={TimeSlot} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/thanks" component={ThankYou} />
        <Route exact path="/client" component={Client} />
    </Switch>
)