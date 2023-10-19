import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: 'Marcus Dev Dashboard',
  description:
    'Marcus Dev Dashboard Page - Handcrafting award winning digital experiences'
};

export default function Layout({ children }) {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
}
