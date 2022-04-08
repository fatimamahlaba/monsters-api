const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (request, response, next) => {
    pool.query('SELECT * FROM monsters ORDER BY id ASC', (err, res) => {
        if (err) return next(err);
        response.json(res.rows);
    });
});

router.get('/:id', (request, response, next) => {
    const { id } = request.params;

    pool.query('SELECT * FROM monsters WHERE id = $1', [id], (err, res) => {
        if (err) return next(err);

        response.json(res.rows);
    });
});

router.post('/', (request, response, next) => {
const { name, personlality } = request.body;

pool.query(
'INSERT INTO monsters(name, personlality) VALUES($1, $2)',
 [name, personlality],
 (err, res) => {
    if (err) return next(err);

    response.json("Posted monster");
 }
 );
});

router.put('/:id', (request, response, next) => {
const { id } = request.params;

const keys = ['name', 'personlality'];

const fields = [];

 keys.forEach((key) => {
    if (request.body[key]) fields.push(key);
  });

  fields.forEach((field, index) => {
    pool.query(
      `UPDATE monsters SET ${field}=($1) WHERE id=($2)`,
      [request.body[field], id],
      (err, res) => {
        if (err) { console.log('yes'); return next(err) };
        if (index === fields.length - 1) { response.json('Updated Monster') };
      }
    );
  });
}); 

router.delete("/:id", (request, response, next) => {
    const { id } = request.params;
  
    pool.query("DELETE FROM monsters WHERE id=($1)", [id], (err, res) => {
      if (err) return next(err);
  
      response.json("Deleted Monster");
    });
  });

module.exports = router;