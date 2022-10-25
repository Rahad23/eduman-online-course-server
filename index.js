const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
app.use(cors());

// api call
const course = require('./Api/course.json');
const categoryCours = require('./Api/categori.json')

app.get('/course', (req, res) => {
  res.send(course);
})

app.get('/category', (req, res)=>{
    res.send(categoryCours);
})

app.get('/category/:id', (req, res)=>{

    const id = req.params.id;
    const singleCategory = course?.find(category=> id == category.id);
    // console.log(singleCategory);
    if(id == 09){

        res.send(course);
    }else{
        res.send(singleCategory);
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})