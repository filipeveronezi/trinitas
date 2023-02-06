import { Prisma } from '@prisma/client'
import { z } from 'zod'
import { procedure, router } from '../trpc'
export const appRouter = router({
  preSubscriptionRemainingSlots: procedure.query(async ({ input, ctx }) => {
    const count = await ctx.prisma.preSubscription.count()

    return {
      remainingSlots: 40 - count
    }
  }),

  createPreSubscription: procedure
    .input(
      z.object({
        email: z.string().email(),
        name: z.string()
      })
    )
    .mutation(async ({ input, ctx }) => {
      try {
        if ((await ctx.prisma.preSubscription.count()) >= 40) {
          try {
            await ctx.prisma.waitListSubscription.create({
              data: {
                email: input.email,
                name: input.name
              }
            })
            return {
              success: false,
              message: 'No more slots available'
            }
          } catch (error) {
            console.log(error)
            return {
              success: false,
              message: 'No more slots available'
            }
          }
        }

        await ctx.prisma.preSubscription.create({
          data: {
            email: input.email,
            name: input.name
          }
        })
        return {
          success: true,
          message: 'Successfully created pre-subscription'
        }
      } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          if (error.code === 'P2002') {
            return {
              success: false,
              message: 'Email already registered'
            }
          }
        }
        return {
          success: false,
          message: 'Unknown error'
        }
      }
    }),

  subscribers: procedure.query(async ({ ctx }) => {
    const subscribers = await ctx.prisma.preSubscription.findMany({
      orderBy: {
        name: 'asc'
      }
    })

    return subscribers
  })
})

export type AppRouter = typeof appRouter
