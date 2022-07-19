const unAuthpage = (ctx) => {
    const {token} = ctx.req.cookies
    if (!token) {
        ctx.res.writeHead(302, {
            location: '/auth/login'
        }).end()
    }
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