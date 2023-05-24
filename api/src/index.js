const { config } = require('./config')
const createApp = require('./app')

const app = createApp()

app.listen(config.port, (err) => {
  console.log(config.port)
  if (err) {
    console.error('Error: ', err)
  }
})
