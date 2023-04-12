import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";

import './index.css';

import App from './App.jsx';

const root = createRoot(document.getElementById('root'));

root.render(
    <Router>
        <App/>
    </Router>,
)