'use client'
import React from 'react'
import axios from 'axios';
import PocketBase from 'pocketbase'
import { useState,useEffect } from 'react'
import styles from '../app/styles/Feed.module.css'
import Head from 'next/head';
import EmojiPicker from 'emoji-picker-react';
import { BsBookmark, BsBookmarkFill,BsEye,BsEmojiSmile,BsTrash, BsBoxArrowUpRight } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { MdOutlineAddCircle } from "react-icons/md";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { AiFillHeart,AiOutlineInfoCircle,AiFillGithub } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { LiaShareSolid } from 'react-icons/lia';
import { SlBubble } from 'react-icons/sl';
import { useBottomScrollListener } from 'react-bottom-scroll-listener'
import Image from 'next/image';
import { useSession,signIn } from 'next-auth/react';
import Link from 'next/link';
import FadeInCard from './FadeInCard'
import { Quicksand } from 'next/font/google';
import {useGenerationStore} from '@/state/idea-generation';

var $ = require( "jquery" );
import {
    Tag,
    TagLabel,
    Avatar,
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
  } from './Chakra'
  import { useToast,Text,Skeleton,Stack,InputLeftElement,Box,Flex,AlertDialog,Spinner,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,

    AlertDialogContent,
    AlertDialogOverlay,
     } from '@chakra-ui/react'

const arr=[1,2,3,4];
const quicksand = Quicksand({ subsets: ['latin'], weight: '700' });

