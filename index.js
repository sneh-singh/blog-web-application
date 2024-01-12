import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;
const masterKey = "4VGP2DN-6EWM4SJ-N6FGRHV-Z3PR3TT";

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send('Hello world!');
// });

app.get("/jokes", (req, res) => {
  res.json(jokes);
});

// POST a new joke
app.post('/jokes2', (req, res) => {
  const newJoke = {
    id: jokes.length + 2,
    jokeText: req.body.jokeText,
    jokeType: req.body.jokeType,
    author: req.body.author,
    date: new Date()
  }
  jokes.push(newJoke);
  res.status(201).json(newJoke);
});

app.get('/randomjokes', (req, res)=> {
  res.json(jokes);
});

app.get('/jokes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const foundJoke = jokes.find((joke) => joke.id === id);
  res.json(foundJoke);
});

app.get('/jo1kes/filter', (req, res) => {
  const type = req.query.type;
  const filteredJokes = jokes.filter((joke) => joke.jokeType === type);
  res.json(filteredJokes);
});

// app.post('/jokes', (req, res) => {
//   const newJoke = {
//     id: jokes.length + 1,
//     jokeText: req.body.text,
//     jokeType: req.body.type
//   }
//   jokes.push(newJoke);
//   console.log(jokes.slice(-1));
//   res.json(newJoke);
// });

app.put("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const replacementjoke = {
    id: id,
    jokeText: req.body.text,
    jokeType: req.body.type
  };

  const searchIndex = jokes.findIndex((joke) => joke.id === id);

  jokes[searchIndex] = replacementjoke;
  res.json(replacementjoke);
});

app.patch("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const existingJoke = jokes.find((joke) => joke.id === id);
  const replacementJoke = {
    id: id,
    jokeText: req.body.jokeText || existingJoke.jokeText,
    jokeType: req.body.jokeType || existingJoke.jokeType,
    author: req.body.author
  };
  const searchIndex = jokes.findIndex((joke) => joke.id === id);
  jokes[searchIndex] = replacementJoke;
  console.log(jokes[searchIndex]);
  res.json(replacementJoke);
});

app.delete("/jokes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const searchIndex = jokes.findIndex((joke) => joke.id === id);
  if(searchIndex > -1) {
    jokes.splice(searchIndex, 1);
    res.sendStatus(200);
  } else {
    res
    .status(404)
    .json({error: `joke with id: ${id} not found.
    No jokes were deleted.`});
  }
});

app.delete("/all", (req, res) => {
  const userKey = req.query.key;
  if(masterKey === userKey) {
    jokes = [];
    res.sendStatus(200);
  } else { 
    res
    .status(404)
    .json({error: `You are not authorised to perform this action.`});
  }
})

app.listen(port, () => {
  console.log(`Successfully started server on port ${port}.`);
});

var jokes = [
  {
    author: "Sneh Singh Chauhan",
    id: 1,
    jokeText:
      "Why don't scientists trust atoms? Because they make up everything.",
    jokeType: "Science",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 2,
    jokeText:
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
    jokeType: "Puns",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 3,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "Puns",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 4,
    jokeText:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
];
