import Main from 'components/main'

type Props = {
  title: string
}

export default function Home({ title = 'Rfontt' }: Props) {
  return (
    <>
      <Main />
    </>
  )
}
