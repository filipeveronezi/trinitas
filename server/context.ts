import { prisma } from '@/utils/prisma'
import { inferAsyncReturnType } from '@trpc/server'

export async function createContext() {
  return {
    prisma
  }
}

export type Context = inferAsyncReturnType<typeof createContext>
