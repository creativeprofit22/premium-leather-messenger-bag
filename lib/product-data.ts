export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export interface Product {
  name: string
  benefit: string
  price: number
  currency: string
  features: Feature[]
}

export const productData: Product = {
  name: 'Premium Leather Messenger Bag',
  benefit: 'Carry your essentials in timeless style.',
  price: 1297,
  currency: 'USD',
  features: [
    {
      id: 'feature-1',
      title: 'Full-Grain Italian Leather',
      description: 'Crafted from the finest full-grain Italian leather, sourced from certified tanneries in Tuscany. This premium material develops a rich patina over time, making each bag uniquely yours.',
      icon: 'award',
    },
    {
      id: 'feature-2',
      title: 'YKK Heavy-Duty Brass Zippers',
      description: 'Equipped with premium YKK brass zippers that glide smoothly and resist corrosion. These industry-leading zippers are tested to withstand over 10,000 open-close cycles.',
      icon: 'zap',
    },
    {
      id: 'feature-3',
      title: 'Padded Laptop Compartment',
      description: 'Dedicated padded compartment fits laptops up to 15 inches. Soft microfiber lining protects your device from scratches while foam padding guards against impacts.',
      icon: 'laptop',
    },
    {
      id: 'feature-4',
      title: 'Adjustable Leather Strap',
      description: 'Premium leather shoulder strap adjusts from 43 to 54 inches for perfect fit. Padded section distributes weight evenly for all-day comfort, even when fully loaded.',
      icon: 'move',
    },
    {
      id: 'feature-5',
      title: 'Lifetime Craftsmanship Warranty',
      description: 'We stand behind our work with a lifetime warranty covering all stitching, hardware, and materials. If anything fails due to craftsmanship, we will repair or replace it free of charge.',
      icon: 'shield-check',
    },
    {
      id: 'feature-6',
      title: 'Hand-Stitched Reinforced Seams',
      description: 'Every seam is reinforced with hand-stitching using industrial-grade waxed thread. This traditional technique ensures your bag can handle heavy loads for decades.',
      icon: 'scissors',
    },
    {
      id: 'feature-7',
      title: 'Multiple Interior Pockets',
      description: 'Thoughtfully designed interior includes multiple pockets and organizer compartments for pens, phone, keys, wallet, and documents. Everything has its place.',
      icon: 'grid',
    },
    {
      id: 'feature-8',
      title: 'Weather-Resistant Waxed Finish',
      description: 'Hand-applied waxed finish provides natural water resistance. Light rain beads off the surface, protecting your belongings. The wax can be reapplied to maintain protection.',
      icon: 'cloud-rain',
    },
    {
      id: 'feature-9',
      title: 'Antique Brass Hardware',
      description: 'All metal hardware is solid antique brass that will not rust or tarnish. Each piece is individually cast and hand-finished for exceptional durability and timeless aesthetic.',
      icon: 'sparkles',
    },
    {
      id: 'feature-10',
      title: 'Handcrafted in Small Batches',
      description: 'Each bag is handcrafted by skilled artisans in limited batches of 50. This ensures meticulous attention to detail and maintains the highest quality standards.',
      icon: 'hand',
    },
  ],
}
