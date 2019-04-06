import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Switch, Route} from 'react-router';
import './App.css';

// import ItemList from "./containers/ItemList/ItemList";
import {connect} from "react-redux";
import ItemSortForm from "./containers/ItemSortForm/ItemSortForm";
import ItemDetail from "./containers/ItemDetail/ItemDetail";
import Layout from "./components/Layout/Layout";
import Logout from "./components/Logout/Logout";
import Login from "./components/Login/Login";
import {tokenLogin} from "./store/actions/token-login";




class App extends Component {
    componentDidMount() {
        this.props.tokenLogin();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route path="/login" component={Login}/>
                            <Route path="/logout" component={Logout}/>

                            <Route path="/items/:id" component={ItemDetail}/>
                            <Route path="/" component={ItemSortForm}/>


                        </Switch>
                    </Layout>
                </BrowserRouter>
            </div>
        );
    }
}


const mapStateToProps = state => state.app;
const mapDispatchToProps = dispatch => ({
    tokenLogin: () => dispatch(tokenLogin())
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
