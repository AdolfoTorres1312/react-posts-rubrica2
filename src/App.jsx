import PostsList from './components/PostsList.jsx'
import './App.css'

export default function App() {
  return (
    <div className="app-container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">MEDULA</a>
        </div>
      </nav>

      <section className="hero py-4">
        <div className="container">
          <span className="badge rounded-pill mb-2">Demostración técnica</span>
          <h1 className="h3 mb-1">Lista de Publicaciones</h1>
          <p className="text-muted mb-0">
            Ejemplo en React usando <strong>useState</strong> y <strong>useEffect</strong> para consumir una API.
          </p>
          <small className="text-muted">
            Fuente de datos: <code>https://jsonplaceholder.typicode.com/posts</code>
          </small>
        </div>
      </section>

      <main className="container my-4 app-main">
        <PostsList />
      </main>

      <footer className="text-center text-muted py-4 border-top">
        <small>MEDULA • Hecho con React + Bootstrap • JSONPlaceholder</small>
      </footer>
    </div>
  )
}
