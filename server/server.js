const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const connection = require(`./db`)

const app = express();

app.use(cors());
app.use(bodyParser.json());


// get all tasks
app.get('/tasks', (req, res) => {
  const SELECT_ALL_TASKS = `SELECT * FROM tasks ORDER BY TIMEE;`;
  connection.all(SELECT_ALL_TASKS, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post('/addtask', (req, res) => {
  const ADD_TASK = `INSERT INTO tasks (name, id , TIMEE) 
                    VALUES ('${req.body.name}', '${req.body.id}', '${req.body.TIMEE}');`;
  console.log(ADD_TASK, `add task`);
  connection.run(ADD_TASK, (err) => {
    if (err) {
      console.log(err);
    } else {
      res.send('added');
    }
  });
});

app.delete('/task/:id', (req, res) => {
  const DELETE_TASK = `DELETE FROM tasks WHERE (id = '${req.params.id}');`;
  console.log(DELETE_TASK);
  connection.run(DELETE_TASK, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send('deleted');
    }
  });
});

app.listen(4000 , () => {
    console.log('running on port 4000')
})