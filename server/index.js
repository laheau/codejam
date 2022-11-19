const express = require('express');
const app = express();
const port = 3000;
const cardRouter = require('./routes/card');
const studentRouter = require('./routes/student');
const studySetRouter = require('./routes/studySet');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Hello world" });
});

app.use('/card', cardRouter)
app.use('/student', studentRouter)
app.use('/studySet', studySetRouter)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({message: err.message});
    return;
})

app.listen(port, () => {
    console.log(`Study app listening at http://localhost:${port}`);
})