import Sequelize from "sequelize"

export const sequelize = new Sequelize({
    database: "Test1",
    port:5000,
    username:"postgres",
    password: "@interstellar123",
    host: "localhost",
    dialect: "postgres",
});

export const connection = async () => {
    try{
        await sequelize.authenticate();
        console.log("Connection has been established successfully.");
    }catch(error){
        console.log(error);
        console.log("Unable to connect to the database.");
    }
};
