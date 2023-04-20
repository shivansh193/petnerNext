import prisma from "../../lib/script";

function generateId() {
  const length = 10;
  const characters = "0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, description, date } = req.body;
    const finDate = new Date(date);
    const id = generateId();
    try {
      const newUser = await prisma.MyModel.create({
        data: {
          id: parseInt(id, 10),
          name: name,
          email: email,
          description: description,
          date: finDate,
        },
      });
      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Unable to create user" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
