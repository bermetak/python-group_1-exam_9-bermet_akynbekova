import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import './App.css';

import ItemList from "./containers/ItemList/ItemList";
import {connect} from "react-redux";
import ItemSortForm from "./containers/ItemSortForm/ItemSortForm";




class App extends Component {

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    {/*<Layout>*/}
                        <Switch>

                            <Route path="/" component={ItemSortForm}/>

                        </Switch>
                    {/*</Layout>*/}
                </BrowserRouter>
            </div>
        );
    }
}


const mapStateToProps = state => state.app;
const mapDispatchToProps = dispatch => ({

});


export default connect(mapStateToProps, mapDispatchToProps)(App);
