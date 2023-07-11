import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  const FooterInfo = {
    copyRightText: "All rights reserved",
    copyRightYear: 2023,
    owner: "Prince Noman",
  };
  return (
    <>
      <Header title="My React Website" />
      <Content />
      <Footer footerInfo={FooterInfo} />
    </>
  );
}

export default App;
