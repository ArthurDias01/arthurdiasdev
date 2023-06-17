'use client'
import { Envelope, MapPin, Phone } from '@phosphor-icons/react'

interface Props {
  type: 'email' | 'phone' | 'address'
  info: string
}

export const ContactCard = ({ type, info }: Props) => {
  return (
    <section className="text-white flex flex-row p-4 bg-neutral-500 dark:bg-neutral-900 rounded-[20px] min-w-1/3">
      <div className="flex flex-row items-center p-4">
        {type === 'email' && <Envelope size={24} />}
        {type === 'phone' && <Phone size={24} />}
        {type === 'address' && <MapPin size={24} />}
      </div>
      <div className="h-auto truncate">
        <h3 className="text-lg font-bold">
          {type === 'email' && 'Email'}
          {type === 'phone' && 'Phone'}
          {type === 'address' && 'Address'}
        </h3>

        <p className="text-sm">
          {type === 'email' && (
            <a href={`mailto:${info}`} className="underline">
              {info}
            </a>
          )}
          {type === 'phone' && (
            <a href={`tel:${info.replace(/^\D+/g, '')}`} className="underline">
              {info}
            </a>
          )}
          {type === 'address' && info}
        </p>
      </div>
    </section>
  )
}
