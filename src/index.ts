import 'reflect-metadata';
import * as bodyParser from 'body-parser';
import * as express from 'express';

import { InversifyExpressServer, getRouteInfo } from 'inversify-express-utils';
import * as prettyjson from 'prettyjson';

import { container } from './ioc/ioc';

// Force discovery of any injectables in the application
import './ioc/loader';

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
   app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({ extended: true }));
});

const PORT = 1337;
const app = server.build();
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
   console.log(prettyjson.render(getRouteInfo(container)));
});