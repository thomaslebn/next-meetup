import MainHeader from "./main-header-component";

const Layout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main> {children} </main>
    </>
  );
};

export default Layout;
