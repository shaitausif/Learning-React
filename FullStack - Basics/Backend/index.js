import express from 'express'
const app = express()

app.get('/',(req,res) => {
    res.send('server is ready');
})

// Get a list of 5 jokes

app.get('/api/jokes',(req,res) => {
    const jokes = [
        {
            id:1,
            title: 'a joke',
            content : 'This is a joke'
        },
        {
            id:2,
            title: 'a joke',
            content : 'This is a joke'
        },
        {
            id:3,
            title: 'a joke',
            content : 'This is a joke'
        },
        {
            id:4,
            title: 'a joke',
            content : 'This is a joke'
        },
        {
            id:5,
            title: 'a joke',
            content : 'This is a joke hi'
        },
        {
            id:6,
            title: 'a joke',
            content : 'This is a joke hi'
        },
    ]
    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`server running at https://localhost:${port}`);
})