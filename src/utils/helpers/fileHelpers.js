import moment from 'moment';
import { apiRequest, apiRequestForMediaFiles } from '../config/apiRequest';

export const fileUploadToS3 = async (file, dirName = '') => {
    try {
        file = new File([file], `${Date.now()}-${file.name}`, { type: file.type });
        const payload = new FormData();
        payload.append("file", file);
        payload.append("folder_name", dirName)
        const { data, status } = await CommonController.uploadFileToS3(payload);
        let response = {
            pathname: "",
        }
        if (status) {
            response.pathname = data.length > 0 ? data[0] : ""
        }
        return response
    } catch (err) {
        console.log('err in fileUploadToS3 : ', err);
        return null;
    }
};

export const fileDeleteFromS3 = async (file) => {
    try {
        let endPoint = file;
        if (file.startsWith("/")) {
            endPoint = file.substring(1);
        }
        let data = await apiRequest({
            method: "DELETE",
            params: [endPoint]
        })
        return data
    } catch (err) {
        return null;
    }
};

export const validateImageFileType = (formate) =>
    ['image/png', 'image/jpg', 'image/jpeg', 'image/gif', 'image/bmp', 'image/svg', 'image/svg+xml'].includes(formate);


export const validateDocFileType = (formate) =>
    ['image/png', 'image/jpg', 'image/jpeg'].includes(formate);

export const downloadFile = async (url, params, fileName) => {
    try {
        let { data, status } = await apiRequestForMediaFiles({
            method: "GET",
            endUrl: url,
            query: params
        })
        if (status) {
            let _fileName = fileName || "file_name"
            // let _fileName = fileName || response.headers.get('Content-Disposition')?.split('filename=')?.[1];

            const _url = data?.url
            const link = document.createElement("a");

            /* appending current time in filename */
            _fileName = _fileName.split('.');
            _fileName = `${_fileName[0]}-${moment().format('MM-DD-YYYY')}.${_fileName[1]}`;

            /* setting attributes */
            link.href = _url;
            link.setAttribute("download", _fileName);
            link.setAttribute("target", "_blank");

            /* appending it to body */
            document.body.appendChild(link);
            link.click(); /* triggering click manually */
        }
    } catch (error) {
        console.error('🚀 ~ file: helper.js ~ downloadFile ~ error:', error);
        throw error;
    }
};


