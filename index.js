const { db } = require('./server/db')
const app = require('./server/app')
const PORT = 1337

db.sync({
  force : true
})
  .then(() => {
    console.log('connected to the database')
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
  })