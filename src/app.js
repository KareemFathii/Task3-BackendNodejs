
const express = require("express")
const app = express()
const port=  process.env.PORT || 3000 

const path = require("path")
const hbs = require("hbs")

const d = path.join(__dirname , "../public") 
app.use(express.static(d))

const viewpath = path.join(__dirname,"../v1")
const partialpath = path.join(__dirname,"../partials")
app.set("view engine", 'hbs') 

app.set("views",viewpath)
hbs.registerPartials(partialpath)

app.get('/', (req,res) => {
    res.render("index",{
        title : "Home page",
        descr : "This is my home Page "
        
    })
})

app.get('/service' , (req,res)=>{
    res.render("service" , {
        title:"service page",
        name : 'kareem fathii',
        age :21,
        position : "Frontend developer"
    })
})

app.get('/page2' , (req,res)=>{
    res.render("page2" , {
        title:"Software developer 2 ",
        name : 'Zyad Ahmed',
        age :22,
        position : "backend developer"
    })
})
app.get('/page3' , (req,res)=>{
    res.render("pag3" , {
        title:"Software developer 3 ",
        name : 'Hesham mohamed',
        age :26,
        position : "Fullstack developer"
    })
})

app.get("/about" ,(req,res)=>{
    res.render("about",{
        title :"About page",
        number : "01060221231" ,
        position :"Technical member"       
    })
})



app.listen(port , ()=>{
    console.log("app is listening on port 3000")   
})

/////////////////////////////////////////////////////////////