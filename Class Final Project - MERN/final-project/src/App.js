import React, {Component} from 'react';
import Navbar from './components/navbar';
import UserNav from './components/usernav';
import Home from './components/home';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Footer from './components/footer';
import Signup from './components/signup';
import BizSignup from './components/bizSignup';
import ProtectedRoute from "./components/common/protectedRoute";
import CreateCard from './components/createCard';
import MyCards from './components/mycards';
import userService from './services/userService';
import Logout from './components/logout'
import About from './components/about';
import EditCard from './components/editcard';
import BusinessCards from './components/businessCards';
import FavoritePage from './components/favoritePage';

class App extends Component {
  state = {   }
  componentDidMount(){
    const user = userService.getCurrentUser();
    this.setState({ user })
  }

  render(){

    const {user} = this.state;
  return (
    <React.Fragment>
    <header>
    <ToastContainer />
<Navbar user={user} />
<UserNav user={user} />
    </header>
    <main className="minh-900">
      <Switch>
      <ProtectedRoute path="/my-cards/edit/:id" component={EditCard} biz={true} exact />
      <ProtectedRoute path="/create-card" component={CreateCard} biz={true} />
      <ProtectedRoute path="/my-cards" component={MyCards} biz={true} />
      <ProtectedRoute path="/favorites" component={FavoritePage} />
      <ProtectedRoute path="/business-cards" component={BusinessCards} />
      <Route path="/about" component={About} />
      <Route path="/logout" component={Logout} />
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={Signup} />
      <Route path="/biz-Signup" component={BizSignup} />
      </Switch>
    </main>
    <footer>
      <Footer user={user} />
    </footer>
    </React.Fragment>
  );
}
}

export default App;
