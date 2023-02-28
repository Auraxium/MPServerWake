const express = require('express')
const app = express()
const cors = require('cors');
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

let interval = setInterval(callIt, 5 * 1000 * 60);

function callIt() {
  fetch(port + '/req1', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      value: Math.random()*50 + randomArray[0]
    })
  }).catch(err => console.log(err))
}

app.get('/req1', (req, res) => {

})

app.listen(8776, () => console.log("port started on 776"))