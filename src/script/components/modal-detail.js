class ModalDetail extends HTMLElement{
    connectedCallback(){
        this.modalDefault()
    }

    set user(user){
        console.log(user);
        this._user = user
        this.updateModal()
    }

    modalDefault() {
        this.innerHTML = 
        `<div class="modal fade" id="detailModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">User Detail</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>`
    }
  
    updateModal() {
       const modalBody =document.querySelector(".modal-body")
       const content = `
                    <div class="card py-4">
                        <img src="${this._user.avatar_url}" class="card-img-top w-25 m-auto">
                        <div class="card-body">
                            <h1 class="card-title text-center">
                                <a target="_blank" rel="noopener noreferrer" class="text-decoration-none text-dark" href="${this._user.html_url}">
                                    ${this._user.name}
                                </a>
                            </h1>
                            <h3 class="card-title text-center text-secondary">${this._user.login}</h3>
                            <div class="row">
                                <div class="col">
                                    <span class="badge bg-primary w-100">Repository: ${this._user.public_repos}</span>
                                </div>
                                <div class="col">
                                    <span class="badge bg-success w-100">Following: ${this._user.following}</span>
                                </div>
                                <div class="col">            
                                    <span class="badge bg-danger w-100">Followers: ${this._user.followers}</span>
                                </div>
                            </div>
                        </div>
                    </div>
       `
       modalBody.innerHTML = content
    }

    errorModal(message){
        const modalBody =document.querySelector(".modal-body")
        const content = `
            <div class="alert alert-danger text-center" role="alert">
                ${message}
            </div>`
        modalBody.innerHTML = content
    }
}

customElements.define("modal-detail", ModalDetail);