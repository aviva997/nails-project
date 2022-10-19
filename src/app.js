const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { env } = require('process')

const app = express()
const port = process.env.PORT || 3000

const publicDirectoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
// const viewFooter = path.join(__dirname, '../templates/views/footer-view')
const partialsPath = path.join(__dirname,'../templates/partials')


//Setup handelbar
app.set('view engine', 'hbs')
app.set('views',viewPath)
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))


app.get('',(req,res)=>{
    res.render('index',{
        name: 'Sapir Nails'
    })
})

// app.get('/gallary',(req,res) =>{
//     res.render('index#gallary')
// })

app.get('/login',(req,res)=>{
    res.render('loginPage',{
        name: 'Login'
    })
})
app.get('/sing-up',(req,res)=>{
    res.render('singupPage',{
        name: 'sing up'
    })
})

app.get('/privacy-policy',(req, res) =>{
    res.render('footer-view/privacy-policy',{
        name:'Privacy-policy'
    })
})
app.get('/terms',(req, res) =>{
    res.render('footer-view/terms',{
        name:'Terms'
    })
})
app.listen(port, ()=>{
    console.log('Server listen to port '+ port)
})

