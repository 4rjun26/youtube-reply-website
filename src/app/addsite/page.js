import React from 'react'
import TopBar from '@/components/TopBar'
import SideNavBar from '@/components/SideNavBar'
import ImageCrop from '@/components/ImageCrop'
import FadeInCard from '@/components/FadeInCard'
import styles from '../styles/Feed.module.css'
import Head from 'next/head';

import {useGenerationStore} from '@/state/idea-generation';
import { AiOutlineHome, AiOutlineSend } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import { BsBookmarkCheck,BsBookmark, BsBookmarkFill,BsSearch } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineBell } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { TbCards } from 'react-icons/tb';
import { MdOutlinePersonSearch } from 'react-icons/md';
import { BiLogOut } from 'react-icons/bi';
import Image from 'next/image';
import Link from 'next/link';

import {
  Tag,
  TagLabel,
  Avatar,Divider,
  Input,
  Icon,
  Popover,PopoverCloseButton,PopoverBody,PopoverHeader,initialFocusRef,PopoverTrigger,PopoverContent,
  PopoverArrow,
  Button,
  InputRightElement,
  Show,
InputGroup,
useDisclosure ,
Badge,
Menu,MenuButton,MenuList,MenuItem,
Drawer,
DrawerBody,
DrawerFooter,
DrawerHeader,
DrawerOverlay,
DrawerContent,
DrawerCloseButton,
InfiniteScroll,
Box,
} from '../../components/Chakra'


export default async function addsite() {
   
  return (
    <div className={styles.body}>
    <Head>
       <link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' />
       <link href='https://fonts.googleapis.com/css?family=Alegreya SC' rel='stylesheet' />
   </Head>
 
      <section className={styles.herosection} id="hero" style={{"transitionDuration":"0.4s"}}>
          <TopBar/>
   
         
         <div className={styles.outerdiv}>
         <SideNavBar/>
{/* All sites */}
<div className={styles.feed} id='allsites'> 
    <Box w={'full'} h={'full'} textAlign={'center'}>
        <Box w={'320px'} h={'210'} bg={'gray.200'} m={'auto'} mt={'20px'} borderRadius={'10px'}>

        </Box>

        <Input
         type='text'
         focusBorderColor='none'
         border={'2px solid gray'}
         _hover={'none'}
        mt={'20px'} w={'98%'} placeholder='Website name' />
        <Input
         type='text'
         focusBorderColor='none'
         border={'2px solid gray'}
         _hover={'none'}
        mt={'20px'} w={'98%'} placeholder='Website link (https://abc.xyz)' />
    </Box>

     </div>
         </div>
      </section>
      
  </div>
  )
}
