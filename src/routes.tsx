
import { lazy } from 'react';
import GlobalLayout from './pages/_layout'

import DynamicIndex from './pages/index'
import DynamicProductsIndex from './pages/products/index'
import DynamicId from './pages/products/[id]'
import DynamicCart from './pages/cart'


export const routes = [
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: <DynamicIndex />, index: true},
      { path: '/products', element: <DynamicProductsIndex />, index: true},
      { path: '/products/:id', element: <DynamicId />, },
      { path: '/cart', element: <DynamicCart />, },
    ]
  }
]

export const pages = [
  { route: '/' },
  { route: '/products' },
  { route: '/products/:id' },
  { route: '/cart' },
]
