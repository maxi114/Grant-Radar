import { NextResponse } from 'next/server'

import { headerItem } from '@/app/types/menu'
import { featureData } from '@/app/types/featuredata'
import { socialLinksData } from '@/app/types/sociallinks'
import { plansData } from '@/app/types/plans'
import { footerlLinksData } from '@/app/types/footerlinks'

const HeaderData: headerItem[] = [
  { label: 'Product', href: '/#product' },
  { label: 'Features', href: '/#features ' },
]

const FeatureData: featureData[] = [
  {
    imgSrc: '/images/features/time.svg',
    heading: 'Smart Deadline Tracker',
    paragraph:
      'Never miss another funding opportunity. Get reminders before it’s too late.',
  },
  {
    imgSrc: '/images/features/signal.svg',
    heading: 'Keep Your Equity',
    paragraph:
      'We prioritize grants and competitions so you can raise without giving up equity.',
  },
  {
    imgSrc: '/images/features/dollar.svg',
    heading: 'Curated Funding Feed',
    paragraph:
      'We filter and verify grants, pitch competitions, and startup programs so you focus on building.',
  },
]

const PlansData: plansData[] = [
  {
    heading: 'Lite',
    price: {
      monthly: 19,
      yearly: 190,
    },
    subscriber: 0.5,
    button: 'Purchase',
    option: [
      'Basic invoice generation',
      'Downloadable PDF invoice',
      'Unlimited transactions',
      'Emails for all the updates',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starone.svg',
  },
  {
    heading: 'Basic',
    price: {
      monthly: 29,
      yearly: 290,
    },
    subscriber: 0.5,
    button: 'Purchase',
    option: [
      'All Lite features',
      'Custom invoice templates',
      'Tax calculation support',
      'Automatic invoice reminders',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/startwo.svg',
  },
  {
    heading: 'Plus',
    price: {
      monthly: 59,
      yearly: 590,
    },
    subscriber: 0.5,
    button: 'Purchase',
    option: [
      'All Basic features',
      'Multi-currency support',
      'Invoice payment tracking',
      'Priority customer support',
    ],
    category: ['monthly', 'yearly'],
    imgSrc: '/images/pricing/starthree.svg',
  },
]

const FooterLinks: footerlLinksData[] = [
  { label: 'Product', href: '/#product' },
  { label: 'Features', href: '/#features ' },
]

const SocialLinks: socialLinksData[] = [
  {
    imgSrc: 'fa-brands:facebook-f',
    link: 'www.facebook.com',
    width: 10,
  },
  {
    imgSrc: 'fa6-brands:instagram',
    link: 'www.instagram.com',
    width: 14,
  },
  {
    imgSrc: 'fa6-brands:twitter',
    link: 'www.twitter.com',
    width: 14,
  },
]

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeatureData,
    PlansData,
    FooterLinks,
    SocialLinks,
  })
}
