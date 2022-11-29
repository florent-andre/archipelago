const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// TODO : see what is is and the real usage for us : source : https://itnext.io/lets-dockerize-a-nodejs-express-api-22700b4105e4
// const { log, ExpressAPILogMiddleware } = require('@rama41222/node-logger');

const config = {
    name: 'sample-express-app',
    port: 1234,
    host: '0.0.0.0',
};

const app = express();
//const logger = log({ console: true, file: false, label: config.name });

app.use(bodyParser.json());
app.use(cors());
//app.use(ExpressAPILogMiddleware(logger, { request: true }));

app.get('/', (req, res) => {
    //res.status(200).send('devapp/index.html');
    //__dirname is in app/devapp
    res.sendFile(__dirname +'/index.html');
});

// Update This depending the need of static files
//specific config for static files 
var options = {
  dotfiles: 'ignore',
  etag: false,
  extensions: ['jsonld'],
  index: false,
  //maxAge: '1d',
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set('x-timestamp', Date.now())
    res.set('link','<http://localhost:1234/apimocks/docs.jsonld>; rel="http://www.w3.org/ns/hydra/core#apiDocumentation"')
  }
}


// url cible pour l'exemple complet : http://localhost:1234/apimocks/docs.jsonld
app.use('/apimocks', express.static( __dirname+'/../exploration/apistatic', options))

app.use('/contexts/Entrypoint', express.static( __dirname+'/../exploration/apistatic/entrypoint.jsonld', options))


app.listen(config.port, config.host, (e)=> {
    if(e) {
        throw new Error('Internal Server Error');
    }
    //logger.info(`${config.name} running on ${config.host}:${config.port}`);
    console.info(`${config.name} running on ${config.host}:${config.port}`);
});