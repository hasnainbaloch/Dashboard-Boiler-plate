const login = function (values) {
    const {username, password} = values;
    console.log()
    if (username && password) {
        localStorage.setItem('isLogin', JSON.stringify({username, password}));
        return true;
    } else {
        localStorage.clear();
        return false
    };
};

export default login;