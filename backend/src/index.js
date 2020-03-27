const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//Para requisições http usarem json
app.use(cors());
app.use(express.json());
app.use(routes);

//  Rotas / Recurso

// Métodos HTTP
// GET, POST, PUT, DELETE

/* 
    Tipos de Parametros:
        Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
        Route Params: Parametros utilizados para identificar recursos
        Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.listen(3333);