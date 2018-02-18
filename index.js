const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport')
const keys = require('./config/keys');
mongoose.connect(keys.mongoURI);
require('./models/User');
require('./services/passport');
const app = express();

app.use(
    cookieSession({
        maxAge:24*60*60*1000,    //1 day
        keys: [keys.cookieKey]
    })
)
app.use(passport.initialize());
app.use(passport.session());

//console.developers.google.com

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);