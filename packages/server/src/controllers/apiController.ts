import Boom from 'boom';
import _ from 'lodash';
import { Request, Response, NextFunction } from 'express';
import loggerCreator from '../services/logger';

const logger = loggerCreator('apiController.js');

const publicConfigs = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({});
  } catch (e) {
    logger(e);
    next(Boom.badImplementation('Error in publicConfig'));
  }
};

const campaigns = (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json([]);
  } catch (e) {
    logger(e);
    next(Boom.badImplementation('Error in publicConfig'));
  }
};

const health = (req: Request, res: Response) => {
  res.send('App is running.');
};

export default {
  publicConfigs,
  campaigns,
  health,
};
