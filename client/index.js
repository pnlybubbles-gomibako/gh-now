const html = require('choo/html')
const log = require('choo-log')
const choo = require('choo')

const BASE = process.env.NOW_BASE || location.origin

const app = choo()
app.use(log())
app.use(store)
app.route('/', main)
app.mount('body')

function main (state, emit) {
  return html`
    <body>
      <h1>${state.text}</h1>
      <button onclick=${onclick}>fetch</button>
    </body>
  `

  function onclick () {
    emit('request')
  }
}

function store (state, emitter) {
  state.text = 'no data'
  emitter.on('request', async () => {
    const res = await fetch(new URL('/api', BASE).toString()) 
    state.text = (await res.json()).status
    emitter.emit('render')
  })
}
