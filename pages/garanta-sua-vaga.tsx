import { Button } from '@/components/Button'
import { ErrorMessage } from '@/components/ErrorMessage'
import { Message } from '@/components/Message'
import { PreSubscriptionSkeletonLoading } from '@/components/PreSubscriptionSkeletonLoading'
import { PreSubscriptionSuccess } from '@/components/PreSubscriptionSuccess'
import { trpc } from '@/utils/trpc'
import Head from 'next/head'
import { useState } from 'react'

export default function GarantaSuaVagaPage() {
  const { data } = trpc.preSubscriptionRemainingSlots.useQuery()
  const { mutateAsync: createPreSubscription } = trpc.createPreSubscription.useMutation({})

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const { success, message } = await createPreSubscription({ email, name })

      if (success) {
        return setSuccess(true)
      }

      if (!success && message === 'No more slots available') {
        return setMessage('😁 Você está na nossa lista de espera! Qualquer novidade, avisaremos por e-mail.')
      }

      if (!success && message === 'Email already registered') {
        return setErrorMessage('Este email já está cadastrado.')
      }

      return setErrorMessage('Ocorreu um erro. Tente novamente mais tarde.')
    } catch (error) {
      console.log('error: ', error)
    }
  }

  return (
    <>
      <Head>
        <title>Garanta sua vaga | Curso Trinitas</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="description" content="Um curso aberto de teologia para cristãos interessados em crescer em conhecimento bíblico e teológico e em servir à igreja local" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Garanta sua vaga | Curso Trinitas" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cursotrinitas.com.br/garanta-sua-vaga" />
        <meta property="og:title" content="Garanta sua vaga | Curso Trinitas" />
        <meta property="og:description" content="Um curso aberto de teologia para cristãos interessados em crescer em conhecimento bíblico e teológico e em servir à igreja local" />
        <meta property="og:image" content="/trinitas-introduction.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.cursotrinitas.com.br/garanta-sua-vaga" />
        <meta property="twitter:title" content="Garanta sua vaga | Curso Trinitas" />
        <meta property="twitter:description" content="Um curso aberto de teologia para cristãos interessados em crescer em conhecimento bíblico e teológico e em servir à igreja local" />
        <meta property="twitter:image" content="/trinitas-introduction.png" />
      </Head>
      <main className="mx-auto mt-32 flex min-h-screen max-w-3xl flex-col gap-6 px-10 lg:items-center">
        {data?.remainingSlots === undefined ? (
          <PreSubscriptionSkeletonLoading />
        ) : (
          <>
            {success ? (
              <PreSubscriptionSuccess />
            ) : (
              <>
                <ErrorMessage onClick={() => setErrorMessage('')} isActive={errorMessage !== ''}>
                  {errorMessage}
                </ErrorMessage>
                <Message onClick={() => setMessage('')} isActive={message !== ''}>
                  {message}
                </Message>
                <h1 className="text-5xl font-bold leading-tight lg:text-center lg:text-6xl">Garanta sua vaga no Curso Trinitas 2023</h1>
                <p className="max-w-max rounded-xl bg-black p-4 text-xl font-bold text-white lg:text-2xl">Vagas restantes: {data?.remainingSlots}</p>
                <h2 className="text-2xl lg:text-center lg:text-3xl">{data.remainingSlots > 0 ? 'Realize sua pré-inscrição através do formulário: ' : 'Infelizmente as vagas acabaram, mas você ainda pode se inscrever na nossa lista de espera: '}</h2>
                <form className="flex w-full flex-col gap-7" action="submit" onSubmit={(event) => handleSubmit(event)}>
                  <input className="rounded-lg border-none bg-gray-200 p-4 text-lg font-medium" value={name} onChange={(event) => setName(event.target.value)} type="text" placeholder="Nome" id="name" />
                  <input
                    className="rounded-lg border-none bg-gray-200 p-4 text-lg font-medium"
                    value={email}
                    onChange={(event) => {
                      setEmail(event.target.value)
                      setErrorMessage('')
                    }}
                    type="email"
                    placeholder="E-mail"
                    id="email"
                  />
                  <Button color="white" type="submit">
                    Inscrever-se
                  </Button>
                </form>
              </>
            )}
          </>
        )}
      </main>
    </>
  )
}
