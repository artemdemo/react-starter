import path from 'path';
import express, { Request, Response, NextFunction } from 'express';
import Boom from 'boom';
import _ from 'lodash';
import loggerCreator from './services/logger';
import apiController from './controllers/apiController';

const logger = loggerCreator('server.js');

const app = express();

const isDevelopment = app.get('env') === 'development';
const publicPath = '/';
const buildFolderPath = '../../app/build';

app.disable('x-powered-by');

app.use((req: Request, res: Response, next: NextFunction) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  if (process.env.NODE_ENV === 'development') {
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
  next();
});

app.use(
  publicPath,
  express.static(path.resolve(__dirname, `${buildFolderPath}/`), {
    setHeaders: (res: Response, path) => {
      if (path.includes('index.html')) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      }
    },
  }),
);

app.get(`${publicPath}api/publicConfig`, apiController.publicConfigs);
app.get(`${publicPath}api/campaigns`, apiController.campaigns);
app.get(`${publicPath}health`, apiController.health);
app.get(`${publicPath}*`, (req: Request, res: Response, next: NextFunction) => {
  if (req.url === '/' || req.url.startsWith(publicPath)) {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.sendFile(path.resolve(__dirname, `${buildFolderPath}/index.html`));
  } else {
    next();
  }
});

app.use((err: Boom, req: Request, res: Response, next: NextFunction) => {
  logger.error('An unhandled error has occurred');
  logger(err);

  const statusCode = _.get(err, 'status', 500);
  const boomErr = !err.isBoom ? Boom.boomify(err, { statusCode }) : err;

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
  logger(`Server listening on port ${port}`);
});

process.on('uncaughtException', (err) => {
  logger.error('Uncaught exception, logged by process event listener');
  logger(err);
});
