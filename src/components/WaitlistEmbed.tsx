import React from 'react'

interface WaitlistEmbedProps {
  waitlistKey: string
  height?: string
}

export default function WaitlistEmbed({
  waitlistKey,
  height = '450px',
}: WaitlistEmbedProps) {
  return (
    <div className="waitlist-container">
      <div
        className="waitlister-form"
        data-waitlist-key={waitlistKey}
        data-height={height}
      />
    </div>
  )
}
