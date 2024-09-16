

const express = require('express')

const app = express()

require('dotenv').config()

const Key = process.env.Protection_Key
const values = [
    {userid: 123, xp: 1},
    {userid: 124, xp: 2},
    {userid: 126, xp: 3},
    {userid: 127, xp: 4},
    {userid: 128, xp: 5},
]
app.get('/getvalue',async function (req, res)
{

  

  const userid = parseInt(req.query.userid)
  const key = req.query.key


  if(Key==key)
  {
    for(const value of values)
    {

    if(value.userid == userid)
      {
      res.send({ amount: value.xp})
      }
  }
}
})

app.get('/',async function (req, res)
{

    res.send('Hello World!') 
  
})

app.listen(process.env.PORT||3000);
