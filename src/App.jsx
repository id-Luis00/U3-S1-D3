
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome ";
import AllTheBooks from "./components/AllTheBooks";
import fantasy from "./data/fantasy.json"
import history from "./data/history.json"
import horror from "./data/horror.json"
import BookList from "./components/BookList";


function App() {
  return (
    <div className="App">
      <MyNav />

      <Welcome />
      <BookList book={fantasy} />
      {/* <AllTheBooks genre={horror} /> */}
      <MyFooter />
    </div>
  );
}

export default App;
