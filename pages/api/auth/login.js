import connectMongo from "../../../lib/connectMongo"
import User from "../../../model/user"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const loginApiHandle = async (req, res) => {
    if (req.method !== 'POST') return res.status(405).end()
    
    const {email, password} = req.body
    await connectMongo()
    const getUser = await User.findOne({ email })

    if (!getUser) return res.status(401).end()
    
    const pw = bcrypt.compareSync(password, getUser.password)
    if (!pw) return res.status(401).end()
    if (pw) {

        const token = jwt.sign({
            id: getUser._id,
            username: getUser.username,
            email: getUser.email
        }, process.env.SECRET_OR_PUBLIC_KEY, {
            expiresIn: '30d'
        })

        res.status(200).json({
            message: 'Login Successfully',
            data: getUser,
            token
        })
    }

}

export default loginApiHandle