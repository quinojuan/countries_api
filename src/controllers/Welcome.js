const Welcome = (req, res) => {
  const message = "<h1>WELCOME TO API COUNTRIES</h1><p>You can visit the following routes:</p><ul><li>/countries</li><li>/allcountries</li></ul>;"
  res.send(message);
};

module.exports = Welcome;
