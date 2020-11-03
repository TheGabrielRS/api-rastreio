//importa os módulos e aqruivos necessários
const request = require('supertest');
const server = require('../index');
// const sayTDD = require('../helloJest');


beforeAll(async () => {
    console.log('Iniciando TDD com jest!');
 });


 //o que será executado após todos os testes
afterAll(() => {
    //o server close irá encerrar nossa aplicação, evitando problemas da porta já estar em uso
//  server.close();
 console.log('servidor fechado');
 });


 describe('inicio dos testes', () => {
    //descrição do caso de testes
    test('acessa a rota da home e verifica o conteúdo que é exibido ', async () => {
       //qual a rota que ele deve acessar e qual requisição deve fazer
       const response = await request(server).get('/');
       //qual o status esperado 
       expect(response.status).toEqual(200);
       //se todos esses passos passarem, verifica o conteúdo exibido dentro desta rota
       expect(response.text).toContain('Hello App');
 
    });
 
    test('acessa a rota /encomenda/:codigo e então verifica se será apresentada o código HTTP correto:', async () => {
       const response = await request(server).get('/encomenda/QWE123BR');
       expect(response.status).toEqual(200);
    });
 
    test('acessa a rota /encomenda/status/:codigo/:status e então verifica se será apresentada o código HTTP correto', async () => {
       const response = await request(server).post('/encomenda/status/QWE123BR/5');
       expect(response.status).toEqual(500);
 
    });
 });