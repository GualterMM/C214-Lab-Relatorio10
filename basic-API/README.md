# Projeto API em Node
Um projeto de API utilizando NodeJS, Express e MongoDB. A aplicação consiste em um simples CRUD de usuários. O projeto inclui teste unitários.

## 🔧 Pré-requisitos
1. Instalação do [NodeJS](https://nodejs.org/).
2. Uma ferramenta que possibilite o envio e recebimento de requisições HTTP, como um browser ou [Postman](https://www.postman.com/).
3. Uma ferramenta de terminal.

## 🚀 Instalando o projeto
Com o repositório clonado, navegue até a pasta da API:

```bash
cd basic-API
```

Instale as dependências do projeto usando o comando:

```
npm install
```

Para executar o projeto, utilize um dos seguintes comandos:

```
npm start
```

```
npm run start
```

Para executar a suite de testes, utilize um dos seguintes comandos:

```
npm test
```

```
npm run test
```

## 💻 Utilizando a API
**IMPORTANTE: O servidor é criado utilizando a porta 4000. Certifique-se que essa porta está liberada para uso no seu dispositivo.**  
Com o servidor rodando, a URL do mesmo é `http://localhost:4000`. Todas as rotas daqui em diante referidas **devem precedir a rota raiz**.  

## GET

### Buscar todos os usuários
* **URL**
  * `/user/list`

## PATCH

### Buscar usuário por e-mail
* **URL**
  * `/user/listByEmail/:email`

## POST

### Inserir usuário
* **URL**
  * `/user/create`

## PUT

### Atualizar usuário
* **URL**
  * `/user/update`

## DELETE

### Remover usuário
* **URL**
  * `/carro/delete/:email`