export default function PostCard() {
  const btnRef = React.useRef()
const { isOpen, onOpen, onClose } = useDisclosure();
  return (
      <>
      {/* Comments Drawer */}
  <Drawer
        isOpen={isOpen}
        size={'md'}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={'rgb(33,33,33)'} color={'rgb(242,242,242)'}>
          <DrawerCloseButton color={'white'} />
          <DrawerHeader textAlign={'center'} fontSize="md">Comments</DrawerHeader>

          <DrawerBody p={'3px'}>
            
              <Popover>
              <PopoverTrigger>
              <Box mt={'5px'} _hover={{"bg":"rgb(43,43,43)"}} borderRadius={'10px'} cursor={'pointer'}>
              <Tag size='md' width={"100%"} colorScheme='white'>
              <Avatar src={'/avatars/avatar_1.jpg'} size='xs' name={"xyz"} ml={-2} mr={2} />
              <TagLabel>{"xyz"}</TagLabel>
              </Tag>
              <Flex ml={'32px'}>
              <Box w={'90%'}>
              <Text fontSize={'13px'}>{"This is a good video."}</Text>
              </Box>
              <Box>
                  <Button variant={'unstyled'} w={'fit-content'} h={'fit-content'}>
                  <Icon as={AiFillHeart} style={{"color":"rgb(211, 48, 48)"}} />
                  <span style={{'fontSize':"12px","display":"block","marginTop":"-10px","color":"gray"}}>3</span>
                  </Button>
              </Box>
              </Flex>
            </Box>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Button bg={'none'}><Icon as={BsTrash}/>&nbsp;Delete</Button>
                  <Button bg={'none'}><Icon as={AiOutlineInfoCircle}/>&nbsp;Report</Button>
                  </PopoverBody>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger>
              <Box mt={'5px'} _hover={{"bg":"rgb(43,43,43)"}} borderRadius={'10px'} cursor={'pointer'}>
              <Tag size='md' width={"100%"} colorScheme='white'>
              <Avatar src={'/avatars/avatar_1.jpg'} size='xs' name={"abc"} ml={-2} mr={2} />
              <TagLabel>{"abc"}</TagLabel>
              </Tag>
              <Flex ml={'32px'}>
              <Box w={'90%'}>
              <Text fontSize={'13px'}>{"Who's watching this in 2024?? :)"}</Text>
              </Box>
              <Box>
                  <Button variant={'unstyled'} w={'fit-content'} h={'fit-content'}>
                  <Icon as={AiFillHeart} style={{"color":"rgb(211, 48, 48)"}} />
                  <span style={{'fontSize':"12px","display":"block","marginTop":"-10px","color":"gray"}}>3</span>
                  </Button>
              </Box>
              </Flex>
            </Box>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Button bg={'none'}><Icon as={BsTrash}/>&nbsp;Delete</Button>
                  <Button bg={'none'}><Icon as={AiOutlineInfoCircle}/>&nbsp;Report</Button>
                  </PopoverBody>
              </PopoverContent>
            </Popover>
            <Popover>
              <PopoverTrigger>
              <Box mt={'5px'} _hover={{"bg":"rgb(43,43,43)"}} borderRadius={'10px'} cursor={'pointer'}>
              <Tag size='md' width={"100%"} colorScheme='white'>
              <Avatar src={'/avatars/avatar_1.jpg'} size='xs' name={"sdc"} ml={-2} mr={2} />
              <TagLabel>{"sdc"}</TagLabel>
              </Tag>
              <Flex ml={'32px'}>
              <Box w={'90%'}>
              <Text fontSize={'13px'}>{"Only in Ohio!! :D"}</Text>
              </Box>
              <Box>
                  <Button variant={'unstyled'} w={'fit-content'} h={'fit-content'}>
                  <Icon as={AiFillHeart} style={{"color":"rgb(211, 48, 48)"}} />
                  <span style={{'fontSize':"12px","display":"block","marginTop":"-10px","color":"gray"}}>3</span>
                  </Button>
              </Box>
              </Flex>
            </Box>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  <Button bg={'none'}><Icon as={BsTrash}/>&nbsp;Delete</Button>
                  <Button bg={'none'}><Icon as={AiOutlineInfoCircle}/>&nbsp;Report</Button>
                  </PopoverBody>
              </PopoverContent>
            </Popover>


          </DrawerBody>

          <DrawerFooter display={'flex'}>
          
          <Avatar src={'/avatars/avatar_'+'arjun26'+'.jpg'} size='sm' mr={'5px'} name={'arjun26'}/>
          
             <InputGroup>
             <InputLeftElement display={'flex'} alignItems={'center'} h={'full'}>
        {/* <Button variant='unstyled' color='teal' onClick={openAlert} >
         <Icon fontSize={'lg'} mt={'5px'} as={BsEmojiSmile}/>
        </Button> */}
      </InputLeftElement>
             <Input 
            borderRadius='full'
            bg='rgb(41,41,41)'
            id='commentbox'
            pr='4.5rem'
            size={'sm'}
            onChange={()=>{
              if(document.getElementById('commentbox').value.length>0){
                document.getElementById('addcomment').style.display="block";
              }
              else{  
                document.getElementById('addcomment').style.display="none";
              }
            }}
            focusBorderColor='none'
           placeholder='Add a comment...' 
           />
          
      <InputRightElement width='4.5rem' height={'full'} display={'flex'} alignItems={'center'}>
      {/* {isPC?
          <Spinner color='teal' />
          : */}
        <Button variant='unstyled' color='teal' size='sm' id='addcomment'>
        Add
        </Button>
          {/* } */}
      </InputRightElement>  
    </InputGroup>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>



      <div className={styles.feed} id='allsites'> 
      {arr.map((ar)=>(
                    <FadeInCard >
                        <div  className={styles.postcard}>
                    <div className={styles.imgcont}>
  <Image className={styles.img} src={'/posts/post_1'+'.webp'} width={1000} height={1000} alt='post' />                    
                    </div>
                  
                    <p className={quicksand.className}>Post</p>
                   
                  
                  
                    <div className={styles.userinfo}>
 

<Button  mr={'auto'} display={'flex'} alignItems={'center'} colorScheme='teal' justifyContent={'space-around'} size={'xs'} variant={'outline'}> <Icon as={MdOutlinePlayCircleFilled} />&nbsp;Play</Button>
<Button onClick={onOpen} display={'flex'} alignItems={'center'} colorScheme='teal' justifyContent={'space-around'} size={'xs'} variant={'outline'}> <Icon as={MdOutlineAddCircle} />&nbsp;Add reply</Button>                
                    
                    </div>
                    
                    <div id='likebtndiv' className={styles.likesave}>
                        <Text display={'flex'} alignItems={'center'} style={{"fontSize":"15px","color":"rgb(128,128,128)"}}>
                        2.5K views
                        </Text>
                        <Text ml={'20px'} display={'flex'} alignItems={'center'} style={{"fontSize":"13px","color":"rgb(128,128,128)"}}>
                        <Icon as={AiOutlineHeart}  fontSize={'xl'}/>&nbsp;3
                        </Text>
                        <Text ml={'20px'} display={'flex'} alignItems={'center'} style={{"fontSize":"13px","color":"rgb(128,128,128)"}}>
                        <Icon as={SlBubble}  fontSize={'xl'}/>&nbsp;3
                        </Text>

                       
                    </div> 
                    
                    </div>
                  
                    </FadeInCard>
                 
      ))}
              </div>
           
             
     </>
  )
}
