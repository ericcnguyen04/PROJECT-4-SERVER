require('dotenv').config()
const db = require('./models')
const express = require('express')
const router = express.Router()

const userTest = async () => {
  try {
    // CREATE
    const newUser = await db.user.create({
      name: 'we',
      email: 'w@e',
      password: 'we'
    })
  
    await newUser.save()
    console.log('newUser', newUser)

    // // READ
    // const foundUser =  await db.User.findOne({
    //   name: newUser.name
    // })

    // console.log('foundUser', foundUser)

    // // UPDATE
    // foundUser.name = 'bangBang'

    // await foundUser.save()

    // const findUserAgain = await db.User.findOne({
    //   name: 'bangBang'
    // })

    // console.log('findUserAgain', findUserAgain)

    // // DESTROY
    // const deleteUser = await db.User.deleteOne({
    //   name: 'bangBang'
    // })

    // console.log('deleteUser', deleteUser)

    // we done
    process.exit()
  } catch (error) {
    console.log(error)
    process.exit()
  }
}

userTest()