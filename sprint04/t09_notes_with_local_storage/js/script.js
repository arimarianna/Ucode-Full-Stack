let createPath = (str) => {
    let p = document.createElement('p');
    p.textContent = str;
    list.append(p);
}

let showCookies = () => {
    let cookies = document.cookie.split(';');
    if (!cookies || (cookies.length <= 1 && cookies[0] === ''))
        createPath('[Empty]');
    else
        for (let i in cookies) {
            createPath(`--> ${cookies[i].split('=')[1]}`);
            cookieCount++;
        }
}

let addCookies = () => {
    let text = text.value.trim();

    let expires = new Date();
    expires.setDate(expires.getDate() + 30);
    document.cookie = `${cookieCount}=${text};expires=${expires.toUTCString()};path=/`;

    createPath(`--> ${text}`);
    text.value = '';
    cookieCount++;
}

let clearCookies = () => {
    if (confirm("Are you sure?")) {

        document.querySelectorAll('#cookiesList p').forEach(p => p.remove());
        createPath('[Empty]');

        let all = document.cookie.split(';');
        for (let i in all)
            document.cookie = `${all[i].split('=')[0]}='';expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;

        cookieCount = 0;
    }
}

let list = document.querySelector("#cookiesList");
let text = document.querySelector("#text");
let cookieCount = 0;

showCookies();
