import './Error403.css';

export default function Error403() {
  return (
    <div className="error-403-container">
      <div className="error-403-content">
        <h1 className="error-code">403</h1>
        <h2 className="error-title">Acceso Denegado</h2>
        <p className="error-message">
          Este sitio web está temporalmente suspendido.
        </p>
      </div>
    </div>
  );
}
