import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>TamSquad</span>,

  docsRepositoryBase: 'https://tamsquad.com',
  footer: {
    text: 'TamSquad.com',
  },
  search: {
    component: false
  },
  feedback: {
    content() {
      return <></>
    }
  },
  editLink: {
    component() {
      return <></>
    }
  }
}

export default config
