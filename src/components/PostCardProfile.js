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
import { AiFillHeart,AiOutlineInfoCircle } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { LiaShareSolid } from 'react-icons/lia';
import { SlBubble } from 'react-icons/sl';
import { useBottomScrollListener } from 'react-bottom-scroll-listener'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
    AlertDialogContent,
    AlertDialogOverlay,
     } from '@chakra-ui/react'

 
const arr=[1,2,3,4];
const quicksand = Quicksand({ subsets: ['latin'], weight: '700' });

export default function PostCardProfile() {
  const toast = useToast()
  
  var currentprof = usePathname();
let ind=currentprof.indexOf("/", 1);
currentprof=currentprof.substring(1,ind);

  var { feedslide,setFeedslide } = useGenerationStore()
  if(feedslide>0){
    setFeedslide(0);
  }
  const [newposts,setNewPosts]= useState([]);
  const [cserial,setcserial]=useState();
  const [pageno,setPageno]=useState(1);
  const [crt,setCrt]=useState(0);
  const [cort,setCorT]=useState(true);
  const [comments,setComments]= useState([]);
  const [isPC, setPC] = useState(false);
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const cancelRef = React.useRef()
  const { isOpen: isAlertOpen, onOpen: openAlert, onClose: closeAlert } = useDisclosure();
  const { isOpen: isCrtOpen, onOpen: openCrt, onClose: closeCrt } = useDisclosure();

  const fetchMoreData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://192.168.43.43:8090/api/collections/posts/records?page='+(feedslide+pageno)+'&perPage=4&filter=(creators~"'+currentprof+'")');
      setNewPosts([...newposts,...response.data.items]);
      setLoading(false);
      setPageno(pageno+1);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };
      function commentHelper(serial){
        onOpen();
        setcserial(serial);
        setCorT(true);
        setTimeout(() => {
          fetchComments(serial);
        }, 500);
      }
  const fetchComments = async (serial) => {
    
    try {
      const link='http://192.168.43.43:8090/api/collections/comments/records?filter=(postserial="'+serial+'")&sort=-created'
      const response = await axios.get(link);
    
      setComments(response.data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setCorT(false);
  };

  useEffect(() => {
    // Function to fetch data from the provided URL
    const fetchData = async () => {
      
      try {
  setPageno(1);
        setLoading(true);
        setNewPosts([]);
        const response = await axios.get('http://192.168.43.43:8090/api/collections/posts/records?page='+(feedslide+pageno)+'&perPage=4&&filter=(creators~"'+currentprof+'")');
      
        setNewPosts(response.data.items);
        setPageno(pageno+1);
        setLoading(false);

      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [feedslide]);   


  async function saveaction(serial,ind){

    const pb = new PocketBase("http://192.168.43.43:8090");
    await pb.admins.authWithPassword("arjundshinde26@gmail.com","arjunpocketbase#123");

    
  const newPostsCopy = [...newposts]; // Create a new copy of the array
  const post = newPostsCopy[ind]; // Get the post at the specified index

  var str=newposts[ind].savedppl;
  var toast_info={
    title: 'Post Unsaved.',
    status: 'success',
    duration: 1000,
    isClosable: true,
  }
  if(str==undefined){
    str="";
  }
var arr=str.split(",");
let index = arr.indexOf("0");
if(index>=0){
arr.splice(index, 1);
str = arr.join();
}
else{
  toast_info={
    title: 'Post Saved.',
    status: 'success',
    duration: 1000,
    isClosable: true,
  }
if(str.length==0){
str="0";
}
else{
str=str+","+"0";
}
}

  
    const data={
      "savedppl" : str,
    };
    const record=await pb.collection('posts').update(newposts[ind].id,data);
    // const link='http://192.168.43.43:8090/api/collections/posts/records?filter=(serial="'+serial+'")';
    // const res=await fetch(link,
    //   {
    //     cache:'no-store',
    //   }
    //   );
    // const datafetched=await res.json(); 

    post.savedppl = str;
    setNewPosts(newPostsCopy);
    toast(
      toast_info
    )
   }
  
  async function likeaction(serial,ind){

    const pb = new PocketBase("http://192.168.43.43:8090");
    await pb.admins.authWithPassword("arjundshinde26@gmail.com","arjunpocketbase#123");

    
  const newPostsCopy = [...newposts]; // Create a new copy of the array
  const post = newPostsCopy[ind]; // Get the post at the specified index

    var str=newposts[ind].likedppl;
    if(str==undefined){
      str="";
    }
var arr=str.split(",");
let index = arr.indexOf("0");
if(index>=0){
arr.splice(index, 1);
str = arr.join();
}
else{
if(str.length==0){
  str="0";
}
else{
  str=str+","+"0";
}
}
    const data={
      "likedppl" : str,
    };
    const record=await pb.collection('posts').update(newposts[ind].id,data);
    // const link='http://192.168.43.43:8090/api/collections/posts/records?filter=(serial="'+serial+'")';
    // const res=await fetch(link,
    //   {
    //     cache:'no-store',
    //   }
    //   );
    // const datafetched=await res.json(); 

    post.likedppl = str;
    setNewPosts(newPostsCopy);
  }

  async function likecommentaction(ind){

    const pb = new PocketBase("http://192.168.43.43:8090");
    await pb.admins.authWithPassword("arjundshinde26@gmail.com","arjunpocketbase#123");

    
  const newCommentsCopy = [...comments]; // Create a new copy of the array
  const comment = newCommentsCopy[ind]; // Get the post at the specified index

    var str=comments[ind].likedppl;
    if(str==undefined){
      str="";
    }
var arr=str.split(",");
let index = arr.indexOf("0");
if(index>=0){
arr.splice(index, 1);
str = arr.join();
}
else{
if(str.length==0){
  str="0";
}
else{
  str=str+","+"0";
}
}
    const data={
      "likedppl" : str,
    };
    const record=await pb.collection('comments').update(comments[ind].id,data);
    // const link='http://192.168.43.43:8090/api/collections/posts/records?filter=(serial="'+serial+'")';
    // const res=await fetch(link,
    //   {
    //     cache:'no-store',
    //   }
    //   );
    // const datafetched=await res.json(); 

    comment.likedppl = str;
    setComments(newCommentsCopy);
  }

  async function postComment(){
    setPC(true);

    const pb = new PocketBase("http://192.168.43.43:8090");
await pb.admins.authWithPassword("arjundshinde26@gmail.com","arjunpocketbase#123");

const elem=document.getElementById('commentbox');
const data = {
    "postserial": cserial,
    "comment_text": elem.value,
    "commenter": "arjun26",
    "likedppl": ""
};

const record = await pb.collection('comments').create(data);
setComments((prevComments) => [record,...prevComments]);
setPC(false);
elem.value="";
  }


  const handleContainerOnBottom = () => {
    if(pageno<6){
    fetchMoreData();
    }
  }

  const containerRef = useBottomScrollListener(handleContainerOnBottom);
  const handleEmojiClick = (emojiObject) => {
    const elem=document.getElementById('commentbox');
  elem.value=elem.value+emojiObject.emoji;
  document.getElementById('addcomment').style.display="block";
  };

  return (
      <>
        <Drawer placement={'bottom'} onClose={closeCrt} isOpen={isCrtOpen}>
        <DrawerOverlay />
        <DrawerContent  borderTopLeftRadius={'20px'} borderTopRightRadius={'20px'} bg={'rgb(33,33,33)'} color={'rgb(242,242,242)'}>
          <DrawerHeader borderBottomWidth='1px' fontSize={'sm'} textAlign={'center'}>{cort ? 'Creators' : 'All tags'}</DrawerHeader>
          <DrawerBody pt={'10px'} pb={'20px'}>
          {cort ? newposts[crt]!=undefined ? newposts[crt].creators.split(',').map((abc,index) => (
    <Link href={'/'+abc} key={index}>
    <Tag size='md' m={'5px'} p={'5px'} borderRadius={'10px'} color={'rgb(33,33,33)'} colorScheme='white' bg="gray.200">
  <Avatar src={'/avatars/avatar_'+abc+'.png'} size='xs' name={abc} mr={2} />
  <TagLabel>{abc}</TagLabel>
</Tag>
    </Link>
          ))
        :
        <></>
        :
       newposts[crt]!=undefined ? newposts[crt].tags.split(',').map((abc,index) => (
        <Link key={index} href={'/'+abc}>
        <Tag size='md' m={'5px'} p={'5px'} borderRadius={'10px'}  variant={'outline'} colorScheme='purple'>
      <TagLabel>{abc}</TagLabel>
    </Tag>
        </Link>
              ))
            :
        <></>
       
        }
          </DrawerBody>
        </DrawerContent>
      </Drawer>
 <AlertDialog
        isOpen={isAlertOpen}
        leastDestructiveRef={cancelRef}
        onClose={closeAlert}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>

            <AlertDialogBody>
            <EmojiPicker onEmojiClick={handleEmojiClick} />
            </AlertDialogBody>

            <AlertDialogFooter>
              
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
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
          <DrawerHeader textAlign={'center'} fontSize="md">Reviews</DrawerHeader>

          <DrawerBody p={'3px'}>
            
            {comments.length==0 && cort==false?
              <Text fontSize={'sm'} color={'gray'} textAlign={'center'}>Be the first to write a review... </Text>
              :
              <></>
            }
            {cort ? 
              <Flex width={'full'} justifyContent={'center'}>
                <Spinner color='white' />
              </Flex>
              :
            comments.map((comment,index)=>(
              <Popover key={index}>
              <PopoverTrigger>
              <Box mt={'5px'} _hover={{"bg":"rgb(43,43,43)"}} borderRadius={'10px'} cursor={'pointer'}>
              <Tag size='md' width={"100%"} colorScheme='white'>
              <Avatar src={'/avatars/avatar_'+comment.commenter+'.png'} size='xs' name={comment.commenter} ml={-2} mr={2} />
              <TagLabel>{comment.commenter}</TagLabel>
              </Tag>
              <Flex ml={'32px'}>
              <Box w={'90%'}>
              <Text fontSize={'13px'}>{comment.comment_text}</Text>
              </Box>
              <Box>
                  <Button variant={'unstyled'} w={'fit-content'} h={'fit-content'}  onClick={()=>likecommentaction(index)}>
                  { comment.likedppl.split(',').includes("0")  ? <Icon as={AiFillHeart} style={{"color":"rgb(211, 48, 48)"}} /> : <Icon as={AiOutlineHeart} />}
                  <span style={{'fontSize':"12px","display":"block","marginTop":"-10px","color":"gray"}}>{Math.min(comment.likedppl.split(',').length,comment.likedppl.length)}</span>
                  </Button>
              </Box>
              </Flex>
            </Box>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverBody>
                  {comment.commenter=='arjun26'?
                  <Button bg={'none'}><Icon as={BsTrash}/>&nbsp;Delete</Button>
                  :
                  <Button bg={'none'}><Icon as={AiOutlineInfoCircle}/>&nbsp;Report</Button>
                  }
                </PopoverBody>
              </PopoverContent>
            </Popover>
            ))}
          </DrawerBody>

          <DrawerFooter display={'flex'}>
          
          <Avatar src={'/avatars/avatar_'+'arjun26'+'.png'} size='sm' mr={'5px'} name={'arjun26'}/>
          
             <InputGroup>
             <InputLeftElement display={'flex'} alignItems={'center'} h={'full'}>
        <Button variant='unstyled' color='teal' onClick={openAlert} >
         <Icon fontSize={'lg'} mt={'5px'} as={BsEmojiSmile}/>
        </Button>
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
      {isPC?
          <Spinner color='teal' />
          :
        <Button variant='unstyled' onClick={postComment} color='teal' size='sm' id='addcomment' display={'none'}>
        Add
        </Button>
          }
      </InputRightElement>  
    </InputGroup>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>



      <div  ref={containerRef} className={styles.feed} id='allsites'> 
      
         {newposts.map((post,index)=>(
            <FadeInCard key={post.id}>
                        <div key={post.id} className={styles.postcard}>
                    {false ? 
                    <>
                    <SkeletonTheme baseColor="rgb(228, 228, 228)" highlightColor="rgb(245, 245, 245)">
                    <Skeleton style={{"height":"210px","borderRadius":"10px"}} /> 
                    <Skeleton count={3} style={{"height":"30px"}} />
                    </SkeletonTheme>
                    </>
                    : 

                    <>
                    <div className={styles.imgcont}>
  <Image className={styles.img} src={'/posts/post_'+post.serial+'.webp'} width={1000} height={1000} alt='post' />                    
                    </div>
                  
                    <p className={quicksand.className}>{post.name}</p>
                    <Flex mb={'10px'} mt={'3px'}>
                    <Box w={'100%'} color={'purple'} flex={'1'} gap={'5px'} overflow={'hidden'} textOverflow={'ellipsis'}  whiteSpace={'nowrap'}>
                    {post.tags.length>0 ? post.tags.split(',').map((abc,index) => (
              <Tag key={index} size='sm' mr='5px'  variant={'outline'} colorScheme='purple'>
            <TagLabel>{abc}</TagLabel>
          </Tag>
                    ))
                    :
                    <p color='rgb(242,242,242)' style={{"fontSize":"13px"}}>No tags</p>
                  }
        
                    </Box>
                    {post.tags.length>0 ? 
                    <Button onClick={()=>{setCorT(false); setCrt(index); openCrt();}} size={'xs'} variant={'unstyled'} color={'rgb(242,242,242)'}>show all</Button>
                    :
                  <></>  
                  }
                    </Flex>
                  
                    <div className={styles.userinfo}>
  <Button  onClick={()=>{setCorT(true); setCrt(index); openCrt();}} display={'flex'} alignItems={'center'} variant={'outline'} size={'xs'} colorScheme='teal'>
  <Icon as={BsFillPeopleFill} mt={'-2px'} />&nbsp;Creators
  </Button>

<Button  ml={'auto'} display={'flex'} alignItems={'center'} colorScheme='teal' size={'xs'} variant={'outline'}>visit site</Button>
                  
                    
                    </div>
                    
                    <div id='likebtndiv' className={styles.likesave}>
                    
                    
                  
                     
                      <Button color={'white'} bg={'rgba(0, 128, 128,0.1)'} w={'fit-content'} h={'fit-content'} p={'3px'} mr={'10px'}  _hover={'none'} flexDirection="row" fontWeight={'medium'} fontSize={'sm'} onClick={()=>likeaction(post.serial,index)} id={'likebtn_'+post.serial}>{ post.likedppl.split(',').includes("0")  ? <Icon as={AiFillHeart} fontSize={'xl'}   style={{"color":"rgb(211, 48, 48)"}} /> : <Icon as={AiOutlineHeart}  fontSize={'xl'}  />}
                      <span style={{"marginLeft":"2px","marginTop":"2px"}}>{Math.min(post.likedppl.split(',').length,post.likedppl.length)}</span>
                      </Button>
                        
                        <Text style={{"fontSize":"15px","color":"rgb(128,128,128)"}} marginRight={'auto'}>
                        2.5K views
                        </Text>
                        
                        <Button color={'white'} _hover={'none'} flexDirection="column"  marginLeft={'0px'} fontWeight={'medium'} bg={'none'} onClick={()=>commentHelper(post.serial)} fontSize={'xs'}><Icon fontSize={'lg'}  as={SlBubble}/>
                        
                        </Button>

                        <Button color={'white'} _hover={'none'} flexDirection="column"  marginLeft={'0px'} fontWeight={'medium'} bg={'none'} fontSize={'xs'} > <Icon fontSize={'lg'}  as={LiaShareSolid}/>
                     
                        </Button>  
                        <Button color={'white'} flexDirection="column" _hover={'none'} fontWeight={'medium'} bg={'none'} fontSize={'xs'} onClick={()=>saveaction(post.serial,index)} id={'savebtn_'+post.serial}>{post.savedppl.split(',').includes("0")  ? <Icon as={BsBookmarkFill} fontSize={'lg'}  style={{"color":"white"}} /> : <Icon fontSize={'lg'}  as={BsBookmark}/>}
                     
                        </Button>
                       
                    </div> 
                    </>
                    }
                      
                    
                    </div>
                  
                    </FadeInCard>
              ))}
               {loading ? (
                <>
                 {arr.map((x,index)=>(
        <div className={styles.postcard} key={index} style={{"border":"none","borderRadius":"0px"}}>
          <Stack opacity='0.5'>
    <Skeleton height='210px' borderRadius='xl' />
    <Skeleton height='20px' borderRadius='md' />
    <Skeleton height='20px' borderRadius='md' />
      <Skeleton height='20px' borderRadius='md' />
      </Stack>
        </div>
                 ))}
                    </>
      ) : (
        <>
        </>
      )}
              </div>
              
             
     </>
  )
}
