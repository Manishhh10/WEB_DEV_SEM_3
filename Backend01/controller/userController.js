const getAllEmployee = async(req,res) => {
    console.log("Get Alls");
    try {
        const users = await Users.findAll();
        if (users.lenght == 0) {
            res
            .status(200)
        }
    } catch (error) {
        
    }
    
}