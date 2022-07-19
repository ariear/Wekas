import connectMongo from "../../../lib/connectMongo"
import User from "../../../model/user"
import bcrypt from 'bcryptjs'

const registerApiHandle = async (req , res) => {
    if (req.method !== 'POST') return res.status(405).end()

    const {username , email , password} = req.body
    const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10))

    await connectMongo()
    const createUser = await User.create({
        'username': username,
        'email': email,
        'password': passwordHash
    })

    if (!createUser) return res.status(401).end()

    res.status(200).json({
        message: 'successfully registered',
        data: createUser
    })
}

export default registerApiHandle