import React from 'react'
import { Helmet } from 'react-helmet'
const Meta = (props) => {
  const { title, description, keywords } = props
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome to TonTon Shop',
  description:
    'TonTon Shop is a one top shop for all your furniture and household needs. We aim at providing a hassle free and enjoyable shopping experience to shoppers across the country.',
  keywords: 'furniture, wood, tables, chair, mirror, sets, prayers',
}

export default Meta
