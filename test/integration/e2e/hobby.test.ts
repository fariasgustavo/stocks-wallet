import { hobby as Hobby } from '../../models/entities/hobby.entity';
import { setupTestServer } from '../../helper';

jest.setTimeout(30000);

describe('Routes: Hobbies', () => {
  const mockedId = '56cb91bdc3464f14678934ca';
  const mockedHobby = {
    _id: mockedId,
    experienceLevel: 10,
    name: 'Gustavo',
    year: 2021,
    __v: 0,
  };

  beforeAll(async () => {
    await setupTestServer();
  });

  beforeEach(async () => {
    await Hobby.deleteMany();

    const hobby = new Hobby(mockedHobby);
    hobby._id = '56cb91bdc3464f14678934ca';

    return await hobby.save();
  });

  afterEach(async () => await Hobby.deleteMany());

  describe('GET /hobbies', () => {
    it('Should return a list of Hobbies', async () => {
      const { body, status } = await global.testRequest.get('/hobbies');

      expect(status).toBe(200);
      expect(body).toEqual({});
    });
  });

  describe('POST /hobbies', () => {
    it('Should return a new stored Hobby', async () => {
      const newHobby = {
        experienceLevel: 10,
        name: 'Kart Driving',
        year: 2021,
      };

      const { body, status } = await global.testRequest
        .post('/hobbies')
        .send(newHobby);

      expect(status).toBe(201);

      expect(body).toEqual(expect.objectContaining(newHobby));
    });
  });

  describe('PUT /hobbies/:id', () => {
    it('Should return a updated Hobby', async () => {
      const hobby = {
        experienceLevel: 10,
        name: 'Kart Driving',
        year: 2021,
      };

      const newHobby = await Hobby.create(hobby);
      const { id: newHobbyId } = newHobby;

      const updatedHobby = {
        name: 'Play Basketball',
      };

      const { body, status } = await global.testRequest
        .put(`/hobbies/${newHobbyId}`)
        .send(updatedHobby);

      expect(status).toBe(201);

      expect(body).toEqual(expect.objectContaining(updatedHobby));
    });
  });

  describe('DELETE /hobbies/:id', () => {
    it('Should return a deleted Hobby', async () => {
      const hobby = {
        experienceLevel: 20,
        name: 'Kart Driving',
        year: 2021,
      };

      const newHobby = await Hobby.create(hobby);
      const { id: newHobbyId } = newHobby;

      const { body, status } = await global.testRequest.delete(
        `/hobbies/${newHobbyId}`,
      );

      expect(status).toBe(201);

      expect(body).toEqual(expect.objectContaining(hobby));
    });
  });
});
