const express =require('express');
const userRouter= require('./Routes/userRoutes');
const questionRouter= require('./Routes/questionRoutes');
const commentRouter= require('./Routes/commentRoutes');
const voteRouter= require('./Routes/voteRoutes');
const app = express();

app.use('/api/v1/user',userRouter);
app.use('/api/v1/question',questionRouter);
app.use('/api/v1/comment',commentRouter);
app.use('/api/v1/vote',voteRouter);

module.exports =app;