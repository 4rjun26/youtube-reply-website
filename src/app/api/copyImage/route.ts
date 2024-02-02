import { NextRequest } from "next/server";
import axios from 'axios';
import fs from 'fs';

export async function POST(req: NextRequest){
  const body = await req.json();
  const response = await axios.get(body.imgUrl, { responseType: 'arraybuffer' });
  const filename='./public/posts/post_'+body.serialno+'.webp'
  fs.writeFile(filename, response.data, (err) => {
    if (err) throw err;
  });
  return new Response('OK')
}