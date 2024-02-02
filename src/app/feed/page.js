import React from 'react'
import TopBar from '@/components/TopBar'
import SideNavBar from '@/components/SideNavBar'
import PostCard from '@/components/PostCard'
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
} from '../../components/Chakra'


var posts=[];
// async function fetchMorePosts(){
//   'use server'
//   alert("asd");
//   const res=await fetch('http://127.0.0.1:8090/api/collections/posts/records?page=2&perPage=2',
//   { cache : 'no-cache'
//   });
//   const data=await res.json();
//   posts=posts.concat(data.items);
// }
// async function getPosts(){
//   const res=await fetch('http://192.168.43.43:8090/api/collections/posts/records?page=1&perPage=15',
//   { cache : 'no-cache'
//   });
//   const data=await res.json();
//   return data.items;
// }
export default async function feed() {
  //  posts=await getPosts();
   
  return (
    <div className={styles.body}>
    <Head>
       <link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' />
       <link href='https://fonts.googleapis.com/css?family=Alegreya SC' rel='stylesheet' />
   </Head>
   {/* <Drawer
      isOpen={open}
      placement='right'
      onClose={close}
      size={'md'}
      finalFocusRef={buttonRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader display={'flex'} borderBottom={'1px solid black'}>
          Comments&nbsp;
          <Tag size={'md'}   borderRadius='full' key={'md'} variant='solid' colorScheme='teal'>
    <TagLabel>{comments.length}</TagLabel>
  </Tag>
          </DrawerHeader>

        <DrawerBody>
        <div className={styles2.container}>
                  
      <div className={styles2.commentcont}>

      {comments.map((comment) => (
        
          <>
          
               <div className={styles2.commenthead}>
              
                  <Tag size='lg' marginTop={'20px'} width={"fit-content"} bg={'none'}  fontSize='15px'>
<Avatar src={'/avatars/avatar_'+comment.split("iipsc")[1]+'.png'} size='sm' name={comment.split("iipsc")[1]} ml={-3} mr={2} />
<TagLabel>{"@"+comment.split("iipsc")[1]}</TagLabel>
</Tag>
</div>

      <p style={{"margin-left":"10px","margin-top":"5px"}}>
      {comment.split("iipsc")[0]}
      </p>
      </>
       ))}
      </div>
             </div>
        </DrawerBody>

        <DrawerFooter>
        <InputGroup display={"flex"} justifyContent={'center'} alignItems={'center'} padding={'10px 0px'}>
        <Avatar src={'/avatars/avatar_'+'asd'+'.png'} size='sm' name={'asd'} marginRight={'10px'}/>
                  <Input ref={inputRef} fontSize={'sm'} id='commentbox' type='text' placeholder='Add a comment' w={"85%"} focusBorderColor='none' borderColor={'black'}/>
                  <Button  colorScheme='teal'  variant={'outline'} marginLeft={'10px'}>Post</Button>
                  </InputGroup>
        </DrawerFooter>
      </DrawerContent>
    </Drawer> */}
      <section className={styles.herosection} id="hero" style={{"transitionDuration":"0.4s"}}>
          <TopBar/>
   
         
         <div className={styles.outerdiv}>
         <SideNavBar/>
{/* All sites */}
{/* <div className={styles.feed} id='allsites'>  */}

{/* <InfiniteScroll dataLength={2} next={fetchMorePosts} hasMore={true}> */}
<PostCard />
{/* posts={posts} */}
{/* </InfiniteScroll> */}
<br/><br/><br/>
    {/* <Button bg={'orange.200'} fontSize={'sm'} margin={'auto'}>
          Load more
    </Button>  */}
     {/* </div> */}
         </div>
      </section>
      
  </div>
  )
}
