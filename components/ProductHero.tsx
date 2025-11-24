'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ShoppingCart } from 'lucide-react'

interface ProductHeroProps {
  name: string
  benefit: string
  price: number
  currency: string
  onAddToCart: () => void
}

export function ProductHero({ name, benefit, price, currency, onAddToCart }: ProductHeroProps) {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Product Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="relative w-full aspect-square lg:aspect-auto lg:h-[600px]"
        >
          <div className="relative w-full h-full rounded-xl lg:rounded-[3rem] overflow-hidden shadow-xl">
            <Image
              src="/images/messenger-bag-hero.jpg"
              alt="Premium leather messenger bag in rich cognac brown, showcasing full-grain Italian leather with brass hardware"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
            />
          </div>
          {/* Decorative organic shape overlay */}
          <div className="absolute -z-10 -inset-4 rounded-[3rem] opacity-20 blur-2xl bg-gradient-to-br from-primary to-accent" />
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          className="space-y-6 lg:sticky lg:top-24"
        >
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground"
            >
              {name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl text-muted-foreground"
            >
              {benefit}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="pt-4"
          >
            <div className="flex items-baseline gap-2">
              <span className="text-5xl sm:text-6xl font-bold text-foreground">
                ${price.toLocaleString()}
              </span>
              <span className="text-xl text-muted-foreground">{currency}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-6"
          >
            <button
              onClick={onAddToCart}
              className="organic-button w-full sm:w-auto"
              aria-label="Add premium leather messenger bag to cart"
            >
              <ShoppingCart className="w-5 h-5 mr-2" aria-hidden="true" />
              Add to Cart
            </button>

            <p className="mt-4 text-sm text-muted-foreground">
              Free shipping on orders over $500. Lifetime craftsmanship warranty included.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="pt-6 space-y-3 border-t border-border"
          >
            <div className="flex items-center gap-3 text-sm">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Full-grain Italian leather from Tuscany</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Handcrafted in small batches of 50</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Lifetime craftsmanship warranty</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
