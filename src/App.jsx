import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="app-container">
      <AppHeader />
      <CardList />
      <AppFooter />
    </div>
  );
}

export default App;
