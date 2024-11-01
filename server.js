const Koa = require('koa')
const koa = new Koa()
const { koaBody } = require('koa-body')
const http = require('http')
const slow = require('koa-slow')
const cors = require('koa2-cors')
const { getRandomMessage } = require('./RandMess/index')

    // 'origin: "https://rail-g.github.io"'

koa.use(koaBody({
    urlencoded: true,
    multipart: true,
}))

koa.use(cors({
    origin: '*'
}))

koa.use(slow({
    delay: 5000
}))

koa.use((ctx) => {
    ctx.response.body = JSON.stringify(getRandomMessage())
})

const server = http.createServer(koa.callback())

server.listen(3030)