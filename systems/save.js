const Save = {

    set(k,v){ localStorage.setItem(k,v); },
    get(k){ return localStorage.getItem(k); }
};
