import prismadb from '@/lib/prisma.db'
import { hash } from 'bcrypt'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  try {
    const { email, name, password } = req.body
    // 查询注册用户是否存在
    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    })
    if (existingUser) {
      return res.status(422).json({ error: 'Email taken' })
    }
    // hash密码
    const hashedPassword = await hash(password, 12)

    // 注册用户
    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: '',
        emailVerified: new Date(),
      },
    })
    return res.status(200).json(user)
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
