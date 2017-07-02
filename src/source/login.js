'use strict';
const Cookies = require("js-cookie");
const LoginKey = "LoginKey";

let getUser = function () {
    return Cookies.getJSON(LoginKey)
};
//JSON.parse(localStorage.getItem("LoginKey"))
let setUser = function (userDto) {
    let str = userDto ? JSON.stringify(userDto) : "";
    return Cookies.set(LoginKey, str)
};

export {
    getUser, setUser, LoginKey
}



