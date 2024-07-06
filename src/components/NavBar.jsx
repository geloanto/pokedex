import PropTypes from "prop-types";

function NavBar({ onPrevious, onNext, canGoPrevious, canGoNext }) {
  return (
    <div>
      <button onClick={onPrevious} disabled={!canGoPrevious}>
        Précédent
      </button>
      <button onClick={onNext} disabled={!canGoNext}>
        Suivant
      </button>
    </div>
  );
}

NavBar.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  canGoPrevious: PropTypes.bool.isRequired,
  canGoNext: PropTypes.bool.isRequired,
};

export default NavBar;