import { Routes, Route } from 'react-router-dom';
import { SigninForm } from './_auth/forms/SigninForm';
import { SignupForm } from './_auth/forms/SignupForm';
import { Home } from './_root/pages';
import "./globals.css";
import { AuthLayout } from './_auth/AuthLayout';
import RootLayout from './_root/RootLayout';
import { Toaster } from "@/components/ui/toaster"


export const App = () => {
  return (
    <main className='flex h-screen'>
      <Routes>
        {/* {Public Route} */}
        <Route element={<AuthLayout />}>
          <Route path='/sign-in' element={<SigninForm />} />
          <Route path='/sign-up' element={<SignupForm />} />
        </Route>

        {/* {Private Route} */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>

      </Routes>
      <Toaster />
    </main>
  )
}
