const getFilmById = (req, res) => {
  res.status(200);
  res.json({
    text: 'Test route is successfull',
  });
};

module.exports = getFilmById;
