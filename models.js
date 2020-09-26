//Model Definition
//** DEFINING MODEL USING 'sequelize.define'
const { Sequelize, DataTypes, Model, SequelizeScopeError} = require('sequelize')
const sequelize = new Sequelize('sequelize','root','123456',{
     host:'localhost',
     dialect: 'mysql'     
})

const User = sequelize.define('User',{
     //Model attributes are defined here
     firstName: {
          type: DataTypes.STRING,
          allowNull: false
     },
     lastName: {
          type: DataTypes.STRING
          // allowNull defaults to true
     }
},{
     // Other model options go here
})

// 'sequelize.define' also returns the model
console.log(User === sequelize.models.User) // true

//** DEFINING MODEL EXTENDING MODEL
class UserExModel extends Model{}

UserExModel.init({
     //Model attributes are defined here
     firstName: {
          type: DataTypes.STRING,
          allowNull: false
     },
     lastName: {
          type: DataTypes.STRING
          // allowNull defaults to true
     }
}, {
     // Other model options go here
     sequelize, // We need to pass the connection instance
     modelName: 'UserExModel' // We need to choose the model name
})

//the defined model is the class itself
console.log(UserExModel === sequelize.models.UserExModel) // true

//** MODEL SYNC
User.sync() // This creates the table if it doesn't exist( and foes nothing if it already existis)
//User.sync({ force: true}) // This create the table, dropping it first if it already existed
//User.sync({ alter: true}) // This checks what is the current state of the table
//in the database (which columns it has, what are their data types, etc), and then
//performs the necesary changes in the table to make it match the model.

//** ALL MODELS SYNC
//sequelize.sync() 
//This can be used to automatically synchronize all models

//** DROPPING TABLES
//This drops the table on the database statement
//User.drop()
//This drops all tables owned by Sequelize instance on the database
//sequelize.sync()

//** DATABASE SAFETY CHECK
//This will run .sync() only if database name ends with '_test'
//sequelize.sync({force:true, match: /_test$/})




