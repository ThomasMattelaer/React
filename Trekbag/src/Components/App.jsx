import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import SideBar from "./SideBar";

function App() {
  return (
    <>
      <BackgroundHeading></BackgroundHeading>

      <main>
        <Header></Header>
        <SideBar></SideBar>
        <ItemList></ItemList>
      </main>

      <Footer></Footer>
    </>
  );
}

export default App;
