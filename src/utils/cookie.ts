const cookie = {
    get(name: any) {
        var cookieName = encodeURIComponent(name) + "=",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieValue = null;

        if (cookieStart > -1) {
            var cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd > -1) {
                cookieEnd = document.cookie.length;
            }
            cookieValue = decodeURIComponent(
                document.cookie.substring(
                    cookieStart + cookieName.length,
                    cookieEnd
                )
            );
        }

        return cookieValue;
    },
    set(name: any, value: any, expires: Date, path: string, domain: string, secure: boolean) {
        var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);

        if (expires instanceof Date) {
            cookieText += '; expires=' + expires.toUTCString();
        }

    },
};

export default cookie;
