// api dependencies
const router = require('express').Router();
const savedData = require('../db/savedData');

//GET request for notes
router.get('/notes', (req, res) => {
    savedData
        .retrievedNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

//POST to notes
router.post('/notes', (req, res) => {
    savedData
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

//DELETE notes
router.delete('/notes/:id', (req, res) => {
    savedData
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch (err => res.status(500).json(err));
});

module.exports = router;