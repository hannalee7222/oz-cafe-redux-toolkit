import { useSelector, useDispatch } from 'react-redux';
import data from '../assets/data';
import { removeFromCart } from '../redux/redux';

function Cart() {
  const cart = useSelector((state) => state.cartReducer);
  const menu = useSelector((state) => state.menuReducer);
  if (!menu)
    return (
      <div style={{ textAlign: 'center', margin: '80px' }}>
        {' '}
        메뉴 정보가 없어요!
      </div>
    );
  const allMenus = [...menu.커피, ...menu.논커피];
  return (
    <>
      <h2>장바구니</h2>
      <ul className="cart">
        {cart?.length ? (
          cart.map((el) => (
            <CartItem
              key={el.id + JSON.stringify(el.options)}
              item={allMenus.find((menu) => menu.id === el.id)}
              options={el.options}
              quantity={el.quantity}
              id={el.id}
            />
          ))
        ) : (
          <div className="no-item">장바구니에 담긴 상품이 없어요!</div>
        )}
      </ul>
    </>
  );
}

function CartItem({ item, options, quantity, id }) {
  const dispatch = useDispatch();
  return (
    <li className="cart-item">
      <div className="cart-item-info">
        <img height={100} src={item.img} />
        <div>{item.name}</div>
      </div>
      <div className="cart-item-option">
        {Object.keys(options).map((el) => (
          <div key={el}>
            {el} : {data.options[el][options[el]]}
          </div>
        ))}
        <div>개수 : {quantity}</div>
      </div>
      <button
        className="cart-item-delete"
        onClick={() => {
          dispatch(removeFromCart(id));
        }}
      >
        삭제
      </button>
    </li>
  );
}
export default Cart;
