import * as React from 'react'
import Head from 'next/head'

export default function QuickSeo({
  title,
  description,
  image
}: {
  title: string
  description?: string
  image?: string
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta property='og:title' content={title} />
      <meta name='twitter:title' content={title} />
      <meta name='title' content={title} />

      {description && (
        <React.Fragment>
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
          <meta name='twitter:description' content={description} />
        </React.Fragment>
      )}

      {image && (
        <React.Fragment>
          <meta property='og:image' content={image} />
          <meta name='twitter:image' content={image} />
          <meta name='twitter:card' content='summary_large_image' />
        </React.Fragment>
      )}
    </Head>
  )
}
