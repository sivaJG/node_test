const express = require('express');
const app = express();


app.use(express.static('public'))
app.set('view engine', 'ejs')



app.get('/', (req, res) => {
    res.render('page1');
})
app.get('/page1', (req, res) => {
    res.render('page1');
})
app.get('/page2',(req, res) => {
    res.render('page2')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

app.listen(3000);