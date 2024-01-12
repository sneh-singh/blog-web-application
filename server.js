import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000";

app.use(express.static("public"));

app.use(bodyParser.urlencoded({enabled: true}));
app.use(bodyParser.json());

// Route to render the main page
app.get("/", async(req, res) => {
    try{
        const response = await axios.get(`${API_URL}/jokes`);
        res.render("index.ejs", {jokes: response.data});
    } catch(error) {
        res.status(500).json({message: "Error fetching jokes"});
    }
});

// Route to render the edit page
app.get("/new", (req, res) => {
    res.render("modify.ejs", { heading: "New Joke", submit: "Create Joke" });
})

app.post("/api/jokes", async(req, res) => {
    try{
        const response = await axios.post(`${API_URL}/jokes2`, req.body);
        res.redirect("/");
    } catch(error) {
        res.status(500).json({message: error.message + " Error creating joke"});
    }
})

//Go to Update Form Page
app.get("/edit/:id", async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}/jokes/${req.params.id}`);
    console.log(response.data);
    res.render("modify.ejs", {
      heading: "Edit Joke",
      submit: "Update Joke",
      jokes: response.data,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching joke" });
  }
});

//Partially Update the Joke
app.post("/api/jokes/:id", (req, res) => {
  try {
    const response = axios.patch(`${API_URL}/jokes/${req.params.id}`, req.body);
    console.log(response.data);
    res.redirect("/");
  } catch(err) {
    res.status(500).json({message: "Unable to update Joke!"});
  }
})

//Delete the joke
app.get("/api/jokes/delete/:id", async(req, res) => {
  try {
    await axios.delete(`${API_URL}/jokes/${req.params.id}`);
    res.redirect("/")
  } catch(err) {
    res.status(500).json({message: "Error deleting Joke"});
  }
})

app.listen(port, ()=> {
    console.log(`API Calls are running on http://localhost:${port}`);
});
