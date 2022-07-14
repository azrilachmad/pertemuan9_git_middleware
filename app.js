// Set Variable for Port 
const port = 3000;

// Express
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();


// EJS
app.set('view engine', 'ejs');
// Use Express Layout
app.use(expressLayouts);
app.set('layout', './layout/layout')

// Static File
app.use(express.static('public'))
app.use(express.static('public'))
app.use('/css', express.static(__dirname, + 'public/css'))
app.use('/css', express.static(__dirname, + 'public/images'))

    
    app.use((req, res, next) => {
        console.log('Time:', Date.now())
        next()
      })

    app.get('/', (req, res) => {
    cont = [
        {
            name:'Azril Achmad',
            email:'azril@gmail.com',
        },
        {
            name:'Ujang',
            email:'ujang@gmail.com',
        },
        {
            name:'Udin',
            email:'udin@gmail.com',
        },
    ]
    
    res.render('index',{nama : "Azril Achmad", title : "WebServer EJS", cont, layout : "layout/layout"})
    })

    app.get('/about', (req, res) => {
        res.render('about', {title : "About", layout : "layout/layout"})
    })
  
    app.get('/contact', (req, res) => {
        res.render('contact',{title : "Contact", layout : "layout/layout"})
    })

    //Membuat reques
    app.get('/product/:id?', (req, res) => {
        let category = req.query.category;
        res.send(`Product Id : ${req.params.id} <br> Category Id : ${category}`);
    })

    app.use('/', (req,res)=>{
        res.status(404)
        res.send('Page Not found : 404')
    })

    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })




// const http = require('http');   
// const port = 3000;
// const fs = require('fs'); 

// const findRespown = (url, res)=>{
    
//     fs.readFile(url,(err,data)=> {
        
//         if(err){
//             res.writeHead(404);
//             res.write('Error : page not found');
//         } else {
//             res.write(data);
//         }
//         res.end();
//     })
    
// }

// http
//     .createServer((req,res)=>{
        
//         //membuat fungsi validasi
//         const url = req.url;
//         console.log(url);
//         // Menambahkan validasi untuk setiap pagenya
//         if(url==='/about'){
//             // res.write('<h1>this is about page</h1>');
//             // res.end();
//             findRespown('./view/about.html',res);
//             // fs.readFile('./view/about.html',(err,data)=> {
//             //     validasiData(err,data);
//             // })
//         }else  if(url==='/contact'){
//             // res.write('<h1>this is contact page</h1>');
//             // res.end();
//             findRespown('./view/contact.html',res);
//             // fs.readFile('./view/contact.html',(err,data)=> {
//             //     validasiData(err,data);
//             // })

//         }else {
//             findRespown('./view/index.html',res);
//         // res.write('hello world');
//         // res.end();
//         }
//         // res.writeHead(200, { 
//         //     'Content-Type': 'text/html' });
        
//     })
//     // Memasukan Port yang akan di jalankan
//     .listen(port, ()=>{
//         console.log('Server listening on port 3000');
//     });