export function authHeader() {
    // return authorization header with jwt token
    let access_token = '';
    if (typeof window !== 'undefined') {
        access_token = typeof window !== 'undefined' ? localStorage.getItem('token') : '';
        //temp fix 
        if (!access_token) {
            let t = useCookie('token')
            access_token = typeof window!== 'undefined' ? t.value : '';
        }
    }
    
    if (access_token) {
        return { 'Authorization': 'Bearer ' + access_token };
    } else {
        return {};
    }
}
