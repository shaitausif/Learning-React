import express from 'express'

const app = express()

const port = process.env.PORT || 3000;

app.get('/api/products',(req,res) => {
    const products = [
        {
            id: 1,
            name : 'table wooden',
            price : 200,
            image : 'https://avatars.githubusercontent.com/u/141828254?s=400&u=b120c6e1d7db69045300fc7ab9f5d1fd492e0867&v=4'
        },
        {
            id: 1,
            name : 'table glass',
            price : 200,
            image : 'https://avatars.githubusercontent.com/u/141828254?s=400&u=b120c6e1d7db69045300fc7ab9f5d1fd492e0867&v=4'
        },
        {
            id: 1,
            name : 'table block',
            price : 200,
            image : 'https://avatars.githubusercontent.com/u/141828254?s=400&u=b120c6e1d7db69045300fc7ab9f5d1fd492e0867&v=4'
        },
        {
            id: 1,
            name : 'table cutter',
            price : 200,
            image : 'https://avatars.githubusercontent.com/u/141828254?s=400&u=b120c6e1d7db69045300fc7ab9f5d1fd492e0867&v=4'
        },
        {
            id: 1,
            name : 'table meat',
            price : 200,
            image : 'https://avatars.githubusercontent.com/u/141828254?s=400&u=b120c6e1d7db69045300fc7ab9f5d1fd492e0867&v=4'
        },
    ]

    // The below url contains query parameter
    // http://localhost:3000/api/products?search=metal

    // The data coming is called as request the data going is called as response
    if(req.query.search){
        const filterProducts = products.filter((product) => 
            product.name.includes(req.query.search)
        )
        res.send(filterProducts)
        // It's important to return from this get method after sending the respond else the app can crash
        return;
    }


    setTimeout(() => {
        res.send(products)
    }, 3000);

})



app.listen(port,() => {
    console.log(`Server running on port ${port}`)
})
