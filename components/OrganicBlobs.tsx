'use client'

export function OrganicBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="organic-blob w-96 h-96 -top-48 -left-48"
        style={{ background: 'linear-gradient(135deg, hsl(25, 95%, 45%) 0%, hsl(42, 88%, 55%) 100%)' }}
      />
      <div
        className="organic-blob organic-blob-delayed w-80 h-80 top-1/3 -right-40"
        style={{ background: 'linear-gradient(225deg, hsl(35, 85%, 35%) 0%, hsl(25, 95%, 45%) 100%)' }}
      />
      <div
        className="organic-blob w-72 h-72 -bottom-36 left-1/4"
        style={{
          background: 'linear-gradient(45deg, hsl(42, 88%, 55%) 0%, hsl(25, 95%, 45%) 100%)',
          animationDelay: '10s'
        }}
      />
    </div>
  )
}
