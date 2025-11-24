'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, ShieldCheck, Truck, RotateCcw } from 'lucide-react'

interface ProductPricingProps {
  price: number
  currency: string
  onAddToCart: () => void
}

export function ProductPricing({ price, currency, onAddToCart }: ProductPricingProps) {
  return (
    <section
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16"
      aria-labelledby="pricing-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className="max-w-4xl mx-auto"
      >
        <div className="organic-card p-8 lg:p-12 text-center">
          <h2 id="pricing-heading" className="sr-only">
            Purchase Information
          </h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-lg text-muted-foreground mb-4">
              Investment in Quality
            </p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-6xl sm:text-7xl font-bold gradient-organic bg-clip-text text-transparent">
                ${price.toLocaleString()}
              </span>
              <span className="text-2xl text-muted-foreground">{currency}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <button
              onClick={onAddToCart}
              className="organic-button text-lg px-12 py-5"
              aria-label="Add to cart and begin checkout"
            >
              <ShoppingCart className="w-6 h-6 mr-3" aria-hidden="true" />
              Add to Cart
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <p className="text-sm font-medium">Lifetime Warranty</p>
              <p className="text-xs text-muted-foreground">Craftsmanship guaranteed</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Truck className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <p className="text-sm font-medium">Free Shipping</p>
              <p className="text-xs text-muted-foreground">Orders over $500</p>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <RotateCcw className="w-6 h-6 text-primary" aria-hidden="true" />
              </div>
              <p className="text-sm font-medium">30-Day Returns</p>
              <p className="text-xs text-muted-foreground">No questions asked</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
