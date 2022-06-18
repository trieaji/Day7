// mengimport terlebih dahulu
const express = require('express') // cara ke 1 
// import express from 'express' -> cara ke 2

const app = express()
// mengimport terlebih dahulu

// menampung port
const port = 8000
// menampung port

//mengirimkan data menggunakan hbs atau set view engine hbs
app.set('view engine', 'hbs')

app.use('/assets', express.static(__dirname + '/assets')) // routing, supaya datanya berjalan dan bisa ditampilkan

app.use(express.urlencoded({extended: false})) // untuk "app.post", menampilkan data ke terminal. Data supaya tampil ke terminal harus mengambil berdasarkan "name" yang ada di hbs. Cara ke 1

/* app.use(express.urlencoded()) */ // untuk "app.post", menampilkan data ke terminal. Data supaya tampil ke terminal harus mengambil berdasarkan "name" yang ada di hbs. Cara ke 2

app.get('/', function(request,response){ //menampilkan data menggunakan hbs
    response.render('index')
})

app.get('/contact', function(request,response){ //menampilkan data menggunakan hbs
    response.render('contact')
})

let isLogin = true

app.get('/blog', function(request,response){ //menampilkan data menggunakan hbs atau memanggil
    response.render('blog',{isLogin})
})

/* let nawa = 'bambang oleng' */ 
app.get('/blog-detail/:kod', function(request,response){ //menampilkan data menggunakan hbs. Params adalah penampung yang bisa di isi sesuai keinginan kita
    /* console.log(request.params.kod); //menangkap params "kod" */
    let kode = request.params.kod // membuat variabel untuk menampung params
    response.render('blog-detail',{  //cara mengirimkan data
        blog: {
            codes: kode, 
            tittle: 'selamat datang bro laksa',
            content: 'lorem ipsum',
            author: 'Trie Aji',
            postAt: '17 June 2022 '
        }
    })
    /* response.render('blog-detail',{nawa}) */
})

app.get('/add-blog', function(request,response){ //menampilkan data menggunakan hbs atau memanggil
    response.render('add-blog')
})

app.post('/add-blog', function(request,response){ // memanggil datanya atau memasukkan datanya. menangkap data hasil inputan
    console.log(request);
    console.log(request.body)
    /* console.log(request.body.inputCont) */ //apabila ingin menampilkan satu data saja
    response.redirect('/add-blog') //mengarahkan akses ke "blog" atau agar pindah ke halaman yang blognya
})

//mengirimkan data menggunakan hbs atau set view engine hbs

// menampilkan data di dalam server kita (ngodingnya disini)
app.get('/', function(request,response){
    response.send('Hello bro')
})

app.get('/user', function(request,response){
    response.send('Hello user')
})

app.get('/contact', function(request,response){
    response.send('Hello contact')
})
// menampilkan data di dalam server kita (ngodingnya disini)

// menjalankan import
app.listen(port, function(request, response){
    console.log(`Server running ${port}`)
})
/* app.listen(port, (request,response) => {
    console.log(`Example app listening on port ${port}`)
}) */

// menjalankan import
// note -> jangan lupa direfresh -> clear -> node index.js