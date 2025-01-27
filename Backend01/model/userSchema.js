// import { DataTypes } from "sequelize";
// import { sequelize } from "../database/db";

// export const Users = sequelize.define("users", {
//     name:{
//         type:DataTypes.STRING,
//         allowNull: false,
//     },
//     userId: {
//         type:DataTypes.INTEGER,
//         allowNull: false,
//     },
// });
// (async () => {
//     try {
//         await Users.sync() // Creates or updates the table based on the 
//         console.log("The Users table has been created.");
        
//     } catch (error) {
//         console.log("Error syncing the Users model:", error.message);
        
//     }
// })