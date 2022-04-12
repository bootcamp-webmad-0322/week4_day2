const { application } = require('express');
const express = require('express')

const app = express()

app.use(express.static(`${__dirname}/public`))
app.set("views", `${__dirname}/views`);
app.set("view engine", "hbs");


app.get('/', (req, res) => {
    res.render('index-page')
})

app.get('/student-info', (req, res) => {

    const student = {
        name: 'German',
        bootcamp: '<em>Web Dev</em>',
        subjects: ['HTML', 'CSS', 'JS', 'REACT'],
        campus: 'Madrid',
        teacher: 'Isa',
        debt: true,
        cost: 7000,
        pending: 2000,
        address: {
            street: 'García Luna',
            postalCode: 28002
        },
        startDate: undefined
    }

    res.render('student-page', student)
})

app.listen(5005, () => console.log('SERVER LEVANTADO EN 5005'))