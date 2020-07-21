const { db, User } = require('./server/db')

const users = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com'
  },
  {
    firstName: 'Jane',
    lastName: 'Snow',
    email: 'janesnow@gmail.com'
  }
]

const seed = async () => {
  await db.sync(
    {force : true}
  )

  await Promise.all(users.map(user => {
    return User.create(user)
  }))

  console.log('Seeding success!')
  db.close()    
}

seed()
  .catch(err => {
    console.error(err)
    db.close()
  })
  