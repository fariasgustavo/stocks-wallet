import { Controller, Delete, Get, Post, Put } from '@overnightjs/core';
import { Response, Request } from 'express';
import { UserService } from '../services/user.service';

@Controller('users')
export class UserController {
  constructor(private service: UserService) {}

  @Post('')
  public async create(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;
      const newUser = await this.service.create(body);

      res.status(201).send(newUser);
    } catch (error) {
      res.status(500).send();
    }
  }

  @Get('')
  public async all(req: Request, res: Response): Promise<void> {
    try {
      const allUsers = await this.service.getAll();

      res.status(200).send(allUsers);
    } catch (error) {
      res.status(500).send();
    }
  }

  @Put(':userId')
  public async update(req: Request, res: Response): Promise<void> {
    try {
      const { body } = req;
      const { userId } = req.params;
      const updatedUser = await this.service.update(userId, body);

      if (!updatedUser) {
        res.status(404).send({ message: 'User doesnt exists', id: userId });

        return;
      }

      res.status(201).send(updatedUser);
    } catch (error) {
      res.status(500).send();
    }
  }

  @Delete(':userId')
  public async delete(req: Request, res: Response): Promise<void> {
    try {
      const { userId } = req.params;
      const deletedUser = await this.service.remove(userId);

      if (!deletedUser) {
        res.status(404).send({ message: 'User doesnt exists', id: userId });

        return;
      }

      res.status(201).send(deletedUser);
    } catch (error) {
      console.log({ error });
      res
        .status(500)
        .send({ message: 'Server error: DELETE /users/:userId', code: 3421 });
    }
  }
}
