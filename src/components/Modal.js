const Modal = () => {
  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-conatiner">
          <button className="btn confirm-btn">confirm</button>
        </div>
        <div className="btn-conatiner">
          <button className="btn clear-btn">cancel</button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
