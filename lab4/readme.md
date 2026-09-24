# NPM Project

1. Go to project folder by command ` cd `.
2. type `npm init -y`.
3. open package.json.
4. update `type:module`.
5. install nodemon ` npm i nodemon -D`.
6. update script in package.json.

```
"scripts": {
    "start": "node prg7.js",
    "dev": "nodemon prg7.js"
  }

  ```
7. add node_moduless to .gitignore .
8. to run use `npm run dev`


# REST API
- majorly backend server return only data not html file.
- REST API uses ( get, post , put , patch , delete) method to communicate with client.
- any browser can check only get method 
- for other method type we use third party API tester like  postman , thunder client , echo api etc.

# Request Type
 1. `GET` -> get all , get by id.
 - Get : /api/products ->  `use get all`
 - Get : /api/products/101 -> `use get by id`
2. `POST `-> adding product and data will be shared from EchoApi body section
- Post : /api/products
3. `PUT/ PATCH `-> for updating 
- Put/Patch : /api/products/201
4. `DELETE` -> for deleting 
* Delete : /api/products/110
##





