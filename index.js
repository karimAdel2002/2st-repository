import express from 'express';

const app = express();
const arr = [
    {
        id: 1,
        name: 'Karim',
        city: '6 october'
    },
    {
        id: 2,
        name: 'Mohammed',
        city: 'Alexandrea'
    },
    {
        id: 3,
        name: 'Fathy',
        city: 'Ashmoon'
    },
    {
        id: 4,
        name: 'Ibrahem',
        city: 'Ashmoon'
    },
    {
        id: 5,
        name: 'Adel',
        city: 'Tanta'
    },
]

app.get('/students', (req, res) => {
    let output = '<ul>'

    arr.forEach((item) => {
        const student = item
        output += "<li><h1><font color='red'>" + student.name + "</font></h1></li>";
    })



    output += '</ul>';


    res.send(output);
})
app.listen(5000);
