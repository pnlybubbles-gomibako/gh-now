const Koa = require('koa')
const cors = require('kcors')
const logger = require('koa-logger')
const serve = require('koa-static')
const route = require('koa-route')

const app = new Koa()
app.use(cors())
app.use(logger())
app.use(serve('public'))

app.use(route.get('/api', ctx => {
  ctx.body = {
    status: 'Hello, World'
  }
}))

app.listen(process.env.PORT || 3000)
