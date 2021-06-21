import express from 'express';


const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get('/api/', (req, res) => {
    res.status(200).send({message: 'Hello World!'});
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});