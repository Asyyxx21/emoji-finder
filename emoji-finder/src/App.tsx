import './App.css'

function App() {
  return (
    <div className="app-container">
      {/* Шапка (Flex) */}
      <header className="header">
        <div className="header-content">
          <h1>Emoji Finder</h1>
          <p>Find emoji by keywords</p>
        </div>
      </header>

      {/* Поиск */}
      <div className="search-container">
        <input type="text" placeholder="Placeholder" className="search-input" />
      </div>

      {/* Основная часть с карточками (Grid) */}
      <main className="main-content">
        <div className="cards-grid">
          <div className="card">
            <h2>100</h2>
            <p>Hundred, points, symbol, wow, win, perfect, parties</p>
          </div>
          <div className="card">
            <h2>1234</h2>
            <p>input symbol for numbers symbol</p>
          </div>
          <div className="card">
            <h2>1234</h2>
            <p>input symbol for numbers symbol</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App