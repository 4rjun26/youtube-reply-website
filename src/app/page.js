import Image from 'next/image'
import { Button } from '@/components/Chakra'
import PocketBase from 'pocketbase'
import Link from 'next/link'


export default async function Home() {
  return (
    <div>
      <Link href={'/login'}>Login</Link>
    </div>
  )
}
