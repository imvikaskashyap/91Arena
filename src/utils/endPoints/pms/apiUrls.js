import config from "@/utils/config/config"

const appPath = (route) => `${config.BaseURL}${route}`

// Define Your Api's End Points
export const _ptcEndPoints = {
    // Masters
    masters: {
        toBeDone: appPath('/v1/ptc/master/__tobedone')
    },
    app: {
        signUp: appPath('/v1/ptc/app/auth/sign-up'),
    }

}
