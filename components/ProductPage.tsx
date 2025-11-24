'use client'

import { useState } from 'react'
import { ProductHero } from './ProductHero'
import { ProductFeatures } from './ProductFeatures'
import { ProductPricing } from './ProductPricing'
import { OrganicBlobs } from './OrganicBlobs'
import type { Product } from '@/lib/product-data'

interface ProductPageProps {
  product: Product
}

export function ProductPage({ product }: ProductPageProps) {
  const [isAddingToCart, setIsAddingToCart] = useState(false)

  const handleAddToCart = () => {
    setIsAddingToCart(true)
    // Simulate cart action
    setTimeout(() => {
      setIsAddingToCart(false)
      // In production, this would trigger actual cart functionality
      console.log('Added to cart:', product.name)
    }, 1000)
  }

  return (
    <main className="relative">
      <OrganicBlobs />

      <div className="relative z-10">
        <ProductHero
          name={product.name}
          benefit={product.benefit}
          price={product.price}
          currency={product.currency}
          onAddToCart={handleAddToCart}
        />

        <ProductFeatures features={product.features} />

        <ProductPricing
          price={product.price}
          currency={product.currency}
          onAddToCart={handleAddToCart}
        />
      </div>
    </main>
  )
}
