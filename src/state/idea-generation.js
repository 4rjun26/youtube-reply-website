import { cache } from "swr/_internal";
import { create } from "zustand";
// import { useSession } from 'next-auth/react'


// const { data:session } = useSession();

async function getRecords() {
  const res = await fetch('http://192.168.43.43:8090/api/collections/accounts/records?filter=(followedppl~"321zkbywcttnf2y")',
  {cache:'no-store'}
  );
  const data = await res.json();
  return data.items;
}

export const useGenerationStore = create((set) => ({
  followings: [],
  feedslide: 0,
  setFeedslide: (newValue) => set({ feedslide: newValue }),
  setFollowings: (followings) => set({ followings }),
}));

// Initialize the store with data after fetching it
async function setPeople() {
  const users = await getRecords();
  var temparray=[];
  for(let i=0;i<users.length;i++){
    temparray.push(users[i].username);
  }
  if (users[0]!=undefined && users[0].followedppl != undefined) {
      useGenerationStore.getState().setFollowings(temparray);
    }
    else{
      useGenerationStore.getState().setFollowings([]);
    }
  }

// Call the setPeople function to initialize the store with data
setPeople();
