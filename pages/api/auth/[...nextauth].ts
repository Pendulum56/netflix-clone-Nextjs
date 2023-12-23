<<<<<<< HEAD
import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'
import { compare } from 'bcrypt'
import prismadb from '@/lib/prisma.db'

import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        // 输入邮箱或密码为空时返回错误
        if (!credentials?.email || !credentials.password) {
          throw new Error('Email and Password required')
        }

        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email,
          },
        })
        // 查询不到用户返回错误
        if (!user || !user.hashedPassword) {
          throw new Error('Email does not exist')
        }
        // 验证密码
        const isCorrectPassword = await compare(
          credentials.password,
          user.hashedPassword
        )
        // 密码错误返回
        if (!isCorrectPassword) {
          throw new Error('Incorrect Password')
        }
        return user
      },
    }),
  ],
  pages: {
    signIn: '/auth',
  },
  debug: process.env.NODE_ENV === 'development',
  adapter: PrismaAdapter(prismadb),
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
})
=======
import NextAuth from 'next-auth/next'
import Credentials from 'next-auth/providers/credentials'
import { compare } from 'bcrypt'
import prismadb from '@/lib/prisma.db'

import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        // 输入邮箱或密码为空时返回错误
        if (!credentials?.email || !credentials.password) {
          throw new Error('Email and Password required')
        }

        const user = await prismadb.user.findUnique({
          where: {
            email: credentials.email,
          },
        })
        // 查询不到用户返回错误
        if (!user || !user.hashedPassword) {
          throw new Error('Email does not exist')
        }
        // 验证密码
        const isCorrectPassword = await compare(
          credentials.password,
          user.hashedPassword
        )
        // 密码错误返回
        if (!isCorrectPassword) {
          throw new Error('Incorrect Password')
        }
        return user
      },
    }),
  ],
  pages: {
    signIn: '/auth',
  },
  debug: process.env.NODE_ENV === 'development',
  adapter: PrismaAdapter(prismadb),
  session: {
    strategy: 'jwt',
  },
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
})
>>>>>>> e892d88 (favorite list)
