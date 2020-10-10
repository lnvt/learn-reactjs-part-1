import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
// import Jsx from'./JSX/Jsx';
//import HandleEvent from './HandleEvent/HandleEvent';
//import State from './State/State';
//import LifeCycle from './LifeCycle/Ref';
// import Route from './Route/components/AppRoute';

// import Project1 from './Project1/AppProject1/AppProject1';

import Giaotiep from './GiaotiepComponent/ComponentCha';
ReactDOM.render(
    <Giaotiep />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
