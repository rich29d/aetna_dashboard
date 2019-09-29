# Backend

##Instalação
  Vá até a pasta backend e rode o comando para baixar as dependências
  
  ```
    npm i
  ```

##Database
  Incluir informações necessárias para acesso ao banco no arquivo .env,
  no meu caso não usei uma senha no meu banco.
  
  ```
    DB_USERNAME=root
  ```
  ```
    DB_PASSWORD=
  ```
  ```
    DB_SCHEMA=aetna
  ```
  ```
    DB_HOST=localhost
  ```

  Verifique se seu computador tem o [sequelize](https://sequelize.org/) instalado globalmente, você pode fazer isso com essa linha de comando:

  ```
    sequelize --version
  ```
  Isso deverá retornar a versão do sequelize se ele estiver instalado.

  Caso você tenha o [sequelize](https://sequelize.org/) instalado globalmente na sua máquina use o camando abaixo para popular o banco:
  
  ```
    sequelize db:migrate
  ```

  e depois

  ```
    sequelize db:seed:all
  ```

  Mas se não tiver use os comandos abaixo:
  
  ```
    ./node_modules/.bin/sequelize db:migrate
  ```

  e depois

  ```
    ./node_modules/.bin/sequelize db:seed:all
  ```

##Rodando o projeto
  Se tudo tiver dado certo na população do banco, agora você já pode rodar o projeto com os comandos:

  ```
    npm run start
  ```

  Criei uma [documentação](https://documenter.getpostman.com/view/1554032/SVYwKbdr?version=latest#17b13206-9d73-4859-9a27-f41a7e4e7979) bem simple para ter uma ideia dos endpoints.