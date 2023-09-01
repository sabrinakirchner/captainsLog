require ('dotenv').config()
const express = require('express'); 
const bodyParser = require('body-parser');//middleware
const mongoose = require('mongoose'); 
const app = express();
const port = process.env.PORT || 3000;
const methodOverride = require('method-override');
//const Logs = require('./models/logs');

//mongoose
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    //useCreateIndex: true,
});

 

//view 
app.engine('jsx', require('express-react-views').createEngine()); 
app.set('view engine', 'jsx');


app.use(methodOverride("_method")); 
app.use(express.urlencoded({ extended: true})); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(methodOverride('_method')); 



//route 
app.get('/', (req, res) =>{
    res.send("it's running")
})

app.use('/logs', require('./controllers/logs'))



//Listening 
//const PORT = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});