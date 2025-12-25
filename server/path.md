# Server

1. create `server.js`
2. npm init -y (inside server folder)
3. install dependencies `npm install express mongoose cors dotenv jsonwebtoken multer nodemon`

`package.json` will looks like

```json
{
    "name": "server",
    "version": "1.0.0",
    "description": "",
    "main": "server.js",
    "scripts": {
        "start": "node server.js",
        "dev": "nodemon server.js" // add
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "type": "module", // changed
    "devDependencies": {
        "nodemon": "^3.1.11"
    },
    "dependencies": {
        "cors": "^2.8.5",
        "dotenv": "^17.2.3",
        "express": "^5.2.1",
        "jsonwebtoken": "^9.0.3",
        "mongoose": "^9.0.2",
        "multer": "^2.0.2"
    }
}
```

start from 4:28:14
