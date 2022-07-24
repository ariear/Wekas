import Layout from "./Layout"
import Image from "next/image"

const LoadingPage = () => {
    return (
        <Layout title="Loading">
            <div className="min-h-screen flex justify-center items-center">
                <div className="w-[95vw] lg:w-[97vw] xl:w-[1260px] 2xl:w-[1500px] min-h-[90vh] bg-[#7C83FD] flex justify-center">
                    <Image src="/infinity-loading.svg" width="100" height="100" />
                </div>
            </div>
        </Layout>
    )
}

export default LoadingPage