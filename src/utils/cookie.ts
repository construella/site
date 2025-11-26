interface CookieAttributes {
    expires?: number | Date;
    path?: string;
    domain?: string;
    secure?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
}

const Cookies = {
    get: (name: string): string | undefined => {
        if (typeof document === 'undefined') return undefined;
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
        return undefined;
    },
    set: (name: string, value: string, options?: CookieAttributes) => {
        if (typeof document === 'undefined') return;
        options = options || {};
        let expires = "";
        if (options.expires) {
            if (typeof options.expires === 'number') {
                const date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            } else if (options.expires.toUTCString) {
                expires = "; expires=" + options.expires.toUTCString();
            }
        }
        let path = options.path ? "; path=" + options.path : "; path=/";
        let domain = options.domain ? "; domain=" + options.domain : "";
        let secure = options.secure ? "; secure" : "";
        let sameSite = options.sameSite ? "; samesite=" + options.sameSite : "";
        
        document.cookie = name + "=" + encodeURIComponent(value) + expires + path + domain + secure + sameSite;
    },
    remove: (name: string, options?: CookieAttributes) => {
        Cookies.set(name, "", { ...options, expires: -1 });
    }
};

export default Cookies;
