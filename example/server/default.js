import http from 'http';
import { Z_BEST_COMPRESSION } from 'zlib';
import express from 'express';
import compression from 'compression';
import opener from 'opener';

const app = express();
const server = http.createServer(app);
const isHeroku = 'HEROKU_APP_NAME' in process.env;

app.use(compression({ level: Z_BEST_COMPRESSION }));
app.use(express.static(`${__dirname}/example`));

const port = process.env.PORT || 5000;
server.listen(port);
!isHeroku && opener(`http://localhost:${port}`);
