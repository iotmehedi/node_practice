require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// asfdasfdasdf
app.get('/mehedi', (req, res)=>{
    res.send('mehedi hasan')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})