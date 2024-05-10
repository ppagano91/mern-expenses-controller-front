import { USER_INFO } from "./consts";
export const getTokenFromStorage = () => {
    const userInfo = JSON.parse(localStorage.getItem(USER_INFO) || null);
    return userInfo?.token;
}