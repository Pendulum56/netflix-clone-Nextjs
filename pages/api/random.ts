<<<<<<< HEAD
import prismadb from '@/lib/prisma.db'
import { NextApiRequest, NextApiResponse } from 'next'

import serverAuth from '@/lib/serverAuth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  try {
    await serverAuth(req)

    const movieCount = await prismadb.movie.count()
    const randomIndex = Math.floor(Math.random() * movieCount)

    const randomMoives = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    })
    return res.status(200).json(randomMoives[0])
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
=======
import prismadb from '@/lib/prisma.db'
import { NextApiRequest, NextApiResponse } from 'next'

import serverAuth from '@/lib/serverAuth'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  try {
    await serverAuth(req)

    const movieCount = await prismadb.movie.count()
    const randomIndex = Math.floor(Math.random() * movieCount)

    const randomMoives = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    })
    return res.status(200).json(randomMoives[0])
  } catch (error) {
    console.log(error)
    return res.status(400).end()
  }
}
>>>>>>> e892d88 (favorite list)
