'use client'

import { motion } from 'framer-motion'
import {
  Award,
  Zap,
  Laptop,
  Move,
  ShieldCheck,
  Scissors,
  Grid,
  CloudRain,
  Sparkles,
  Hand,
  LucideIcon,
} from 'lucide-react'

const iconMap: Record<string, LucideIcon> = {
  award: Award,
  zap: Zap,
  laptop: Laptop,
  move: Move,
  'shield-check': ShieldCheck,
  scissors: Scissors,
  grid: Grid,
  'cloud-rain': CloudRain,
  sparkles: Sparkles,
  hand: Hand,
}

interface FeatureCardProps {
  title: string
  description: string
  icon: string
  index: number
}

export function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  const Icon = iconMap[icon] || Award

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      className="organic-card p-6 lg:p-8 group"
    >
      <div className="flex items-start gap-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
        >
          <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
        </motion.div>

        <div className="flex-1 space-y-2">
          <h3 className="text-xl font-semibold text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.article>
  )
}
