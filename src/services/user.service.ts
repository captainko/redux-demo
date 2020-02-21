import Axios from "axios";
import { IUser } from "src/interfaces/IUser";

class UserService {
  userApi = 'https://jsonplaceholder.typicode.com/users';
  async getUsers() {
    return Axios.get(this.userApi).then(({ data }: { data: IUser[] }) => data)
  }
}

export default new UserService();