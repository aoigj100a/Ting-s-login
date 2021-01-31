function checkForm(form) {
    
    if (form.email === "") {
        return "請填寫帳號或電子郵件!";
    }
    if (!checkmail(form.email)) {
        return "電子郵件格式錯誤";
    }

    if (!form.password) {
        if (form.password === '') {
            return "密碼不可以空白!";
        }
    } else if (form.password.length < 5 || form.password.length > 10) {
        console.log(form.password.length)
        return "密碼長度只能5到10個字母 !";
    } else {
        for (let idx = 0; idx < form.password.length; idx++) {
            if (form.password.charAt(idx) === ' ' || form.password.charAt(idx) == '\"') {
                return "密碼不可以含有空白或雙引號 !";
            }
        }
    }
    if(!accountLogin(form)){
        return "你的 Mail 或 密碼 錯誤囉! 請重新輸入";
    }else{
        return `歡迎${accountLogin(form)}登入～`;
    }

}

function checkmail(myEmail) {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(myEmail)) {
        return true;
    }
    return false;
}

function accountLogin(options) {

    const users = [
        {
            firstName: 'Tony',
            email: 'tony@stark.com',
            password: 'iamironman'
        },
        {
            firstName: 'Steve',
            email: 'captain@hotmail.com',
            password: 'icandothisallday'
        },
        {
            firstName: 'Peter',
            email: 'peter@parker.com',
            password: 'enajyram'
        },
        {
            firstName: 'Natasha',
            email: 'natasha@gamil.com',
            password: '*parol#@$!'
        },
        {
            firstName: 'Nick',
            email: 'nick@shield.com',
            password: 'password'
        },
        {
            firstName: 'Test',
            email: 'test@test.com',
            password: '12345678'
        }
    ]
    //先利用使用者輸入的email來尋找users內有沒有相同的資料並存入account
    let account = users.find(user => user.email === options.email)
    //比對options 與 users 是否有相同資訊
    if (!account || (account.password !== options.password)) {
        return false
    } else {
        return account.firstName
    }

}

module.exports = checkForm