import { Controller, Delete, Get, Post, Put } from '@overnightjs/core';
import { Response, Request } from 'express';
import { HobbyService } from '../services/hobby.service';

@Controller('hobbies')
export class HobbyController {
  constructor(private service: HobbyService) {}

  @Post('')
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;
      console.log({ req: req.body });
      const newHobby = await this.service.create(body);

      res.status(201).send(newHobby);
    } catch (error) {
      console.error({ error });
    }
  }

  @Get('')
  public async all(req: Request, res: Response): Promise<void> {
    try {
      const allHobbies = await this.service.getAll();

      res.status(200).send(allHobbies);
    } catch (error) {
      console.error({ error });
    }
  }

  @Put(':hobbyId')
  public async update(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;
      const { hobbyId } = req.params;
      const updatedHobby = await this.service.update(hobbyId, body);

      if (!updatedHobby) {
        res.status(404).send({ message: 'Hobby doesnt exists', id: hobbyId });

        return;
      }

      res.status(201).send(updatedHobby);
    } catch (error) {
      console.error({ error });
    }
  }

  @Delete(':hobbyId')
  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const { hobbyId } = req.params;
      const deletedHobby = await this.service.remove(hobbyId);

      if (!deletedHobby) {
        res.status(404).send({ message: 'Hobby doesnt exists', id: hobbyId });

        return;
      }

      res.status(201).send(deletedHobby);
    } catch (error) {
      console.error({ error });
    }
  }
}
