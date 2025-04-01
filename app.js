const express = require('express')
const app = express()
const port = 3000

const {engine} = require('express-handlebars')

// setting template engine
// 第一個參數是這個樣板引擎的名稱, 第二個參數是放入和此樣板引擎相關的設定。這裡設定了預設的佈局（default layout）需使用名為 main 的檔案。
app.engine('handlebars', engine({defaultLayout : 'main'}))
// 透過這個方法告訴 Express 說要設定的 view engine 是 handlebars。
app.set('view engine', 'handlebars')
// 告訴 Express 靜態檔案是放在名為 public 的資料夾中，它不必針對這個資料夾內的檔案做什麼，只要產生對應的路由讓我們可以使用就好。
app.use(express.static('public'))

// setting routes
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/restaurant/:restaurant_id', (req, res) => {
  res.render('show')
})

app.listen(port, () => {
  console.log("it's working now")
})