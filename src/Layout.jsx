import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <main>
            <Header />
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
