import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <WeatherProvider>
        <NavMenu />
        
        <Forecast />
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Homepage />} />

              {/* Nested routes set up as-is from the Ed lesson! */}
              <Route path="/articles" element={<Outlet />}>
              <Route index element={<Articles />} />
              <Route path=":postcode" element={<Page />} />
            </Route>
          </Routes>
      </BrowserRouter>
        <Radar />
      </WeatherProvider>
    </div>
  );
}

export default App;
