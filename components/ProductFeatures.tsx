'use client'

import { motion } from 'framer-motion'
import { FeatureCard } from './FeatureCard'
import type { Feature } from '@/lib/product-data'

interface ProductFeaturesProps {
  features: Feature[]
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20"
      aria-labelledby="features-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="text-center mb-12 lg:mb-16"
      >
        <h2
          id="features-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4"
        >
          Crafted for a Lifetime
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
          Every detail matters. From the leather we source to the hardware we
          select, this messenger bag is designed to be your trusted companion
          for decades.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}
