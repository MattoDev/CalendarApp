export const Navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
      <span className="navbar-brand">
        <i className="fas fa-calendar-alt">&nbsp; Mateo</i>
      </span>

      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt">
          <span>&nbsp; Salir</span>
        </i>
      </button>
    </div>
  );
};
