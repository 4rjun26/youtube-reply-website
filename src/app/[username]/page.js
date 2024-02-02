import React from 'react'

import TopBar from '@/components/TopBar'
import SideNavBar from '@/components/SideNavBar'
import ProfileDetails from '@/components/ProfileDetails'



import styles from '../styles/Feed.module.css'
import Head from 'next/head';
import Image from 'next/image'

import {
  Show,
} from '../../components/Chakra'



async function getUserInfo(usr){
  const link='http://192.168.43.43:8090/api/collections/accounts/records?filter=(username~"'+usr+'")';
  const res=await fetch(link,
    {cache:'no-cache'}
    );
  const data=await res.json();
  return data.items;
}

async function getPosts(usr){
  const link='http://192.168.43.43:8090/api/collections/posts/records?filter=(creators~"'+usr+'")';
  const res=await fetch(link,
    {cache:'no-cache'}
    );
  const data=await res.json();
  return data.items;
}
  
export default async function profile({ params }) {
  const usr=params.username;
  // const posts=await getPosts(usr);
  const prof= await getUserInfo(usr);
  return (
    
    <div className={styles.body}>
    <Head>
       <link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' />
       <link href='https://fonts.googleapis.com/css?family=Alegreya SC' rel='stylesheet' />
   </Head>
    <section className={styles.herosection} id="hero" style={{"transitionDuration":"0.4s"}}>
    {/* <Show breakpoint='(min-width: 900px)'> */}
    <TopBar/>
    {/* </Show> */}
   
   <div className={styles.outerdiv}>
   <SideNavBar />
   <div className={styles.myaccdiv}>
                  
                    
                <ProfileDetails prof={prof[0]} />
                              
                         
                        
                              </div>
   </div>
</section>
  </div>

  )
}
