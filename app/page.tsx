import { ProductPage } from '@/components/ProductPage'
import { productData } from '@/lib/product-data'

export default function Home() {
  return <ProductPage product={productData} />
}
