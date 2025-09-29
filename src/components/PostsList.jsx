import { useEffect, useState } from "react";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelado = false;

    (async () => {
      try {
        setCargando(true);
        setError(null);

        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Error HTTP: ${res.status}`);

        const data = await res.json();
        if (!cancelado) setPosts(data.slice(0, 10)); // primeras 10
      } catch (err) {
        if (!cancelado) setError(err.message);
      } finally {
        if (!cancelado) setCargando(false);
      }
    })();

    return () => { cancelado = true; };
  }, []);

  if (cargando) {
    return (
      <div className="d-flex align-items-center">
        <div className="spinner-border me-2" role="status" aria-hidden="true"></div>
        <span>Cargando publicaciones…</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Ocurrió un error al cargar las publicaciones: <strong>{error}</strong>
      </div>
    );
  }

  return (
    <div className="row g-3">
      {posts.map((post) => (
        <div key={post.id} className="col-12 col-md-6">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
            </div>
            <div className="card-footer bg-white">
              <small className="text-muted">ID: {post.id}</small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
