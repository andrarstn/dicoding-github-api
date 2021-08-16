class JumboTron extends HTMLElement{
    connectedCallback(){
        this.render()
    }
  
    render() {
       this.innerHTML = 
       `<div class="container-fluid h-100">
            <div class="row justify-content-center align-content-center h-100">
                <div class="col-md-7">
                    <h1 class="text-center">GitHub API</h1>
                    <h4 class="text-center">Find GitHub's Users Around the World</h4>
                    <div class="input-group mt-4">
                        <input type="text" class="form-control" id="keyword" placeholder="Enter GitHub's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <button class="btn btn-primary" id="btn-search">Search</button>
                    </div>
                </div>
            </div>
        </div>`
    }
}

customElements.define("jumbo-tron", JumboTron);