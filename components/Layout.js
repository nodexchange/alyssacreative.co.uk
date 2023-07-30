import Navbar from '@/sections/Navbar'
import Footer from '@/sections/Footer'

export default function Layout({ children }) {
  return (
    <>
      <div className="bg-gray-50">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
