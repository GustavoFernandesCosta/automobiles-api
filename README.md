# :car: Automobiles-api

"Automobile-api" was built using Express with REST that allows to control the use of automobiles of a company's 

## Requirements

 - Node v14.16.0
 - NPM 6.14.11
- [Postman](https://www.postman.com/downloads/)

## Architecture

- `index.js`: Server listener file
- `src/features`: Directory responsible to group specific domains and its files, such as routes, controllers, services etc

## How to run it ?

1. `git clone https://github.com/GustavoFernandesCosta/automobiles-api.git`
2. `cd /automobiles-api`
3. `npm i`
4. Change ".env.example" to ".env"
5. Insert in .env the "DB_URL" (mongoDB) and localhost in "PORT" (ex: 3000)
6. You're ready to next steps

### REST API

All request were made using Postman. The API contracts can be found [here](https://documenter.getpostman.com/view/15447539/TzXzDHVh). To run the REST API, please run: `npm run dev`

## Contact

- Email: gustavocostadev@gmail.com
