// App.js
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; // Import your existing styles
import { Suspense, lazy } from 'react';
import { RecoilRoot } from 'recoil';
import Loading from './components/Loading';
import AboutUs from './components/About';
import ErrorPage from './components/ErrorPage';
const Navbar = lazy(() => import('./components/Navbar'))
const Home = lazy(() => import('./pages/Home'))
const Footer = lazy(() => import('./components/Footer'))
const NotesArea = lazy(() => import('./pages/NotesArea'))
const NavbarWithSteroids = lazy(() => import('./components/BottomNavbar'))
// const UploadNotes = lazy(() => import('./pages/UploadNotes'));
const UploadFile = lazy(() => import('./pages/UploadFile'));
const SubSemisterArea = lazy(() => import('./components/SubSemisterArea'));
const LoginForm=lazy(()=>import('./pages/LoginForm'))
const SignupForm=lazy(()=>import('./pages/SignupForm'))
const AdminDashboard=lazy(()=>import('./pages/AdminDashboard'))
function App() {

 

  return (

    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <RecoilRoot>

          <Navbar />
          <NavbarWithSteroids />

          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<NotesArea />} errorElement={<div>Not Found..huihiuii</div>}>
              <Route path=":semId"  element={<SubSemisterArea />} >
                <Route path=":subject" element={<SubSemisterArea />} />
              </Route>
            </Route>
            <Route path="/upload" element={<UploadFile />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<ErrorPage/>} />
          </Routes>

          <Footer />
        </RecoilRoot>

      </BrowserRouter>
    </Suspense>


  );
}

export default App;
