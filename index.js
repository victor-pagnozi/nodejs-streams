const fs = require('fs');
const server = require("http").createServer();

// traditional model
// fs("./big.file", (err, data) => {
//   if (err) throw err;

//   res.end(data);
// });
// https://www.freecodecamp.org/portuguese/news/streams-em-node-js-tudo-o-que-voce-precisa-saber/

server.on("request", (req, res) => {
  const src = fs.createReadStream('./big.file');
  src.pipe(res);
});

server.listen(8001);
