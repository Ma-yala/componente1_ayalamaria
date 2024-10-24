import vBSlogo from '../assets/img/vBSlogo.jpg';
export const Inicio = () => {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={vBSlogo} className="card-img-top" alt="Descripción de la imagen" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Mi grupo favorito!!!
          </p>
          <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </>
  );
};
