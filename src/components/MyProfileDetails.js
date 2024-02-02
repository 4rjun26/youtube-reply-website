'use client'
import React from 'react'
import PocketBase from 'pocketbase'
import { BiLeftArrowAlt,BiBlock } from 'react-icons/bi'
import { BsThreeDotsVertical,BsBell,BsShieldLock,BsGear } from 'react-icons/bs'
import { AiOutlineInfoCircle,AiOutlinePoweroff } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md'
import { TbUserEdit } from 'react-icons/tb' 
import { useSession,signOut } from 'next-auth/react';
import { useRouter,redirect } from 'next/navigation'
import {useGenerationStore} from '@/state/idea-generation';
import { useState } from 'react'
import { Suspense } from 'react'
import Link from 'next/link'

import {
    Avatar,
    Button,Text,
    Box,Flex,Icon,
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    List,
    ListItem,
    Tag,
    Show,
    Spinner,
    Input,
    Stat,
  StatLabel,
  StatNumber,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,

  AlertDialogContent,
  AlertDialogOverlay,
  } from '@chakra-ui/react'
 
 

export default function MyProfileDetails({prof}) {
  const {data:session}=useSession();
  var username="";
  if(session && session.user){
    username=session.user.name;
  }

  const router=useRouter();
  var [bruh,setBruh]=useState(Math.min(prof.followedppl.split(",").length,prof.followedppl.length));
  const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const { isOpen: isAlertOpenlogin, onOpen: openAlertlogin, onClose: closeAlertlogin } = useDisclosure();

  async function editProfile(){
    const pb = new PocketBase("http://192.168.43.43:8090");
    await pb.admins.authWithPassword("arjundshinde26@gmail.com","arjunpocketbase#123");
  }


  return (
    <div>

<AlertDialog
        isOpen={isAlertOpenlogin}
        onClose={closeAlertlogin}
      >
        <AlertDialogOverlay>
          <AlertDialogContent bg={'rgb(33,33,33)'}>
            <AlertDialogHeader  fontSize='2xl' fontWeight='bold' textAlign={'center'} color={'rgb(242,242,242)'}>
              Edit profile
            </AlertDialogHeader>

            <AlertDialogBody color={'rgb(242,242,242)'}>
              <Text color={'gray'}>All fields are optional</Text>
            <Input
              placeholder={'Bio'}
              w={'full'}
              bg={'rgb(43,43,43)'}
              border={'none'}
              outline={'none'}
              mt={'20px'}
              value={prof.bio}
            />
              <Input
              placeholder={'Location'}
              w={'full'}
              bg={'rgb(43,43,43)'}
              border={'none'}
              outline={'none'}
              mt={'20px'}
              value={prof.location}
            />
              <Input
              placeholder={'Techstack (React,Nextjs,SQL,etc...)'}
              w={'full'}
              bg={'rgb(43,43,43)'}
              border={'none'}
              outline={'none'}
              mt={'20px'}
              value={prof.techstack}
            />
            </AlertDialogBody>

            <AlertDialogFooter>
            <Button color={'white'} onClick={closeAlertlogin} variant={'unstyled'}>Cancel</Button>
              <Button ml={'10px'} colorScheme='teal'>Save</Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
        <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent bg={'rgb(33,33,33)'} color={'rgb(242,242,242)'} borderTopLeftRadius={'20px'} borderTopRightRadius={'20px'}>

          <DrawerBody>
            <List fontSize={'md'}>
    <ListItem onClick={openAlertlogin} cursor={'pointer'} _hover={{'bg':"rgb(43,43,43)"}} mb={'10px'} w={'fit-content'} p={'5px'} display={'flex'} alignItems={'center'}><Icon as={BsGear}/>&nbsp;Edit profile</ListItem> 
    <ListItem onClick={()=>{signOut({ callbackUrl: 'http://localhost:3000/feed' })}} cursor={'pointer'} p={'5px'} w={'fit-content'} mb={'10px'} _hover={{'bg':"rgb(43,43,43)"}} display={'flex'} alignItems={'center'}><Icon as={AiOutlinePoweroff}/>&nbsp;Logout</ListItem>
    </List>
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    <Box color={'rgb(222,222,222)'} p={'0px 10px'}  w={'340px'} m={'auto'} mt={'30px'} boxShadow={'0 0 2rem rgba(0, 68, 68, 1)'} pb={'10px'} borderRadius={'10px'}>
        <Flex  mb={2}  alignItems={'center'} >
        <Button onClick={()=>{router.back();}} color={'rgb(222,222,222)'} fontSize={'3xl'} bg={'none'} _hover={'none'} ><Icon as={BiLeftArrowAlt} /></Button>
        <Text fontSize={'lg'} fontWeight={'bold'}>{username}</Text>

        {/* <Menu> */}
  <Button marginLeft={'auto'} variant={'unstyled'} color={'white'} h onClick={onOpen}>
   <Icon as={BsThreeDotsVertical} />
  </Button>
 
        </Flex>  
                    <Box  mb={2} textAlign={'center'}>
                     
                      <Avatar size="xl" name={username} src={session && session.user ? session.user.image : ""}/>
                      <Flex mt={'10px'} w={'100%'} justifyContent={'center'} >
           
        <Button
          id='followbtn'
          size="sm"
          mr='5px'
          variant={'solid'}
          colorScheme="teal"
        >
        Share profile
         </Button>
          
          <Link href={'/'+username+'/posts'}>
          <Button
          id='gotoposts'
          size="sm"
        ml={'5px'}
          variant='solid'
          colorScheme="teal"
        >
          My posts
        </Button>
        </Link>
                     </Flex>
                    </Box>
                  <Flex pb={'5px'}>
                  <Stat w='fit-content' textAlign='center'>
                    <StatNumber>{bruh}</StatNumber>
                    <StatLabel>Followers</StatLabel>
                  </Stat>
                  <Stat w='fit-content' textAlign='center'>
                    <StatNumber>3</StatNumber>
                    <StatLabel>Posts</StatLabel>
                  </Stat>
                  </Flex>
                  {prof.bio!=undefined && prof.bio.length>0 ? 
                    <Text fontSize={'sm'} mt={'5px'} pb={'5px'} fontFamily={'sans-serif'} borderBottom={'1px solid black'}>
                    {prof.bio}
                </Text>      
                :
                null
          }
                    <Text fontSize={'xs'} mt={'5px'} color={'rgb(200,200,200)'}>Joined on {prof.created.substring(0,10)}</Text>

                    {prof.location!=undefined && prof.location.length>0 ?
                    <Text mt={'5px'} pb={'5px'}  borderBottom={'1px solid black'} fontSize={'sm'} display={'flex'} alignItems={'center'} ><Icon color={'red.600'} as={MdLocationPin} />&nbsp;{prof.location}</Text>
                    :
                    null
                    }
                   {prof.techstack!=undefined && prof.techstack.length>0 ?
                   <>
                     <Text mt={'5px'} fontWeight={'bold'}>Tech stack.</Text>
                  {prof.techstack.split(',').map((name)=>(
 <Tag size={'sm'} m={'3px'} variant='outline' colorScheme='purple'>
 {name}
</Tag>
                  ))}
               </>
                    :
                    null
                   }
         
  
          <Text mt={'5px'} fontWeight={'bold'}>Social links</Text>
                  </Box>

    </div>
  )
}
