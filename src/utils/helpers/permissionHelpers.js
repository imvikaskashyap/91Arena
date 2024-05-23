const { store } = require("@/redux/store");

export const _checkRolePermissions = (moduleName, action, isMenu = false) => {
    // return true
    const { rolePermission } = store.getState();
    let isMenuAccess = rolePermission?.menus?.some((item) => item?.alias === moduleName)
    if (isMenuAccess) {
        if (isMenu) {
            return rolePermission?.menus?.some((item) => item.alias === `${moduleName}`)
        } else {
            return rolePermission?.permissions?.some((item) => item.permission_master.alias === `${moduleName}.${action}`)
        }
    } else {
        return false
    }
}