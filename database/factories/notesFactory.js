const NoteSchema = require("../models/note");

function notesFactory(modelName) {
  const NoteModel = NoteSchema(modelName);

  const getAllNotes = () => {
    return NoteModel.find({}).exec();
  };

  const postNewNote = note => {
    const newNote = new NoteModel(note);
    return new Promise((res, rej) => {
      newNote.save((err, addedNewNote) => {
        if (err) rej(err);
        res(addedNewNote);
      });
    });
  };

  const deleteAllNotes = () => {
    return new Promise((res, rej) => {
      NoteModel.deleteMany({}, err => {
        if (err) rej(err);
        res([]);
      });
    });
  };

  const deleteOne = id => {
    return new Promise((res, rej) => {
      NoteModel.deleteOne({ id: id }, err => {
        if (err) rej(err);
        res("ok");
      });
    });
  };

  return {
    getAllNotes,
    postNewNote,
    deleteAllNotes,
    deleteOne
  };
}

module.exports = notesFactory;
