import { Link } from "react-router-dom";
import { selectCartCount } from "../../store/cart/cart.selector";
import { useAppSelector } from "../../store/hooks/hooks";
import notifs from "../../assets/notifs.svg"

const Header = () => {
  const cartCount = useAppSelector(selectCartCount);
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-inner'>
          <div className='logo'>
            <Link to='/'>Redux Shopping Cart</Link>
          </div>
          <div className="flex">
            <nav>
              <Link to='/cart' className='cart'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='carticon'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                  />
                </svg>
                <span className='badge'>{cartCount}</span>
              </Link>
              {/* <Link to='' className='cart'>
                <img src={notifs} alt="" style={{ height: "10%", width: "10%" }} />
                <span className='notifs'>{ }</span>
              </Link> */}
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
