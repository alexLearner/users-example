import API from "./index";

class Users extends API {
  getUsers = () => this.get('/json/users.json')
}

export default Users;