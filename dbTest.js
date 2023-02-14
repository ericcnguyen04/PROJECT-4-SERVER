// require('dotenv').config()
// const express = require('express')
const db = require('./models') // changed to ../../
// const router = express.Router()


// const userTest = async () => {
//   try {
//     // CREATE
//     const newUser = await db.user.findOrCreate({
//       name: 'ad',
//       email: 'd@d',
//       password: 'ad'
//     })
  
//     await newUser.save()
//     console.log('newUser', newUser)

    // // READ
    // const foundUser =  await db.User.findOne({
    //   name: newUser.name
    // })

//     console.log('foundUser', foundUser)

//     // UPDATE
//     foundUser.name = 'bangBang'

//     await foundUser.save()

//     const findUserAgain = await db.User.findOne({
//       name: 'bangBang'
//     })

//     console.log('findUserAgain', findUserAgain)

//     // DESTROY
//     const deleteUser = await db.User.deleteOne({
//       name: 'bangBang'
//     })

//     console.log('deleteUser', deleteUser)

//     // we done
//     process.exit()
//   } catch (error) {
//     console.log(error)
//     process.exit()
//   }
// }

// userTest()

const clothing = async () => {
  try {
    const newUser = await db.user.findOne({
      name: 'test'
    })

  
      const clothing = await db.fit.create({
          nickname: 'eric',
          type: 'shirt',
          status: false,
          favorite: true,
          duration: '420 days',
        })

          clothing.userId = newUser.id
          await clothing.save()
          console.log('newUser', newUser)


      } catch (err) {
      console.log(err)
  }
}

clothing()

// const userTest = async () => {
//   try {
//     // CREATE
//     const newUser = await db.user.create({
//       name: 'test',
//       email: 'test@test',
//       password: 'test'
//     })
  
//     await newUser.save()
//     console.log('newUser', newUser)

//     process.exit()
//   } catch (error) {
//     console.log(error)
//     process.exit()
//   }
// }

// userTest()