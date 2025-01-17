import ImageSlider from "./ImageSlider";
const App = () => {
  const slides = [
    { url: "image-1.jpg", title: "Audi-R8" },
    { url: "image-2.jpg", title: "Dodge Challener" },
    { url: "image-3.jpg", title: "Ford Mustang" },
    { url: "image-4.jpg", title: "McLaren" },
    { url: "image-5.jpg", title: "Porshe" },
    { url: "image-6.jpg", title: "Toyoto Supra" },
  ];
  const containerStyles = {
    width: "1200px",
    height: "600px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>
        <center>Cars</center>
      </h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;
