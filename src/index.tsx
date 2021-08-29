import * as React from 'react'
import * as Head from 'next/head'

export function QuickSeo({
  title,
  description,
  image
}: {
  title: string
  description?: string
  image?: string
}) {
  const HeadComponent = Head.default || Head
  return (
      <HeadComponent>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="title" content={title} />

      {description && <>
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
      </>}

      {image && (
        <>
          <meta property="og:image" content={image} />
          <meta name="twitter:image" content={image} />
          <meta name="twitter:card" content="summary_large_image" />
        </>
      )}
      </HeadComponent>
  )
}
