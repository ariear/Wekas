import jwt from 'jsonwebtoken'

const unAuthpage = (ctx) => {
    const {token} = ctx.req.cookies
    if (!token) {
        ctx.res.writeHead(302, {
            location: '/auth/login'
        }).end()
    }

    return jwt.verify(token, process.env.SECRET_OR_PUBLIC_KEY)
}

const authpage = (ctx) => {
    const {token} = ctx.req.cookies
    if (token) {
        ctx.res.writeHead(302, {
            location: '/'
        }).end()
    }
}

export {unAuthpage , authpage}