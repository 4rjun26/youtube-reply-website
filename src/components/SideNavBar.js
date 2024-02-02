'use client'
import React, { use } from 'react'

import { useLinkPreview } from "get-link-preview";
import PocketBase from 'pocketbase'
import axios from 'axios';
// import { Scrollbars } from 'react-custom-scrollbars';
import { MdOutlinePersonSearch,MdOutlineLogout,MdOutlineAddComment ,MdOutlineExplore,MdOutlineDashboard,MdOutlineGroup,MdOutlineVideoCameraFront ,MdOutlineBookmarks } from 'react-icons/md';
import { TbSquarePlus } from 'react-icons/tb';
import styles from '../app/styles/Feed.module.css'
import Image from 'next/image';
import Link from 'next/link';

import { BiLeftArrowAlt } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';
import { BiSolidVideos } from "react-icons/bi";
import { BsBookmarkCheck,BsBookmark, BsLink45Deg } from 'react-icons/bs';
import { AiOutlineHeart, AiOutlineQuestionCircle } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
import { BsPeople } from 'react-icons/bs';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { TbCards } from 'react-icons/tb';
import {DebounceInput} from 'react-debounce-input';
import {useState} from 'react'
import { useRouter } from 'next/navigation';
import { Roboto } from 'next/font/google';
import {useGenerationStore} from '@/state/idea-generation';

import {
    Avatar,
    Icon,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    useDisclosure,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Spinner,
    Tag,TagLabel,Input,
  Menu,MenuButton,MenuList,MenuItem,
    Button
  } from './Chakra'
 
  import {
    Tabs, TabList, TabPanels, Tab, TabPanel,TabIndicator,Box,Flex,InputGroup,InputLeftElement,InputRightElement,
    TagCloseButton,Alert,useToast,
    AlertIcon,Tooltip,Text,Show,Progress,Textarea,
  } from '@chakra-ui/react'
import { data } from 'autoprefixer';
  

const pacifico = Roboto({ subsets: ['latin'], weight: '300' });
 function SideNavBar() {
  var { getLinkPreviewData, loading, error, data } = useLinkPreview();
  const router = useRouter();
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  const toast = useToast();
  const { followings,followers } = useGenerationStore()
  const [userlist, setUserList] = useState([]);
  const [isPP, setIsPP] = useState(true);
  const [isSearchingUser,setisSearchingUser]=useState(false);

  const [postTags,setPostTags]=useState([]);
  const [postPeople,setPostPeople]=useState([]);
  const [previewImage,setPreviewImage] = useState('/image_placeholder.png');

 

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { isOpen: isPostOpen, onOpen: openPost, onClose: closePost } = useDisclosure();
    const { isOpen: isFrOpen, onOpen: openFr, onClose: closeFr } = useDisclosure();

    const btnRef = React.useRef()

  return (
    <div>
{/* Friends */}
<Show breakpoint='(max-width: 900px)'>
<Drawer
        isOpen={isFrOpen}
        placement='bottom'
        onClose={closeFr}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={'rgb(33,33,33)'} color={'white'}  borderTopLeftRadius={'20px'} borderTopRightRadius={'20px'} >
          <DrawerCloseButton color={'white'} />
          <DrawerHeader fontSize={'md'} textAlign={'center'}>People you follow</DrawerHeader>

          <DrawerBody>
          </DrawerBody>

          <DrawerFooter>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>
</Show>




{/* Search user */}
       <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        size='md'
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={'rgb(33,33,33)'} color={'white'}>
          <DrawerCloseButton color={'white'} />
          <DrawerHeader>Seach User</DrawerHeader>

          <DrawerBody>
          <DebounceInput
          minLength={2}
          element={Input}
          debounceTimeout={500}
          autoComplete='off'
          type='search'
          id='usernamesrch' placeholder='Type here...'
          />
       
          </DrawerBody>

          <DrawerFooter>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <div className={styles.bottomnavbar}>
        <Button color={'rgb(242,242,242)'} flexDirection="column" fontWeight={'medium'} bg={'none'} fontSize={'xs'}><Icon fontSize={'xl'} as={MdOutlineExplore}/>
        <span>Explore</span>
        </Button>
 
        <Button color={'rgb(242,242,242)'} flexDirection="column" fontWeight={'medium'} bg={'none'} fontSize={'xs'}><Icon fontSize={'xl'} as={MdOutlinePersonSearch}/>
        <span>Search</span>
        </Button>
 
 
        <Button color={'rgb(242,242,242)'}  flexDirection="column" fontWeight={'medium'} bg={'none'} fontSize={'xs'}><Icon fontSize={'xl'} as={TbSquarePlus}/>
        <span>Add post</span>
        </Button>
 
        {/* <Menu> */}
  <Button color={'rgb(242,242,242)'} flexDirection="column" fontWeight={'medium'} bg={'none'} fontSize={'xs'}><Icon fontSize={'xl'} as={MdOutlineGroup}/>
  <span>Followings</span>
  </Button>

 
        <Button color={'rgb(242,242,242)'} flexDirection="column" fontWeight={'medium'} bg={'none'} fontSize={'xs'}><Icon fontSize={'xl'} as={MdOutlineBookmarks}/>
        <span>Saved</span>
        </Button>
 
      </div>
         <div className={styles.menu}>
                {/* <Scrollbars 
                autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
                universal={true} style={{ "width":"100%", "height":"100%"}}> */}
                    <Button h={'50px'} bg={'none'} _hover={{"background":"rgb(43,43,43)"}} color={'rgb(242,242,242)'} onClick={()=>{changeOption(0)}} display={'flex'} justifyContent={'left'} w={'full'} className={pacifico.className}><Icon style={{"scale":"1.3"}} as={MdOutlineVideoCameraFront}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;My Videos</Button>
                    <Link href={'/saved'}><Button  h={'50px'}   bg={'none'} _hover={{"background":"rgb(43,43,43)"}} color={'rgb(242,242,242)'}  w={'full'}   display={'flex'} justifyContent={'left'}><Icon style={{"scale":"1.3"}} as={MdOutlineDashboard}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dashboard</Button></Link>
                    <Button   h={'50px'}  bg={'none'} _hover={{"background":"rgb(43,43,43)"}} color={'rgb(242,242,242)'} onClick={openPost}  w={'full'}   display={'flex'} justifyContent={'left'}><Icon style={{"scale":"1.3"}} as={MdOutlineAddComment}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add comment</Button>
                   <Button   h={'50px'}  bg={'none'} _hover={{"background":"rgb(43,43,43)"}} color={'rgb(242,242,242)'} onClick={onOpen}  w={'full'}  display={'flex'} justifyContent={'left'}><Icon style={{"scale":"1.3"}} as={MdOutlineLogout}/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Log out</Button>
                    
                   
                </div>
    </div>
  )
}

export default SideNavBar

// export async function getServerSideProps(router) {

//     const client = await MongoClient.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     const db = client.db(process.env.DB_NAME);
//     var categories=db.collection('posts');
//     var accs=db.collection('accounts');

//     var f=[]; //following
//         var ac= await accs.find({"username":"arjun26"},{"following":1}).toArray();
//         ac.forEach(function(obj){
//             f=obj.following;
//         })
  
//     var followings=[];
//     followings=await accs.find({serial: { $in: f}}).toArray();
//     console.log(followings);
//          client.close();
  
//     return {
//       props: {
//           followings: followings.map((following) => ({
//             ...following,
//             _id: following._id.toString(),
//           })),
//           revalidate: 1,
//         },

//     };
//   }