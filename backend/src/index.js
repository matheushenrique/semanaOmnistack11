const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors());
app.use(express.json());
// app.get('/', (request,response) => {    
//     return response.json({
//         "teste": 100
//     });
// })
app.use(routes);
/*
* Rota / recurso
*/

/*
* Metodos HTTP
*
* GET: Buscar informação no backend
* POST: Criar informação no backend
* PUT: Alterar informação no backend
* DELETE: Deletar informação no backend
*/


/*
* Tipos de parametros
*
* Query params: Parametros enviados na rota (Filtros, paginação)
* Route params: Parametros utilizados para identificar recursos
* Request body: Corpo da requisicao, utilizado para criar ou alterar recurso
*/

/*
* Comunicacao com bancos
* Driver: SELECT * FROM users
* Query builder: table('users').select('*').where()
*/


app.listen(3333);
// app.listen(3333, "0.0.0.0", function() {
//     console.log("listen on 3333"); 
//   });