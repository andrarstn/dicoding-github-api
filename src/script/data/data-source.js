class DataSource{
    static searchUsers(keyword){
        return fetch(`https://api.github.com/search/users?q=${keyword}`)
                .then(response => response.json())
                .then(data => {
                    if(data.items.length < 1) {
                        return `${keyword} not found`
                    }
                    return data.items
                })
    }

    static detailUser(user){
        return fetch(`https://api.github.com/users/${user}`)
                .then(response => response.json())
                .then(data => data)
    }
}

export default DataSource;