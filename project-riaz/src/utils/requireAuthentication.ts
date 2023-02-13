export const requireAuthentication = async(context: any, cb: any) => {
    const session = true;
    if(!session) {
        return {
            redirect: {
                destination: "/login",
                permanent: false
            }
        }
    }

    return cb()
}