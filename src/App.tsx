// App.js
import { BrowserRouter, Route, RouteObject, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css'; // Import your existing styles
import { Suspense, lazy } from 'react';
import { RecoilRoot } from 'recoil';
import Loading from './components/Loading';
const Navbar = lazy(() => import('./components/Navbar'))
const Home = lazy(() => import('./pages/Home'))
const Footer = lazy(() => import('./components/Footer'))
const NotesArea = lazy(() => import('./pages/NotesArea'))
function App() {

  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Home />,
      errorElement: <div>Not Found..huihiuii</div>
    },
    {
      path: '/notes',
      element: <NotesArea />
    }
  ]

  const router = createBrowserRouter(routes)
  return (

    <Suspense fallback={<Loading/>}>
      {/* <RouterProvider router={router} >
        <Navbar />
        <Footer />
      </RouterProvider> */}
      <BrowserRouter>
        <RecoilRoot>

          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} errorElement={<div>Not Found..huihiuii</div>} />
            <Route path="/notes" element={<NotesArea />} />
            {/* <Route  path="/" element={<Home/>} errorElement={<div>Not Found..huihiuii</div>} /> */}
          </Routes>
          <Footer />
        </RecoilRoot>

      </BrowserRouter>
    </Suspense>


  );
}

export default App;
