# TRC3 - Atividade1

## Aplicando conceitos de Backend

Essa API fornece informações sobre a entidade Disciplinas. Com ela é possível visualizar as disciplinas cadastradas, cadastrar mais disciplinas, atualizar disciplinas já cadastradas e deletar disciplinas. 

### Recursos utilizados

- NodeJS 12.19.0
- Yarn 1.22.5
- Express 4.17.1
- MongoDB 
- Mongoose 5.10.9
- Docker 19.03.13
- Sucrase 3.16.0
- Nodemon 2.0.5

### Instalando dependências e requisitos

Para instalar o nodejs:
- **curl -sL https://deb.nodesource.com/setup_12.x | sudo bash -**
- **sudo apt install nodejs**

Para instalar o yarn e iniciar projeto node:
- **sudo apt install yarn**
- **yarn init**

Para instalar o express:
- **yarn add express**

Para instalar nodemon e sucrase (apenas para dev):
- **yarn add nodemon sucrase -D**

Para instalar mongoose e mongoose-auto-increment:
- **yarn add mongoose**
- **yarn add mongoose-auto-increment**

Para baixar a imagem e instanciar o container com o MongoDB:
- **docker run --name trc3 -p 27017:27017 -d -t mongo**

### Executando 

Iniciar o container:
- **docker start trc3**

Iniciar servidor: 
- **yarn dev**

Dessa maneira, é possível acessar a aplicação em **http://localhost:3000/**. Além disso, graças ao nodemon, as atualizações são realizadas automaticamente, sem necessidade de derrubar o servidor toda vez. 

Para simular o cliente, foi utlizado o Insomnia, como mostra o arquivo Insomnia_2020-10-22, com as requisições possíveis de serem realizadas. 

### Rotas

- **GET:** http://localhost:3000/disciplinas
- **POST:** http://localhost:3000/disciplinas
- **PUT:** http://localhost:3000/disciplinas/{id}
- **DELETE:** http://localhost:3000/disciplinas/{id}