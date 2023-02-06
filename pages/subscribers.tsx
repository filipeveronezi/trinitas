import { trpc } from '@/utils/trpc'

export default function SubscribersPage() {
  const { data } = trpc.subscribers.useQuery()

  return (
    <div className="mx-auto mt-32 flex max-w-screen-xl flex-col justify-center">
      <div className="flex gap-5">
        <span className="font-bold">Nome</span>
        <span className="font-bold">E-mail</span>
      </div>
      {data?.map((subscriber) => {
        return (
          <div className="flex gap-5" key={subscriber.id}>
            <span>{subscriber.name}</span>
            <span>{subscriber.email}</span>
          </div>
        )
      })}
    </div>
  )
}
