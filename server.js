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
        console.log(response);
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
    console.log('hello moto', req.body);
    try{
        console.log('hello moto 1', req.body);
        const response = await axios.post(`${API_URL}/jokes2`, req.body);
        console.log("hello 1", response);
        res.status(200).json({message: "successfuly created" + response});
        // res.redirect("/");
    } catch(error) {
        console.log('hello moto 2', req.body);
        res.status(500).json({message: error.message + " Error creating joke"});
    }
})

app.listen(port, ()=> {
    console.log(`API Calls are running on http://localhost:${port}`);
});
