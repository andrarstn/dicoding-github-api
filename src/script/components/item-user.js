class ItemUser extends HTMLElement{
    set user(user){
        this._user = user
        this.render()
    }

    render(){
        this.innerHTML = `
            <div class="card mb-3 w-100">
                <div class="row g-0 justify-content-center">
                    <div class="col-6 col-md-4">
                        <img src="${this._user.avatar_url}" class="img-fluid rounded-start" alt="Profile Picture ${this._user.login}" />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body text-center text-md-start">
                            <h5 class="card-title">
                                <a target="_blank" rel="noopener noreferrer" class="text-decoration-none text-dark" href="${this._user.html_url}">
                                    ${this._user.login}
                                </a>
                            </h5>
                            <button type="button" data-bs-toggle="modal" data-bs-target="#detailModal" class="btn btn-sm btn-primary btn-detail-modal" data-login="${this._user.login}">
                                Detail
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define("item-user", ItemUser);