const express = require('express')
const app = express()
const cors = require('cors');
const axios = require('axios')
const { json } = require('express');

app.use(
  cors({
    origin: "*",
    credentials: true,
    methods: "*",
    headers: "*",
  })
);
app.use(express.json())

const port = 'https://mataparkserver.onrender.com';
let randomArray = [5];

callIt()
let interval = setInterval(callIt, 12 * 1000 * 60);

function callIt() {
  axios.post(port + '/req1', {
    value: Math.random()*5 + randomArray[0]
  })
  .then(data => randomArray = [Math.random()*data.data['value']])
  .catch(err => console.log('err'))
  .finally(() => console.log(randomArray))
}

app.post('/req1', (req, res) => {
  let val = req.body['value'];
  randomArray = [Math.random() * val]
  return res.json({value: Math.random() * randomArray[0]})
})

const PORT = process.env.PORT || 8776;
app.listen(PORT, null, () => console.log("port started on 776"))