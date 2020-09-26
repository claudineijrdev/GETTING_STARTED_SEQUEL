const {Sequelize} = require('sequelize')

//Option 1: Passing a connection URI
//const sequelize = new Sequelize('mysel://root@123456@localhost:3306/sequelize'

//Opttion 2: Passing parameters separately 
const sequelize = new Sequelize('sequelize','root','123456',{
     host:'localhost',
     dialect: 'mysql'     
})

sequelize.authenticate().then(()=>{
     console.log('Connection has been established seccessfully')
}).catch((err) =>{
     console.log( err)
})
/*  
sequelize.close().then(() =>{
     console.log('Connection has been closed')
}).catch((err)=>{ console.log(err)})
*/
