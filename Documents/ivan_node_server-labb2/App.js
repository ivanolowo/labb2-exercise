const express = require('express');
const _ = require("lodash")
//const request = require("request");

// express application
const app = express();

// register view engine
app.set('view engine', 'ejs');
app.set('views', 'public');

// listen for requestsAttempted
app.listen(3002);

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

//using lodash and rout parameters to generate random numbers btn 0 1nd 1023
app.get("/api/random", (req, res) => {
    const rand = _.random(0, 1023);
    res.render({number: rand});
});
  
app.get("/api/random/:num", (req, res) => {
    const tal = _.random(0, req.params.num);
    res.send({
      number: rand,
    });
  });

  //Using api endpoint to increase counter by one
  let count = 0;
  app.get("/counter/add", (req, res) => {
    count++;
    res.render({ success: true });
  });

  // API endpoint for counter show number
  app.get("/counter/show", (req, res) => {
    res.render({ count });
  });

//counter function for counting vowels in a word and increase counter by one
function counter(str) {
    let count = 0;
    let vowels = 'aeiou';

    for (let i = 0; i < str.length; i++){
        if (vowels.indexOf(str[i]) > -1) {
            count++
        }
    }
    return count;
}

app.use((req, res) => {
    res.status(404).render('404');
});
