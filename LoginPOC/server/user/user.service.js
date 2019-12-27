const users = require('./user.model')

module.exports = {
    authenticate,
    validateToken,
    register,
    logout,
    getAll
};

async function authenticate({ email, password }) {
    console.log(email, password)
    try {
        const user = await users.findByCredentials(email, password)
        console.log("user cred =>", user)
        if (user) {
            const { _doc, ...others } = user;
            const {password,...userWithoutPassword} = _doc
            const token = await user.generateAuthToken()
            return { userWithoutPassword, token };
        }
        console.log("user not found")
        return null;
    } catch(e){
        console.log("Oops some error occured!",e)
        return null;
     }
   
}


async function validateToken({ userid, token }) {
    const user = await users.findOne({ _id: userid, 'tokens.token': token })
    if (!user) {
        throw new Error()
    }
    return user;
}

async function register(details) {
    console.log("details", details)
    const reguser = new users(details)
    await reguser.save()
    console.log("user", reguser)
    const token = await reguser.generateAuthToken()
    console.log("token", token)
    return { reguser, token }
}


async function getAll() {
    return users.map(u => {
        const { password, ...userWithoutPassword } = u;
        return userWithoutPassword;
    });
}

async function logout(req) {
    req.user.tokens = req.user.tokens.filter((token) => {
        return token.token != req.token
    })
    await req.user.save()
}


async function logoutFromAll(req) {
    req.user.tokens.splice(0, req.user.tokens.length)
    await req.user.save()
}