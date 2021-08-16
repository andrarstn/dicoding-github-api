import '../components/list-users.js'
import '../components/modal-detail.js'
import DataSource from '../data/data-source.js'

const main = () => {
    const btnSearch = document.querySelector('#btn-search')
    const keyword = document.querySelector('#keyword')
    const listUsers = document.querySelector('list-users')
    const modalDetail = document.querySelector('modal-detail')
    
    btnSearch.addEventListener('click', function(){
        
        // Jika keyword kosong
        if (keyword.value == "") {
            listUsers.errorRender('danger', `Keyword can't be empty`)
            return false
        }
        
        // Membersihkan error
        const errorRender = document.querySelector('#error-render')
        if (errorRender) {
            errorRender.remove()
        }
        
        // Membersihkan hasil sebelumnya
        const itemUsers = document.querySelectorAll('item-user')
        if (itemUsers) {
            itemUsers.forEach(item => {
                item.remove()
            });
        }
        getUsers(keyword.value)
        keyword.value = ''
    })

    // Event Binding
    document.addEventListener('click', async function(e) {
        if (e.target.classList.contains('btn-detail-modal')) {
            const username = e.target.dataset.login
            const response = await getUserDetail(username)
            if (response) {
                modalDetail.user = response
            }else{
                modalDetail.errorModal(response)
            }
        }
    })

    const getUsers = async(keyword) => {
        try {
            const results = await DataSource.searchUsers(keyword)
            listUsers.users = results
        } catch (error) {
            listUsers.errorRender('danger', 'User Not Found')
        }
    }

    const getUserDetail = async (username) => {
        try {
            const results = await DataSource.detailUser(username)
            return results
        } catch (error) {
            return error
        }
    }
}

export default main