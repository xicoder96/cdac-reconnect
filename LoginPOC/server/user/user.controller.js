const userService = require('../user/user.service')

module.exports = {
    registerUser,
    logout,
    logoutAll,
    authenticate
};

async function registerUser(req, res) {
    // Create a new user
    try {
        console.log("Im here",req.body)
        const userToken = await userService.register(req.body)
        console.log("Im output",userToken)
        res.status(201).send(userToken)
    } catch (error) {
        res.status(400).send(error)
    }
}

async function authenticate(req, res) {
    //Login a registered user
    console.log("login Request",req.body)
    try {
        const user = await userService.authenticate(req.body)
        console.log("Ohhh",user)
        if (!user) {
            return res.status(401).send({ error: 'Login failed! Check authentication credentials' })
        }
        res.send({ user })
    } catch (error) {
        res.status(400).send(error)
    }
}

async function logout(req, res) {
    // Log user out of the application
    try {
        await userService.logout(req)
        res.send({ message: 'Logout Successfully' })
    } catch (error) {
        res.status(500).send(error)
    }
}

async function logoutAll(req, res) {
    // Log user out of the application
    try {
        await userService.logoutFromAll(req)
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
}