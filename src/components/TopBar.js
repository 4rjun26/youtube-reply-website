'use client'
import React from 'react'
import styles from '../app/styles/Feed.module.css'
import Head from 'next/head';
import { AiFillGithub, AiOutlineSend } from 'react-icons/ai';
import { GrFormClose } from 'react-icons/gr';
import { BsSliders,BsBookmark, BsBookmarkFill,BsSearch } from 'react-icons/bs';
import { AiOutlineStar, AiOutlineBell,AiOutlineGift } from 'react-icons/ai';
import { BiSolidChevronDown,BiTimeFive,BiLeftArrowAlt } from 'react-icons/bi';
import { RiHeartsLine } from 'react-icons/ri';
import Image from 'next/image';
import Link from 'next/link';
import { useSession,signIn } from 'next-auth/react';
import { usePathname,useRouter } from 'next/navigation';
import { useState } from 'react';
import { Pacifico } from 'next/font/google';
import {useGenerationStore} from '@/state/idea-generation';

import {
    Avatar,
    Input,
    Icon,
    Button,
    Show,
  InputGroup,
  Badge,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  } from './Chakra'
import {InputLeftElement,Collapse,Box,Flex,Text,Tag,TagLabel,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,

} from '@chakra-ui/react'
 const pacifico = Pacifico({ subsets: ['latin'], weight: '400' });

