import { Clock, Shield } from 'lucide-react';
import React from 'react'

const InfoCards = () => {

    const cards = [
    { icon: Clock, title: 'Service Availability', description: 'Operational all 365 days of the year' },
    { icon: Clock, title: 'Working Hours', description: 'From 9:00 AM to 7:00 PM', highlight: true },
    { icon: Shield, title: 'Trust', description: 'Commitment in service, consistency in trust' },
  ];

  return (
    <div className="py-12 gradient-bg">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((card, index) => (
            <div
              key={index}
              className="p-6 text-center text-white transition-all rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20"
            >
              <card.icon className="w-12 h-12 mx-auto mb-4" />
              <h3 className="mb-2 text-xl font-bold">{card.title}</h3>
              <p className={card.highlight ? 'text-yellow-300 font-semibold' : ''}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfoCards