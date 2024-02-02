'use client'
import React from 'react'

import TopBar from '@/components/TopBar'
import SideNavBar from '@/components/SideNavBar'


import styles from '../styles/Feed.module.css'
import Head from 'next/head';
import Image from 'next/image'

import {
  Spinner,
} from '../../components/Chakra'




  
export default function loading() {
  return (
    
    <div className={styles.body}>
    <Head>
       <link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' />
       <link href='https://fonts.googleapis.com/css?family=Alegreya SC' rel='stylesheet' />
   </Head>
    <section className={styles.herosection} id="hero" style={{"transitionDuration":"0.4s"}}>
    <TopBar/>
   
   <div className={styles.outerdiv}>
   <SideNavBar />
   <div className={styles.myaccdiv}>
                  
   <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
  m={'auto'}
/>   
                        
                              </div>
   </div>
</section>
  </div>

  )
}