export default function TopBar() {
  const {data:session}=useSession();
  var { feedslide,setFeedslide } = useGenerationStore()
  const [show, setShow] = useState(false);
const path=usePathname();
const router=useRouter();
const { isOpen, onOpen, onClose } = useDisclosure()
  const handleToggle = () => setShow(!show);
  return (
    <>
    <Head>
       <link href='https://fonts.googleapis.com/css?family=Alegreya SC' rel='stylesheet' />
   </Head>
   <Drawer placement={'left'} size={'md'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={'rgb(33,33,33)'} color={'rgb(242,242,242)'}>
          <DrawerHeader display={'flex'} alignItems={'center'}><Icon size={'md'} onClick={onClose} cursor={'pointer'} as={BiLeftArrowAlt} />&nbsp;Notifications</DrawerHeader>
          <DrawerBody>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
     <div className={styles.uppernav}>
    <h1 className={pacifico.className} style={{"color":"rgb(232,232,232)"}}>SiteStash</h1>
  
    <Show breakpoint='(min-width: 900px)'>
    <InputGroup size='md'>
    
    <Input
      type='text'
      borderRadius={'full'}
      placeholder='Search using tags, names...'
      focusBorderColor='none'
      border={'2px solid gray'}
      _hover={'none'}
      color={'white'}
    />
    
    <InputLeftElement>
        <Icon color={'white'} as={BsSearch}/>
    </InputLeftElement>
  </InputGroup>
  </Show>
  {/* <Link href={'/notifications'}> */}
  {session && session.user ?
<>
<Popover>
  <PopoverTrigger>
<Avatar src={'/coins.png'} size='md' />
  </PopoverTrigger>
  <PopoverContent shadow={'dark-lg'} mr={'20px'} bg={'rgb(43,43,43)'} color='rgb(242,242,242)'>
    
  <PopoverArrow />
    <PopoverHeader display={'flex'} alignItems={'center'}> <Avatar src={'/coins.png'} size='md' /> Stash coins</PopoverHeader>
    <PopoverBody>The more you earn the more your works get recognition!
    <Flex mt={'10px'} w={'full'} p='5px' fontSize={'sm'} bg={'rgb(34,34,34)'} borderRadius={'md'}>
    <Avatar src={'/coins.png'} size='md' mt={'-10px'} /> x 100 Every time your post gets saved.
    </Flex>
    <Flex mt={'10px'} w={'full'} p='5px' fontSize={'sm'} bg={'rgb(34,34,34)'} borderRadius={'md'}>
    <Avatar src={'/coins.png'} size='md' mt={'-10px'} /> x 10 For every post you have.
    </Flex>
    <Flex mt={'10px'} w={'full'} p='5px' fontSize={'sm'} bg={'rgb(34,34,34)'} borderRadius={'md'}>
    <Avatar src={'/coins.png'} size='md' mt={'-10px'} /> x 5 For every follower you have.
    </Flex>

    </PopoverBody>
  </PopoverContent>
</Popover>

<Button  onClick={onOpen} color={'white'} bg={'none'} _hover={'none'}>
  <Icon style={{"scale":"1.5"}} as={AiOutlineBell}/>
  <Badge position="absolute" borderRadius={'full'} w={'10px'} h={'10px'} top="8px" right="12px" colorScheme="teal">
 
    </Badge>
    </Button>
  {/* </Link> */}
  <Link href={'/myprofile'}>
  <Button bg={'none'} _hover={'none'}>
  <Avatar border={'1px solid white'} src={'abc.png'} size='sm' name={'abc'} />
    </Button>
    </Link>
</>
    :
    <>
     <Link href={'/myprofile'}>
  <Button bg={'none'} _hover={'none'}>
  <Avatar border={'1px solid white'} src={'abc.png'} size='sm' name={'abc'} />
    </Button>
    </Link>
    </>
  }
 
    
</div>
<Show breakpoint='(max-width: 900px)'>
    <InputGroup size='md'>
    <Input
      type='search'
      w={'98%'}
      color={'white'}
      margin={'auto'}
      placeholder='Search using tags, names...'
      border={'2px solid gray'}
      focusBorderColor='none'
      _hover={'none'}
    />
        <InputLeftElement pointerEvents='none'>
    <Icon as={BsSearch} color='white'/>
    </InputLeftElement> 
  </InputGroup>
  </Show>

  {
    path=='/feed' || path.indexOf('posts')>0 ?
<Flex pt={'10px'} pr={'10px'} alignItems={'center'} justifyContent={'right'}>
  {path.indexOf('posts')>0 ?

<Tag  onClick={()=>{router.back();}}  size='xs' fontSize={'md'} mr={'auto'} pl={"10px"} pr={"30px"} color={'rgb(242,242,242)'} _hover={{"bg":"rgb(50,50,50)"}} bg={'rgb(33,33,33)'} borderRadius='md'>
<Button fontSize={'lg'} variant={'unstyled'}>{'<--'}</Button>
{/* <Avatar src={'/avatars/avatar_'+'arpitjain3'+'.png'} size='sm' name={'arpitjain3'} ml={-2} mr={2} /> */}
  <TagLabel>Back to profile</TagLabel>
</Tag>
  :
  null
  }

  {feedslide>0 ?
    <Button size={'sm'} mr={'5px'} bg={'rgb(53,53,53)'} _hover={'none'} color={'rgb(242,242,242)'} onClick={()=>{setFeedslide(feedslide-5)}}>Previous</Button>
  :
  null
  }

<Button size={'sm'} bg={'rgb(53,53,53)'} mr={'5px'} _hover={'none'} color={'rgb(242,242,242)'} onClick={()=>{setFeedslide(feedslide+5)}}>Next</Button>
{path=='/feed' ? 
<Menu>
  <MenuButton bg={'rgb(53,53,53)'} _hover={'none'} color={'rgb(242,242,242)'} display={'flex'} alignItems={'center'} variant={'solid'} as={Button} size={'sm'} rightIcon={<BiSolidChevronDown />} >
   <Icon as={BsSliders} />&nbsp;Sort By
  </MenuButton>
  <MenuList boxShadow={'dark-lg'} border={'none'} bg={'rgb(43,43,43)'} w={'fit-content'}>
  <MenuItem bg={'rgb(43,43,43)'} color={'rgb(242,242,242)'} _hover={{'bg':"rgb(33,33,33)"}}><Icon as={AiOutlineGift}/>&nbsp;Random</MenuItem>
    <MenuItem bg={'rgb(43,43,43)'} color={'rgb(242,242,242)'} _hover={{'bg':"rgb(33,33,33)"}}><Icon as={BiTimeFive}/>&nbsp;Recent</MenuItem>
    <MenuItem bg={'rgb(43,43,43)'} color={'rgb(242,242,242)'} _hover={{'bg':"rgb(33,33,33)"}}><Icon as={RiHeartsLine}/>&nbsp;Likes</MenuItem>
    <MenuItem bg={'rgb(43,43,43)'} color={'rgb(242,242,242)'} _hover={{'bg':"rgb(33,33,33)"}}><Icon as={AiOutlineStar}/>&nbsp;Views</MenuItem>
  </MenuList>
</Menu>
:
null
}
    </Flex>
    
    :
    null
  }
    


    </>
  )
}
