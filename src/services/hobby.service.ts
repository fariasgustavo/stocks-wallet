import { HobbyModelDTO } from '../models/dtos/repositories-model.dto';
import { RepositoryProtocol } from '../repositories/protocols/repository.protocol';

export class HobbyService {
  constructor(private hobbyRepository: RepositoryProtocol) {}

  getAll(): any {
    return this.hobbyRepository.findAll();
  }

  create(model: HobbyModelDTO): any {
    return this.hobbyRepository.create(model);
  }

  async update(hobbyId: string, model: HobbyModelDTO): Promise<any> {
    const hobbyExists = !!(await this.hobbyRepository.findOne(hobbyId));

    if (!hobbyExists) return false;

    const updatedHobby = await this.hobbyRepository.update(hobbyId, model);

    return { ...updatedHobby._doc, ...model };
  }

  async remove(hobbyId: string): Promise<any> {
    const hobbyExists = !!(await this.hobbyRepository.findOne(hobbyId));

    if (!hobbyExists) return false;

    return this.hobbyRepository.remove(hobbyId);
  }
}
