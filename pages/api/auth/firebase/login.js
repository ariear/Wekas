import connectMongo from "../../../../lib/connectMongo"
import User from "../../../../model/user"
import jwt from 'jsonwebtoken'

const loginFirebaseHandle = async (req ,res) => {
    if (req.method !== 'POST') return res.status(405).end()

    const { imgprofile , username , email } = req.body
    await connectMongo()

    const getUser = await User.findOne({
        email,
        isFirebase: true
    })
    if (!getUser) return res.status(401).end()
    
        const token = jwt.sign({
            imgprofile,
            username,
            email,
            isFirebase: true
        }, process.env.SECRET_OR_PUBLIC_KEY, {
            expiresIn: '30d'
        })

        res.status(200).json({
            message: 'Authenticate successfully',
            data: getUser,
            token 
        })

}

export default loginFirebaseHandle