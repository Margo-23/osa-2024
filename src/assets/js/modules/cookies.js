const cookies = document.querySelector('#cookies');
const cookiesButton = document.querySelector('.cookies-btn');

function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return !1;
}

function setCookie(name, value = !0, days = 99999) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = days ? '; expires=' + date.toGMTString() : '';
    document.cookie = name + '=' + value + expires + '; path=/';
}


if(cookies){
    const cookiesData = getCookie('privacy-accepted');
    cookiesButton.addEventListener('click', ()=>{
        cookies.classList.add('hide');
        setCookie('privacy-accepted', !0, 99999);
    })
    if (cookiesData === 'false') {
        setTimeout(()=>{
            cookies.classList.remove('hide');
        }, 1000);
    }
}
