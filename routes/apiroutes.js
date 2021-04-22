const fs = require('fs');

module.exports = (app) => {


  app.get('/api/notes', (req, res) => {
      const notesDB = require('../db/db.json');

      return res.json(notesDB)
    });
  




  app.post('/api/notes', (req, res) => {
    const notesDB = require('../db/db.json');
      notesDB.push(req.body);
      console.log(notesDB);
      res.json(notesDB);
    
  });


};

//This is a note that I am putting in as a test
