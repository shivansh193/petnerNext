// pages/api/create-record.ts

import { PrismaClient } from '@prisma/client';

export default async function handler(req, res) {
  const prisma = new PrismaClient();
  
  try {
    const { name, email, description, date } = req.body;
    
    const result = await prisma.myModel.create({
      data: {
        name,
        email,
        description,
        date,
      },
    });
    
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    await prisma.$disconnect();
  }
}
