import jwt from 'jsonwebtoken'

const authServer = (req , res) => {
    const {authorization} = req.headers
    if (!authorization) return res.status(401).end()
    
    const splitToken = authorization.split(' ')
    const [tokenType , tokenValue] = splitToken

    if (tokenType !== 'Bearer') return res.status(401).end()

    try {
        return jwt.verify(tokenValue, process.env.SECRET_OR_PUBLIC_KEY)
    } catch (error) {
        return res.status(401).end()
    }
    
}

export default authServer