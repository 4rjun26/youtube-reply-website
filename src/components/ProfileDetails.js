'use client'
import React from 'react'
import PocketBase from 'pocketbase'
import { BiLeftArrowAlt,BiBlock } from 'react-icons/bi'
import { BsThreeDotsVertical,BsFillBellFill,BsFillBellSlashFill } from 'react-icons/bs'
import { AiOutlineInfoCircle,AiOutlineShareAlt } from 'react-icons/ai'
import { MdLocationPin } from 'react-icons/md' 
import { useRouter } from 'next/navigation'
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
    Stat,
  StatLabel,
  StatNumber,
  } from '@chakra-ui/react'
 
 

export default function ProfileDetails({prof}) {
  var { followings,setFollowings } = useGenerationStore()
  
  const router=useRouter();
  var [bruh,setBruh]=useState(Math.min(prof.followers.split(",").length,prof.followers.length));
  var arr,arr2;
  const [isFollowing,setIsFollowing]=useState(prof.followers.includes('arjun26'));
  const [isFL,setIsFL]=useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
 
    async function followaction(){
setIsFL(true);
      const pb = new PocketBase("http://192.168.43.43:8090");
      await pb.admins.authWithPassword("arjundshinde26@gmail.com","arjunpocketbase#123");
  
      
      // Updating other's followers
      var str=prof.followers;
  var pre=true;
      if(str==undefined){
        str="";
      }
 arr=str.split(",");
let index = arr.indexOf("arjun26");
if(index>=0){
  arr.splice(index, 1);
  str = arr.join();
}
else{
  pre=false;
  if(str.length==0){
    str="arjun26";
  }
  else{
    str=str+","+"arjun26";
  }
}
      const data={
        "followers" : str,
      };

      // Updating my followings
      var str2=followings.join();
          if(str2==undefined){
            str2="";
          }
     arr2=str2.split(",");
    let index2 = arr2.indexOf(prof.username);
    if(index2>=0){
      arr2.splice(index2, 1);
      str2 = arr2.join();
    }
    else{
      if(str2.length==0){
        str2=prof.username;
      }
      else{
        str2=str2+","+prof.username;
      }
      arr2=str2.split(",");
    }

      const data2={
        "followings" : str2,
      };
      const record=await pb.collection('accounts').update(prof.id,data);
      const record2=await pb.collection('accounts').update("321zkbywcttnf2y",data2);
   
      prof.followers=str;
      setFollowings(arr2);
        if(pre==false){
          setBruh(bruh+1);
          setIsFollowing(true);
        }
        else{
          setBruh(bruh-1);
          setIsFollowing(false);
        }
        setIsFL(false);
    }
  return (
    <div>
        <Drawer
        isOpen={isOpen}
        placement='bottom'
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent borderTopLeftRadius={'20px'} borderTopRightRadius={'20px'} bg={'rgb(33,33,33)'} color={'rgb(242,242,242)'}>

          <DrawerBody>
            <List fontSize={'md'}>
    <ListItem cursor={'pointer'} mb={'10px'}  _hover={{'bg':"rgb(43,43,43)"}} p={'5px'} display={'flex'} alignItems={'center'}><Icon as={BiBlock}/>&nbsp;Block</ListItem>
    <ListItem cursor={'pointer'} mb={'10px'} p={'5px'} _hover={{'bg':"rgb(43,43,43)"}} display={'flex'} alignItems={'center'}><Icon as={AiOutlineInfoCircle}/>&nbsp;Report</ListItem>
    <ListItem cursor={'pointer'} mb={'10px'} p={'5px'} _hover={{'bg':"rgb(43,43,43)"}} display={'flex'} alignItems={'center'}><Icon as={AiOutlineShareAlt}/>&nbsp;Share profile</ListItem>
    <ListItem cursor={'pointer'} mb={'10px'} p={'5px'} _hover={{'bg':"rgb(43,43,43)"}} display={'flex'} alignItems={'center'}><Icon as={BsFillBellSlashFill}/>&nbsp;Post notifications</ListItem>
    </List>
          </DrawerBody>
 
        </DrawerContent>
      </Drawer>
    <Box color={'rgb(222,222,222)'} p={'0px 10px'}  w={'340px'} m={'auto'} mt={'30px'} boxShadow={'0 0 2rem rgba(0, 68, 68, 1)'} pb={'10px'} borderRadius={'10px'}>
        <Flex  mb={2}  alignItems={'center'} >
        <Button onClick={()=>{router.back();}} color={'rgb(222,222,222)'} fontSize={'3xl'} bg={'none'} _hover={'none'} ><Icon as={BiLeftArrowAlt} /></Button>
        <Text fontSize={'lg'} fontWeight={'bold'}>{prof.username}</Text>

        {/* <Menu> */}
  <Button marginLeft={'auto'} variant={'unstyled'} color={'white'} h onClick={onOpen}>
   <Icon as={BsThreeDotsVertical} />
  </Button>
 
        </Flex>  
                    <Box  mb={2} textAlign={'center'}>
                     
                      <Avatar size="xl" name={prof.username} src={'s/avata/avatarr_'+prof.username+'.png'}/>
                      <Flex mt={'10px'} w={'100%'} justifyContent={'center'} >
                      {isFL ? (
                        
        <Spinner
        thickness='3px'
        speed='0.65s'
          color='teal'
        size='md'
      />
      ) : (
        <Button
          id='followbtn'
          size="sm"
          mr='5px'
          variant={isFollowing ? 'outline' : 'solid'}
          colorScheme="teal"
          onClick={followaction}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </Button>
          )}
          <Link href={'/'+prof.username+'/posts'}>
          <Button
          id='gotoposts'
          size="sm"
        ml={'5px'}
          variant='solid'
          colorScheme="teal"
        >
          Show posts
        </Button>
        </Link>
                     </Flex>
                    </Box>
                  <Flex borderBottom={'1px solid black'} pb={'5px'}>
                  <Stat w='fit-content' textAlign='center'>
                    <StatNumber>{bruh}</StatNumber>
                    <StatLabel>Followers</StatLabel>
                  </Stat>
                  <Stat w='fit-content' textAlign='center'>
                    <StatNumber>3</StatNumber>
                    <StatLabel>Posts</StatLabel>
                  </Stat>
                  </Flex>
                  <Text fontSize={'sm'} mt={'5px'} pb={'5px'} fontFamily={'sans-serif'} borderBottom={'1px solid black'}>
        Hey! My name is Arjun SHinde and im a full stack webdeveloper.
        I also edit sounds.
        </Text>      
                    <Text fontSize={'xs'} mt={'5px'} color={'rgb(200,200,200)'}>Joined on {prof.created.substring(0,10)}</Text>
                    <Text mt={'5px'} pb={'5px'}  borderBottom={'1px solid black'} fontSize={'sm'} display={'flex'} alignItems={'center'} ><Icon color={'red.600'} as={MdLocationPin} />&nbsp;Solapur, Maharashtra</Text>
                    <Flex mt={'10px'}>
                    
                      
                    </Flex>
                   
          <Text mt={'5px'} fontWeight={'bold'}>Tech stack.</Text>
          <Tag size={'sm'} m={'3px'} variant='outline' colorScheme='purple'>
      ReactJs
    </Tag>
  
          <Text mt={'5px'} fontWeight={'bold'}>Social links</Text>
                  </Box>

    </div>
  )
}
