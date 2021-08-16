import './item-user.js'

class ListUsers extends HTMLElement{
    connectedCallback(){
        this.setAttribute("class", "row justify-content-center");
    }

    errorRender(color,message){
        this.innerHTML = `
            <div class="col-md-7" id="error-render">
                <div class="alert alert-${color} text-center" role="alert">
                    ${message}
                </div>
            </div>`
    }

    set users(users){
        this._users = users
        this.render()
    }

    render(){
        this._users.forEach(user => {
            const itemUser = document.createElement('item-user')
            itemUser.user = user
            itemUser.setAttribute("class", "col-md-4");
            this.appendChild(itemUser)
        });
    }
}

customElements.define("list-users", ListUsers);