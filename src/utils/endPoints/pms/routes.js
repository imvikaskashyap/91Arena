
const path = (root,route) => `${root}${route}`

// Define Your Root Paths
const PTC_ROOTS = "/ptc/teaching-app";

// Next.js pages routes
export const _app_routes = {
    page404: '/404',
    page500: '/page500'
};

// Modules pages routes
export const _PTC_routes = {
    root: PTC_ROOTS,
    master:{
        dashboard:path(PTC_ROOTS,"/masters/dashboard")
    },
    auth:{
        signup:path(PTC_ROOTS,"/auth/signup")

    }
};
