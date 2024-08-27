
'use client'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants, Empty, EmptyDescription, EmptyImage, EmptyTitle } from 'keep-react'
import Button from '@/components/ui/Button/Button'
import { House } from 'phosphor-react'

 const NotFoundPage = () => {
  return (
    <Empty>
      <EmptyImage>
        <Image
          src="https://staticmania.cdn.prismic.io/staticmania/ed90f683-c1df-4bad-afa4-65ce4c65287e_Property+1%3DSpaceship_+Property+2%3DMd.svg"
          height={234}
          width={350}
          alt="404"
        />
      </EmptyImage>
      <EmptyTitle className="mb-[14px] mt-5">404 Not Found</EmptyTitle>
      <EmptyDescription className="mb-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.
      </EmptyDescription>
      <Link className='bg-primary text-white flex justify-around items-center' href="/">
      <House size={26}  className='ml-3 rounded'/>
       <Button text='Go To Home' className='bg-primary'/>
      </Link>
    </Empty>
  )
}

export default NotFoundPage;
