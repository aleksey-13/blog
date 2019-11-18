import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import NewsApiServices  from './services/service';

import App from './containers/app/app';

const newsApi = new NewsApiServices();

const { getAllNews } = newsApi;

const app = (
    <BrowserRouter>
        <App getData={getAllNews} />
    </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));
