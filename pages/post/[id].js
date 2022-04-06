import { useRouter } from "next/router"
import Link from 'next/link'

export default function Post() {

  const router = useRouter();

  console.log(router)
  return (
    <>
          <div>
      id do post atual: {router.query.id}
      </div>
      <ul>
        <li>
        <Link href="/">
        <a>Ir para Home Page</a>
      </Link>
        </li>
      </ul>
    
    </>


  )
}
