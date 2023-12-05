const express = require('express')
const routes = require('./routes/routes');

const app = express()
const port = 3000

app.use('/', express.static('public'))


app.use('/calculator', routes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
