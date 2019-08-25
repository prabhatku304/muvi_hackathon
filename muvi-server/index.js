require('dotenv').config();

const express   =   require('express'),
      mongoose   =    require('mongoose'),
      bodyParser    =   require('body-parser'),
      morgan     =  require('morgan'),
      cors       =    require('cors');
 const errorHandler  =   require('./handlers/err');
 const userRouter  =  require('./routes/user');
 const projectRouter =  require('./routes/project');
 const profileRouter = require('./routes/projectProfile')

const app  =  express();

app.use(bodyParser.json());

app.use(morgan('tiny'));
app.use(cors());
app.use(express.static("public/uploads"));

app.use('/api',userRouter);
app.use('/api',projectRouter);
app.use('/api',profileRouter);

app.use(function(req,res,next){
    let err = new Error("not found");
    err.status = 404;
    next(err);
})
      

app.use(errorHandler);


app.listen(7000)