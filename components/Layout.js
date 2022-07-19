import Head from 'next/head'

const Layout = ({children , title}) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            {children}
        </div>
    )
}

export default Layout