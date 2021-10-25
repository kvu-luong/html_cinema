### 1. Start Project
1. npm install
2. test with node: npm run server
3. test with webpack: npm start
4. build: npm run build

### 2. SASS
- Reference : [sass home page](https://sass-lang.com/install)
```
npm install -g sass 
```
- Usage: 
``` 
sass -w input.scss output.css
e.g: sass -w ui/asset/scss/main.scss ui/asset/css/main.css
```

### 3. Node Server
- install node_modules outside
- package.json: file to run code faster - **not required**
- load environment variable in .env file with dotenv package.
- Router for each page. 

Run server:
```
npm run dev
```
or in case, don't have package.json
``` 
node server/server.js
```
Load environment variable
``` 
npm install dotenv
```
In server file (server.js):
``` 
require('dotenv').config();
process.env.PORT
e.g: PORT='2222'
```

### Webpack
- Note version of each library in package.json which is important.

