import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Categories',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'Movies',
        to: '/Movies/MovieList',
      }

    ],
  }
]

export default _nav
