'use client'
import ReactCrop, { type Crop } from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { useState } from 'react'

export default function ImageCrop() {
  const [crop, setCrop] = useState<Crop>()
  return (
    <ReactCrop crop={crop} onChange={c => setCrop(c)} aspect={16/9}>
      <img src={'/heroimg.png'} />
    </ReactCrop>
  )
}