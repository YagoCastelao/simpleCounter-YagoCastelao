import { useState, useEffect } from "react";

function App() {
  const [secondsTotal, setSecondsTotal] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsTotal((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (secondsTotal === 10) {
      alert("Atingimos 10 segundos!");
    }
  }, [secondsTotal]);

  const hours = Math.floor(secondsTotal / 3600);
  const minutes = Math.floor((secondsTotal % 3600) / 60);
  const seconds = secondsTotal % 60;

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <h1 className="text-6xl font-extrabold mb-12 bg-gradient-to-r from-amber-900 via-amber-400 to-amber-50 text-transparent bg-clip-text"
        style={{
          WebkitTextStroke: "1px black",
          textShadow: "0 2px 2px rgba(0, 0, 0, 0.3)",
        }}>
        Relógio Digital
      </h1>

      {/* Cards*/}
      <div className="flex space-x-4 text-6xl font-mono text-white">
        {/* Horas */}
        <div className="flex flex-col items-center justify-center w-36 h-36 bg-gray-100 bg-opacity-70 shadow-lg rounded-lg">
          <span className="bg-gray-400 text-transparent bg-clip-text text-7xl" style={{
            WebkitTextStroke: "1px black",
            textShadow: "0 2px 2px rgba(0, 0, 0, 0.3)",
          }}>
            {String(hours).padStart(2, "0")}
          </span>
          <span className="text-base text-gray-600">Horas</span>
        </div>

        {/* Minutos */}
        <div className="flex flex-col items-center justify-center w-36 h-36 bg-gray-100 bg-opacity-70 shadow-lg rounded-lg">
          <span className="bg-gray-400 text-transparent bg-clip-text text-7xl" style={{
            WebkitTextStroke: "1px black",
            textShadow: "0 2px 2px rgba(0, 0, 0, 0.3)",
          }}>
            {String(minutes).padStart(2, "0")}
          </span>
          <span className="text-base text-gray-600">Minutos</span>
        </div>

        {/* Segundos */}
        <div className="flex flex-col items-center justify-center w-36 h-36 bg-gray-100 bg-opacity-70 shadow-lg rounded-lg">
          <span className="bg-gray-400 text-transparent bg-clip-text text-7xl" style={{
            WebkitTextStroke: "1px black",
            textShadow: "0 2px 2px rgba(0, 0, 0, 0.3)",
          }}>
            {String(seconds).padStart(2, "0")}
          </span>
          <span className="text-base text-gray-600">Segundos</span>
        </div>
      </div>
    </div>
  );
}

export default App;