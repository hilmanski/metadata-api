const urlMetadata = require('url-metadata')

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')

  const url = req.query.url

  urlMetadata(url).then(
  function (metadata) { // success handler
      res.json({ metadata })
  },
  function (error) { // failure handler
    res.json({ error })
  })
};