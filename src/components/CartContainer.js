import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import CartItem from "./CartItem";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button onClick={() => dispatch(clearCart())} className="btn clear-btn">
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
