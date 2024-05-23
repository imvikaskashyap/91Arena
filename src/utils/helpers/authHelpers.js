import CryptoJS from 'crypto-js';
import config from '../config/config';
import { axios } from '../config/apiRequest';

/* Alias auth variable */
const authAlias = '__SK&*TY';

function encrypt(data) {
    try {
        return CryptoJS.AES.encrypt(data, config.CRYPTO_SECRET_KEY).toString();
    }
    catch { return null; }
}

function decrypt(data) {
    try {
        return CryptoJS.AES.decrypt(data, config.CRYPTO_SECRET_KEY).toString(CryptoJS.enc.Utf8);
    }
    catch { return null; }
}


const getCredentials = () => {
    try {
        return JSON.parse(decrypt(localStorage.getItem(authAlias)))
    }
    catch (err) {
        return err
    }
}

const setSession = (data) => {
    if (data) {
        localStorage.setItem(authAlias, encrypt(JSON.stringify(data)));
        axios.defaults.headers.common.Authorization = `Bearer ${data?.access_token}`;
    } else {
        localStorage.removeItem(authAlias);
        delete axios.defaults.headers.common.Authorization;
    }
};

/* Single Sign On Token */
const getSSOToken = () => {
    const url = new URLSearchParams(window.location.search);
    const sso_token = url.get('sso_token');
    if (sso_token) return sso_token;
    const allCookies = document.cookie.split(';');
    for (let i = 0; i < allCookies.length; i += 1) {
        if (allCookies[i].split('=')[0].trim() === 'sso_token') {
            return allCookies[i].split('=')[1];
        }
    }
};

const logout = () => {
    localStorage.clear()
}

export {
    logout,
    setSession,
    getSSOToken,
    getCredentials,
    encrypt as encryptData,
    decrypt as decryptData
}