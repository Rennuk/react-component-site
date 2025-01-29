import MainLayout from '../Layouts/MainLayout';
import Home from '../Pages/Home';
import ProductList from '../Pages/ProductList/ProductList';
import Product from '../Pages/Product';
import Games from '../Pages/Games';
import PageNotFound from '../Pages/PageNotFound';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: 'products', element: <ProductList /> },
      // { path: 'products/:id', element: <Product /> },
      { path: 'games', element: <Games /> },
      { path: ':menuCategory/:subCategory', element: <ProductList /> },
      { path: ':category-:subcategory/:id', element: <Product /> },
      { path: '*', element: <PageNotFound /> },
    ],
  },
];

export default routes;
