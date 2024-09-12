import React from "react";
import { Link } from "react-router-dom";
import { PageContainer } from "../../layouts";
import {
  addToCartItem,
  clearItemFromCart,
  removeFromCart,
} from "../../store/cart/cart.action";
import {
  selectCartCount,
  selectCartLists,
  selectCartTotal,
} from "../../store/cart/cart.selector";
import { useAppDispatch, useAppSelector } from "../../store/hooks/hooks";

const CartPage = () => {
  const cartItems = useAppSelector(selectCartLists);
  const cartTotal = useAppSelector(selectCartTotal);
  const cartCount = useAppSelector(selectCartCount);
  const dispatch = useAppDispatch();

  const handleRemoveFromCartItems = (cartItem: any) =>
    dispatch(removeFromCart(cartItems, cartItem));

  const handleAddtoCartItem = (cartItem: any) =>
    dispatch(addToCartItem(cartItems, cartItem));

  const handleClearFromCart = (cartItem: any) =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  return (
    <PageContainer>
      <section className='section'>
        <div className='container'>
          {cartCount ? (
            <>
              <table className='cart-table'>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Description</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item: any) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <img
                            className='cart-item-img'
                            src={item.image}
                            alt={item.title}
                          />
                        </td>
                        <td className='cart-item-name'>{item.title}</td>
                        <td className='text-left px-4 py-2'>
                          <div className='cart-item-numbers'>
                            <button
                              onClick={() => handleRemoveFromCartItems(item)}>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='icon'>
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                                />
                              </svg>
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleAddtoCartItem(item)}>
                              <svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='icon'>
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                                />
                              </svg>
                            </button>
                          </div>
                        </td>
                        <td>$ {item.price}</td>
                        <td>
                          <button onClick={() => handleClearFromCart(item)}>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              strokeWidth={1.5}
                              stroke='currentColor'
                              className='icon trash'>
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                              />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <h2 className='text-right'>Cart Total : $ {cartTotal}</h2>
            </>
          ) : (
            <>
              <p className='mb-24'>
                Your cart is empty, Please vist our shop page for exploring our
                products.
              </p>
              <Link to='/' className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                Back to shopping
              </Link>
            </>
          )}
        </div>
      </section>
    </PageContainer>
  );
};

export default CartPage;
