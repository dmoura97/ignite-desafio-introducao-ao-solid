import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User does not exists");
    }
    const isAdmin = user.admin;

    if (!isAdmin) {
      throw new Error("Access denied");
    }

    const users = this.usersRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase, IRequest };
