/* eslint-disable no-console */

const path = require('path');
const express = require('express');
const Boom = require('boom');
const _ = require('lodash');
const logger = require('./services/logger')('server.js');
const apiController = require('./controllers/apiController');

const app = express();

const isDevelopment = app.get('env') === 'development';
const publicPath = '/';

app.disable('x-powered-by');

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    if (process.env.NODE_ENV === 'development') {
        res.setHeader('Access-Control-Allow-Origin', '*');
    }
    next();
});

app.use(publicPath, express.static(path.resolve(__dirname, '../build/'), {
    setHeaders: (res, path) => {
        if (path.includes('index.html')) {
            res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        }
    },
}));

app.get(`${publicPath}api/publicConfig`, apiController.publicConfigs);
app.get(`${publicPath}health`, apiController.health);
app.get('/*', (req, res, next) => {
    if (req.url === '/' || req.url.startsWith(publicPath)) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.sendFile(path.resolve(__dirname, '../build/index.html'));
    } else {
        next();
    }
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
    logger('An unhandled error has occurred', err);

    const statusCode = _.get(err, 'status', 500);
    const boomErr = !err.isBoom ? Boom.boomify(err, {statusCode}) : err;

    // hide error message for server errors in production
    if (!isDevelopment && boomErr.output.payload.statusCode >= 500) {
        boomErr.output.payload.message = boomErr.output.payload.error;
    }
    res.status(boomErr.output.statusCode).send(boomErr.output.payload);
});

const port = (() => {
    if (!isDevelopment) {
        return process.env.PORT || 8080;
    }
    return process.env.PORT || 3000;
})();
app.listen(port, () => {
    logger(`Portal (UI) server listening on port ${port}`);
});

process.on('uncaughtException', (err) => {
    logger('Uncaught exception, logged by process event listener', err);
});
