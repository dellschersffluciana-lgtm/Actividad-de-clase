
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

function SpecialButton({ text }) {
  return <button>{text}</button>;
}

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}>

        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1710965560034-778eedc929ff?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            width="250"
            height="200"
          />
          <h2>Primavera</h2>
          <SpecialButton text="Botón 1" />
        </div>

        <div>
          <img
            src="https://png.pngtree.com/thumb_back/fh260/background/20240522/pngtree-abstract-cloudy-background-beautiful-natural-streaks-of-sky-and-clouds-red-image_15684333.jpg"
            width="250"
            height="200"
          />
          <h2>Cielo</h2>
          <SpecialButton text="Botón 2" />
        </div>

        <div>
          <img
            src="https://cdn.pixabay.com/photo/2026/02/20/12/38/pen_ash-snow-10134653_1280.jpg"
            width="250"
            height="200"
          />
          <h2>Nieve</h2>
          <SpecialButton text="Botón 3" />
        </div>

      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
