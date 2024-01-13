import React from 'react'

type VideoGridItemProps = {
    id: string
    title: string
    channel: {
        id: string
        name: string
        profileUrl: string
    }
    views: number
    postedAt: Date
    duration: number
    thumbnailUrl: string
    videoUrl: string
}

export function VideoGridItem({
    id, 
    title, 
    channel, 
    views, 
    postedAt, 
    duration, 
    thumbnailUrl, 
    videoUrl
}: VideoGridItemProps) {

}

const VideoGridItem = () => {
  return (
    <div className='flex flex-col gap-2'>
        <a href={`/watch?v=${id}`} className='relative aspect-video'/>
        
        </a>
    </div>
  )
}

export default VideoGridItem