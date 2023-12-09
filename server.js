const express = require('express')
const db = require('./models/index.js');
const app = express()
const port = 3000

app.get('/healthcheck', async (req, res) => {
    try {
        await db.sequelize.authenticate();
        await db.sequelize.close();
        res.status(200).send('i am healthy');
    } catch (error) {
        await db.sequelize.close();
        res.status(500).send('Unable to connect to database');
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


