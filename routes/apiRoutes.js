// api dependencies
const router = require('express').Router();
const saveData = require('../db/saveData');

//GET request for notes
router.get('/notes', (req, res) => {
    saveData
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

//POST to notes
router.post('/notes', (req, res) => {
    saveData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

//DELETE notes
router.delete('/notes/:id', function (req, res) {
    saveData
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch (err => res.status(500).json(err));
});

module.exports = router;