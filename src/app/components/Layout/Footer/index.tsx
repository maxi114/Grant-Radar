'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useEffect, useState } from 'react'
import { footerlLinksData } from '@/app/types/footerlinks'
import { socialLinksData } from '@/app/types/sociallinks'

const Footer = () => {
  const [footerLinks, setFooterLinks] = useState<footerlLinksData[]>([])
  const [socialLinks, setSocialLinks] = useState<socialLinksData[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/data')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        setFooterLinks(data.FooterLinks)
        setSocialLinks(data.SocialLinks)
      } catch (error) {
        console.error('Error fetching services:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <div className='bg-midnight_text'>
      <div className='container p-4'>
        <div className='my-6 grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 gap-y-5'>
          {/* COLUMN-1 */}
          <div className='sm:col-span-6 lg:col-span-3'>
            <div className='flex shrink-0 items-center border-right'>
              <Image
                src='/images/logo/1.png'
                alt='logo'
                width={214}
                height={55}
              />
            </div>
          </div>
          <div className='sm:col-span-6 lg:col-span-5 flex items-center'>
            <div className='flex gap-4'>
              {footerLinks.map((items, i) => (
                <div key={i}>
                  <Link
                    href={`${items.href}`}
                    className='text-lg font-normal text-white/60 flex items-center justify-center hover:text-white hover:underline'>
                    {items.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
         
        </div>
        <div className='pt-4 flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-t-white/30'>
          <h4 className='text-lg text-center md:text-start font-normal text-white/60'>
            @2025.All rights reserved
          </h4>
          
        </div>
      </div>
    </div>
  )
}

export default Footer
