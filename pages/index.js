import Link from 'next/link'


function HomePage() {
  return (
    <>
      <img src="image/avatar.jpg"></img>
      <div>Welcome to Next.js!</div>
      <Link href="/sobre">
        <a>Ir para Sobre</a>
      </Link>
    </>
  )
}
export default HomePage
