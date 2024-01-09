import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;
const masterKey = "4VGP2DN-6EWM4SJ-N6FGRHV-Z3PR3TT";

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.get("/", (req, res) => {
//   res.send('Hello world!');
// });

app.get("/jokes", (req, res) => {
  res.json(jokes);
});

// POST a new joke
app.post('/jokes2', (req, res) => {
  console.log('Akshay', req.body);
  // console.log('sneh', res);
  const newJoke = {
    id: jokes.length + 2,
    jokeText: req.body.jokeText,
    jokeType: req.body.jokeType,
    author: req.body.author,
    date: new Date()
  }
  jokes.push(newJoke);
  console.log('yo yo', req.body);
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
    jokeText: req.body.text || existingJoke.jokeText,
    jokeType: req.body.type || existingJoke.jokeType,
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
    jokes.slice(searchIndex, 1);
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
  // {
  //   author: "Sneh Singh Chauhan",
  //   id: 1,
  //   jokeText:
  //     "Why don't scientists trust atoms? Because they make up everything.",
  //   jokeType: "Science",
  //   date: "2023-08-01T10:00:00Z",
  // },
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
  {
    author: "Sneh Singh Chauhan",
    id: 5,
    jokeText:
      "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 6,
    jokeText: "How do you organize a space party? You planet!",
    jokeType: "Science",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 7,
    jokeText:
      "Why don't some couples go to the gym? Because some relationships don't work out.",
    jokeType: "Puns",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 8,
    jokeText:
      "Parallel lines have so much in common. It's a shame they'll never meet.",
    jokeType: "Math",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 9,
    jokeText: "What do you call fake spaghetti? An impasta!",
    jokeType: "Food",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 10,
    jokeText: "Why did the tomato turn red? Because it saw the salad dressing!",
    jokeType: "Food",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 11,
    jokeText:
      "What do you get when you cross a snowman and a vampire? Frostbite!",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 12,
    jokeText:
      "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    jokeType: "Sports",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 13,
    jokeText:
      "Why are ghosts bad at lying? Because you can see right through them!",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 14,
    jokeText: "Why can't you give Elsa a balloon? Because she will let it go.",
    jokeType: "Movies",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 15,
    jokeText:
      "I'm reading a book about anti-gravity. It's impossible to put down!",
    jokeType: "Science",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 16,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "Puns",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 17,
    jokeText:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 18,
    jokeText:
      "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 19,
    jokeText: "How do you organize a space party? You planet!",
    jokeType: "Science",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 20,
    jokeText:
      "Why don't some couples go to the gym? Because some relationships don't work out.",
    jokeType: "Puns",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 21,
    jokeText:
      "Parallel lines have so much in common. It's a shame they'll never meet.",
    jokeType: "Math",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 22,
    jokeText: "What do you call fake spaghetti? An impasta!",
    jokeType: "Food",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 23,
    jokeText: "Why did the tomato turn red? Because it saw the salad dressing!",
    jokeType: "Food",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 24,
    jokeText:
      "What do you get when you cross a snowman and a vampire? Frostbite!",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 25,
    jokeText:
      "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    jokeType: "Sports",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 26,
    jokeText:
      "Why are ghosts bad at lying? Because you can see right through them!",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 27,
    jokeText: "Why can't you give Elsa a balloon? Because she will let it go.",
    jokeType: "Movies",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 28,
    jokeText:
      "I'm reading a book about anti-gravity. It's impossible to put down!",
    jokeType: "Science",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 29,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "Puns",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 30,
    jokeText:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 31,
    jokeText:
      "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 32,
    jokeText: "How do you organize a space party? You planet!",
    jokeType: "Science",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 33,
    jokeText:
      "Why don't some couples go to the gym? Because some relationships don't work out.",
    jokeType: "Puns",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 34,
    jokeText:
      "Parallel lines have so much in common. It's a shame they'll never meet.",
    jokeType: "Math",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 35,
    jokeText: "What do you call fake spaghetti? An impasta!",
    jokeType: "Food",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 36,
    jokeText: "Why did the tomato turn red? Because it saw the salad dressing!",
    jokeType: "Food",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 37,
    jokeText:
      "What do you get when you cross a snowman and a vampire? Frostbite!",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 38,
    jokeText:
      "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    jokeType: "Sports",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 39,
    jokeText:
      "Why are ghosts bad at lying? Because you can see right through them!",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 40,
    jokeText: "Why can't you give Elsa a balloon? Because she will let it go.",
    jokeType: "Movies",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 41,
    jokeText:
      "I'm reading a book about anti-gravity. It's impossible to put down!",
    jokeType: "Science",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 42,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "Puns",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 43,
    jokeText:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 44,
    jokeText:
      "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 45,
    jokeText: "How do you organize a space party? You planet!",
    jokeType: "Science",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 46,
    jokeText:
      "Why don't some couples go to the gym? Because some relationships don't work out.",
    jokeType: "Puns",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 47,
    jokeText:
      "Parallel lines have so much in common. It's a shame they'll never meet.",
    jokeType: "Math",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 48,
    jokeText: "What do you call fake spaghetti? An impasta!",
    jokeType: "Food",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 49,
    jokeText: "Why did the tomato turn red? Because it saw the salad dressing!",
    jokeType: "Food",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 50,
    jokeText:
      "What do you get when you cross a snowman and a vampire? Frostbite!",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 51,
    jokeText:
      "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    jokeType: "Sports",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 52,
    jokeText:
      "Why are ghosts bad at lying? Because you can see right through them!",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 53,
    jokeText: "Why can't you give Elsa a balloon? Because she will let it go.",
    jokeType: "Movies",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 54,
    jokeText:
      "I'm reading a book about anti-gravity. It's impossible to put down!",
    jokeType: "Science",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 55,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "Puns",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 56,
    jokeText:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 57,
    jokeText:
      "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 58,
    jokeText: "How do you organize a space party? You planet!",
    jokeType: "Science",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 59,
    jokeText:
      "Why don't some couples go to the gym? Because some relationships don't work out.",
    jokeType: "Puns",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 60,
    jokeText:
      "Parallel lines have so much in common. It's a shame they'll never meet.",
    jokeType: "Math",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 61,
    jokeText: "What do you call fake spaghetti? An impasta!",
    jokeType: "Food",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 62,
    jokeText: "Why did the tomato turn red? Because it saw the salad dressing!",
    jokeType: "Food",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 63,
    jokeText:
      "What do you get when you cross a snowman and a vampire? Frostbite!",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 64,
    jokeText:
      "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    jokeType: "Sports",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 65,
    jokeText:
      "Why are ghosts bad at lying? Because you can see right through them!",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 66,
    jokeText: "Why can't you give Elsa a balloon? Because she will let it go.",
    jokeType: "Movies",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 67,
    jokeText:
      "I'm reading a book about anti-gravity. It's impossible to put down!",
    jokeType: "Science",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 68,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "Puns",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 69,
    jokeText:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 70,
    jokeText:
      "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 71,
    jokeText: "How do you organize a space party? You planet!",
    jokeType: "Science",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 72,
    jokeText:
      "Why don't some couples go to the gym? Because some relationships don't work out.",
    jokeType: "Puns",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 73,
    jokeText:
      "Parallel lines have so much in common. It's a shame they'll never meet.",
    jokeType: "Math",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 74,
    jokeText: "What do you call fake spaghetti? An impasta!",
    jokeType: "Food",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 75,
    jokeText: "Why did the tomato turn red? Because it saw the salad dressing!",
    jokeType: "Food",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 76,
    jokeText:
      "What do you get when you cross a snowman and a vampire? Frostbite!",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 77,
    jokeText:
      "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    jokeType: "Sports",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 78,
    jokeText:
      "Why are ghosts bad at lying? Because you can see right through them!",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 79,
    jokeText: "Why can't you give Elsa a balloon? Because she will let it go.",
    jokeType: "Movies",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 80,
    jokeText:
      "I'm reading a book about anti-gravity. It's impossible to put down!",
    jokeType: "Science",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 81,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "Puns",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 82,
    jokeText:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 83,
    jokeText:
      "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 84,
    jokeText: "How do you organize a space party? You planet!",
    jokeType: "Science",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 85,
    jokeText:
      "Why don't some couples go to the gym? Because some relationships don't work out.",
    jokeType: "Puns",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 86,
    jokeText:
      "Parallel lines have so much in common. It's a shame they'll never meet.",
    jokeType: "Math",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 87,
    jokeText: "What do you call fake spaghetti? An impasta!",
    jokeType: "Food",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 88,
    jokeText: "Why did the tomato turn red? Because it saw the salad dressing!",
    jokeType: "Food",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 89,
    jokeText:
      "What do you get when you cross a snowman and a vampire? Frostbite!",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 90,
    jokeText:
      "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    jokeType: "Sports",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 91,
    jokeText:
      "Why are ghosts bad at lying? Because you can see right through them!",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 92,
    jokeText: "Why can't you give Elsa a balloon? Because she will let it go.",
    jokeType: "Movies",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 93,
    jokeText:
      "I'm reading a book about anti-gravity. It's impossible to put down!",
    jokeType: "Science",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 94,
    jokeText:
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    jokeType: "Puns",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 95,
    jokeText:
      "What did one ocean say to the other ocean? Nothing, they just waved.",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 96,
    jokeText:
      "Why do we never tell secrets on a farm? Because the potatoes have eyes and the corn has ears.",
    jokeType: "Wordplay",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 97,
    jokeText: "How do you organize a space party? You planet!",
    jokeType: "Science",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 98,
    jokeText:
      "Why don't some couples go to the gym? Because some relationships don't work out.",
    jokeType: "Puns",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 99,
    jokeText:
      "Parallel lines have so much in common. It's a shame they'll never meet.",
    jokeType: "Math",
    date: "2023-08-01T10:00:00Z",
  },
  {
    author: "Sneh Singh Chauhan",
    id: 100,
    jokeText: "What do you call fake spaghetti? An impasta!",
    jokeType: "Food",
    date: "2023-08-01T10:00:00Z",
  },
];
