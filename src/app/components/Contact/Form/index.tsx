'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import WaitlistEmbed from '@/components/WaitlistEmbed'
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join Our Waitlist',
  description: 'Be the first to know when we launch',
  openGraph: {
    title: 'Join Our Waitlist',
    description: 'Be the first to know when we launch',
  },
};


const ContactForm = () => {
  return (
    <section id='contact'>
      <div className="container">
        <div className=' content-center justify-items-center'>
          <div className='wait'>
            <WaitlistEmbed waitlistKey={process.env.NEXT_PUBLIC_WAITLIST_KEY!} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
