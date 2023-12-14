import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtil" aboutText="About Text" />
      <TextForm heading="Enter the Heading " />
    </>
  );
}

export default App;
