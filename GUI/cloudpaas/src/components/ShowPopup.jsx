import "../styles/Popupstyles.css";
const MyPopup = ({ closePopup }) => {
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <h2 className="font-semibold text-white">Sensors</h2>
        <p className="font-semibold text-white">List of sensors</p>
        <button className="bg-white" onClick={closePopup}>
          Save
        </button>
      </div>
    </>
  );
};

export default MyPopup;
