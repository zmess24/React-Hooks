import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Counter from './components/Counter'; 
import TodoList from './components/TodoList';

export default () => {
    return (
        <AppLayout>
            <Switch>
                <Route exact path="/" component={Counter}/>
                <Route exact path="/todoList" component={TodoList}/>
            </Switch>
        </AppLayout>
    )
};