const logger = require('../services/logger')('apiController.js');
const Boom = require('boom');
const _ = require('lodash');

const publicConfigs = (req, res, next) => {
    try {
        res.json({});
    } catch (e) {
        logger(e);
        next(Boom.badImplementation('Error in publicConfig'));
    }
};

const health = (req, res) => {
    res.send('Aap is up and running.');
};

module.exports = {
    publicConfigs,
    health,
};
