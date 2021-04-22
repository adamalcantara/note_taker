const fs = require('fs');
const path = require("path");

const { v4: uuidv4 } = require('uuid');
let notesDB = require('../db/db.json');

module.exports = (app) => {


  app.get('/api/notes', (req, res) => {
        return res.json(notesDB)
    });

  app.post('/api/notes', (req, res) => {
      req.body.id=uuidv4()
      notesDB.push(req.body);
      fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notesDB), function(err)
      {
        if (err)throw err
        console.log(notesDB);
        console.log(__dirname);
        res.json(notesDB);
      });
    
  });

  app.delete('/api/notes/:id', (req, res) => {
      const id = req.params.id
      notesDB = notesDB.filter(note => note.id !== id);
      fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(notesDB), function
      (err){
        if (err)throw err
        console.log(notesDB);
        console.log(__dirname);
        res.json(notesDB);
      });
      
  })

};

//This is a note that I am putting in as a test
