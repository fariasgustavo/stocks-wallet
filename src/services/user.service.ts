import { UserModelDTO } from '../models/dtos/repositories-model.dto';
import { RepositoryProtocol } from '../repositories/protocols/repository.protocol';

export class UserService {
  constructor(private userRepository: RepositoryProtocol) {}

  getAll(): any {
    return this.userRepository.findAll();
  }

  create(model: UserModelDTO): any {
    return this.userRepository.create(model);
  }

  async update(userId: string, model: UserModelDTO): Promise<any> {
    const userExists = !!(await this.userRepository.findOne(userId));

    if (!userExists) return false;

    const updatedUser = await this.userRepository.update(userId, model);

    return { ...updatedUser._doc, ...model };
  }

  async remove(userId: string): Promise<any> {
    const userExists = !!(await this.userRepository.findOne(userId));

    if (!userExists) return false;

    return this.userRepository.remove(userId);
  }
}
