import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App.jsx';
import '../dist/styles/style.sass';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
		<BrowserRouter>
			<App />
		</BrowserRouter>, document.getElementById('app'));
