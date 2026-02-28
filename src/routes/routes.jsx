import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { ContactsPage } from '../common/components/ContactsPage'
import { Product } from '../common/components/Product/Product'
import Layout from '../layouts/Layout'
import { AboutBrand } from '../pages/AboutBrand/AboutBrand'
import { Cart } from '../pages/Cart'
import { Catalog } from '../pages/Catalog'
import { Checkout } from '../pages/Checkout/Checkout'
import { ContactForm } from '../pages/ContactForm'
import { DetailCatalog } from '../pages/DetailCatalog/DetailCatalog'
import { Main } from '../pages/Main'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { ROUTER_PATHS } from '../routes/routesPaths'

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ROUTER_PATHS.main,
        element: <Main />,
      },
      {
        path: ROUTER_PATHS.catalog,
        element: <Catalog />,
      },
      {
        path: ROUTER_PATHS.detail_catalog,
        element: <DetailCatalog />,
      },
      {
        path: ROUTER_PATHS.shop,
        element: <Product />,
      },
      {
        path: ROUTER_PATHS.registration,
        element: <SignUp />,
      },
      {
        path: ROUTER_PATHS.contacts_page,
        element: <ContactsPage />,
      },
      {
        path: ROUTER_PATHS.contacts_form,
        element: <ContactForm />,
      },
      {
        path: ROUTER_PATHS.cart,
        element: <Cart />,
      },
      {
        path: ROUTER_PATHS.about_brand,
        element: <AboutBrand />,
      },
      {
        path: ROUTER_PATHS.checkout,
        element: <Checkout />,
      },
      {
        path: ROUTER_PATHS.login,
        element: <SignIn />,
      },
      {
        path: ROUTER_PATHS.profile,
        element: <ProfilePage />,
      },
    ],
  },
])
