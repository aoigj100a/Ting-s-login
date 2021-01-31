const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const checkForm = require('./login')

const port = 3000

//設定樣版引擎
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//告訴express靜態資源都放在public
app.use(express.static('public'))
//使用bodyParser轉碼 以取得表單資料
app.use(bodyParser.urlencoded({ extended: true }))

   app.get('/',(req,res)=>{
        res.render('index')
   })
   app.post('/login',(req,res)=>{
    //    console.log(`帳號：${req.body.email},密碼：${req.body.password}`)
      const result = checkForm(req.body)
      if(result.includes('歡迎')){
        res.send(`${result} <a href="/logout"><p>登出</p></a>`)
        
      }else{
        res.send(`${result}`)
      }
   })

   app.get('/logout', (req, res) => {
    res.redirect('/')
  })

   app.listen(port,()=>{
       console.log(`已經連線到http://localhost:${port}`)
   })