// App.js
import { BrowserRouter, Route, RouteObject, Routes } from 'react-router-dom';
import './App.css'; // Import your existing styles
import { Suspense, lazy } from 'react';
import { RecoilRoot } from 'recoil';
import Loading from './components/Loading';
const Navbar = lazy(() => import('./components/Navbar'))
const Home = lazy(() => import('./pages/Home'))
const Footer = lazy(() => import('./components/Footer'))
const NotesArea = lazy(() => import('./pages/NotesArea'))
const NavbarWithSteroids = lazy(() => import('./components/BottomNavbar'))
const UploadNotes = lazy(() => import('./pages/UploadNotes'));
const UploadFile = lazy(() => import('./pages/UploadFile'));
const SubSemisterArea = lazy(() => import('./components/SubSemisterArea'));
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

  return (

    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <RecoilRoot>

          <Navbar />
          <NavbarWithSteroids />

          <Routes >
            <Route path="/" element={<Home />} errorElement={<div>Not Found..huihiuii</div>} />
            <Route path="/notes" element={<NotesArea />} errorElement={<div>Not Found..huihiuii</div>}>
              <Route path=":semId"  element={<SubSemisterArea />} >
                <Route path=":subject" element={<SubSemisterArea />} />
              </Route>
            </Route>
            <Route path="/upload" element={<UploadFile />} />
            {/* <Route path="*" element={<div>Not Found..huihiuii</div>} /> */}
          </Routes>

          <Footer />
        </RecoilRoot>

      </BrowserRouter>
    </Suspense>


  );
}

export default App;
