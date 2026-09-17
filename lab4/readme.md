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

## REST API
- majorly backend server return only data not html file.
- REST API uses ( gte, post , put , patch , delete) method to communicate with client.
- any browser can check only get method 
- for other method type we use third party API tester like  postman , thunder client , echo api etc.
