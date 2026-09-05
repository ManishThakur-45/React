const express = require('express')

const app = express()

app.get('/',(req, res)=>{
    const dummy= [
        {
            username:'manish',
            city:'Jaynagar',
            age:'21'
        }
    ]
    res.json({data:dummy})
})


app.listen(8000,()=>{
    console.log("srver is running at port 8000")
})