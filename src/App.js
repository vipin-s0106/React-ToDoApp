import React from 'react';
import './App.css';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//importing all the component
import Greet from './component/Greet';
import MethodComponent from './component/MethodComponent';
import EventBinding from './component/EventBinding';
import ParentComponent from './component/ParentComponent';
import ConditionalComponent from './component/ConditionalComponent';
import ListComponent from './component/ListComponent';
import FormComponent from './component/FormComponent';
import LifeCycleComponent from './component/LifeCycleComponent';
import ParentPureComponent from './component/ParentPureComponent';
import RefDemo from './component/RefDemo';
import PortalDemo from './component/PortalDemo';
import Hero from './component/Hero';
import ErrorBoundry from './component/ErrorBoundry';
import ClickHigherOrderComponent from './component/ClickHigherOrderComponent';
import HoverHigherOrderComponent from './component/HoverHigherOrderComponent';
import ContextComponent from './component/ContextComponent';
import UserComponent from './component/UserComponent';
import ProductComponent from './component/ProductComponent';
import Dashboard from './component/Dashboard';


function App() {
  return (
    // <div className="App">
    //   <Greet name="Vipin Sharma">
    //     <p>This is children props</p>
    //   </Greet>
    //   <MethodComponent name="Vipin" />
    //   <hr />
    //   <EventBinding/>
    //   <hr />
    //   <ParentComponent />
    //   <hr />
    //   <ConditionalComponent />
    //   <hr />
    //   <ListComponent />
    //   <hr/>
    // </div>
    <Router>
      <div>
        <nav>
          <ul className="navheader">
            <li>
              <Link className="nav_link" to="/">Greet</Link>
            </li>
            <li>
              <Link className="nav_link" to="/methodcomponent">MethodComponent</Link>
            </li>
            <li>
              <Link className="nav_link" to="/eventbinding">EventBinding</Link>
            </li>
            <li>
              <Link className="nav_link" to="/parentchild">ParentChild</Link>
            </li>
            <li>
              <Link className="nav_link" to="/conditional">ConditionalComponent</Link>
            </li>
            <li>
              <Link className="nav_link" to="/persons">PerosnList</Link>
            </li>
            <li>
              <Link className="nav_link" to="/forms">FormHandling</Link>
            </li>
            <li>
              <Link className="nav_link" to="/lifecycle">Lifecycle</Link>
            </li>
            <li>
              <Link className="nav_link" to="/pure">PureComponent</Link>
            </li>
            <li>
              <Link className="nav_link" to="/ref">RefComponent</Link>
            </li>
            <li>
              <Link className="nav_link" to="/portaldemo">PortalDemo</Link>
            </li>
            <li>
              <Link className="nav_link" to="/errorboundry">ErrorBoundry</Link>
            </li>
            <li>
              <Link className="nav_link" to="/highorder">HigherOrder</Link>
            </li>
            <li>
              <Link className="nav_link" to="/context">ContextAPI</Link>
            </li>
            <li>
              <Link className="nav_link" to="/userapi">User API</Link>
            </li>
            <li>
              <Link className="nav_link" to="/products">Product API</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="container">
          <Switch>
            <Route path="/methodcomponent">
              <MethodComponent name="Vipin" />
            </Route>
            <Route path="/eventbinding">
              <EventBinding/>
            </Route>
            <Route path="/parentchild">
              <ParentComponent />
            </Route>
            <Route path="/conditional">
              <ConditionalComponent />
            </Route>
            <Route path="/persons">
              <ListComponent />
            </Route>
            <Route path="/forms">
              <FormComponent />
            </Route>
            <Route path="/lifecycle">
              <LifeCycleComponent />
            </Route>
            <Route path="/ref">
              <RefDemo />
            </Route>
            <Route path="/portaldemo">
              <PortalDemo />
            </Route>
            <Route path="/userapi">
              <UserComponent />
            </Route>
            <Route path="/context">
              <ContextComponent />
            </Route>
            <Route path="/products">
              <ProductComponent />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/highorder">
              <ClickHigherOrderComponent name="vipin" />
              <HoverHigherOrderComponent name="vipin" />            
            </Route>
            <Route path="/errorboundry">
              <ErrorBoundry>
                <Hero heroName="Batman" />
                <Hero heroName="Superman" />
                <Hero heroName="joker" />
              </ErrorBoundry>
            </Route>
            <Route path="/pure">
              <ParentPureComponent />
            </Route>
            <Route path="/">
              <Greet name="Vipin Sharma">
                <p>This is children props</p>
              </Greet>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
