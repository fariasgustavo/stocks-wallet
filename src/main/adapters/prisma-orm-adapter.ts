import { PrismaClient } from '@prisma/client';

export const adaptORM = (): PrismaClient => {
  return new PrismaClient();
};
