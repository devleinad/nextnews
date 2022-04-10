import Head from 'next/head'
import Image from 'next/image'
import { Toolbar } from '../components/Toolbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='w-full'>
        <Toolbar/>
    </div>
  )
}
