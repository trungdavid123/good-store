import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { useSelector, connect } from 'react-redux';
import { signOut, signIn } from '../actions';
import Search from './Search';

function Header({ signOut, signIn }) {
  const state = useSelector((state) => state.auth.isSignedIn);
  const cartNumber = useSelector((state) => state.cartReducer);

  const [opacity, setOpacity] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  const [hide, setHide] = useState(false);

  const [lastScrollY, setLastScrollY] = useState(0);

  const calculateCart = () => {
    return cartNumber.map((item) => {
      return item.quantity;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    let curScroll = window.pageYOffset;
    if (curScroll > lastScrollY && curScroll > 50) {
      setHide(true);
    } else {
      setHide(false);
    }
    setLastScrollY(curScroll);
  };

  let setShowOfMenu = () => {
    let w = window.innerWidth;
    if (showMenu === false && w < 500) {
      setShowMenu(!showMenu);
      document.body.style.overflowY = 'hidden';
    } else {
      setShowMenu(!showMenu);
      document.body.style.overflowY = 'visible';
    }
  };

  const calculate = () => {
    let result = cartNumber.map((item) => item.price * item.quantity);
    return result.reduce((a, b) => a + b, 0);
  };

  const sum = calculateCart().reduce((a, b) => a + b, 0);

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '120049196299-t4dllqtg6ck2f7gat6i01eufsh1ocie3.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          var auth = window.gapi.auth2.getAuthInstance();

          const onAuthChange = (isSignedIn) => {
            if (isSignedIn) {
              signIn();
            } else {
              signOut();
            }
          };

          onAuthChange(auth.isSignedIn.get());

          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onSignOut = () => {
    window.gapi.auth2.getAuthInstance().signOut();
  };

  let hideAndSignOut = () => {
    setShowOfMenu();
    onSignOut();
  };

  const renderLogin = () => {
    if (state === false) {
      return (
        <Link to="/login" onClick={() => setShowOfMenu()}>
          <i className="fa fa-lock"></i> Login
        </Link>
      );
    } else if (state === null) {
      return <div>Loading...</div>;
    } else {
      return (
        <Link to="/login" onClick={() => hideAndSignOut()}>
          <i className="fas fa-sign-out-alt"></i> Logout
        </Link>
      );
    }
  };

  return (
    <header id="header">
      <div className="header-middle">
        <div className={`container fixed ${hide ? 'hideMenu' : 'showHead'}`}>
          <div className="row">
            <div className="col-sm-4">
              <div className={`header-menu`}>
                <div className="logo pull-left">
                  <Link to="/">
                    <img src="images/home/logo.png" alt="" />
                  </Link>
                </div>
                <div className="nav-hamburger" onClick={() => setShowOfMenu()}>
                  {showMenu !== true ? (
                    <span>
                      <i className="fas fa-bars"></i>
                    </span>
                  ) : (
                    <span>
                      <i className="fas fa-times"></i>
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="shop-menu pull-right">
                <div
                  className={`overlay ${showMenu ? 'showMenu' : 'overlay'}`}
                ></div>
                <ul
                  className={`nav navbar-nav  ${
                    showMenu ? 'showMenu' : 'overlay'
                  }`}
                >
                  <li>
                    <Link to="/" onClick={() => setShowOfMenu()}>
                      <i className="fas fa-home"></i> Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/compare" onClick={() => setShowOfMenu()}>
                      <i className="fa fa-user"></i> Compare
                    </Link>
                  </li>
                  <li>
                    <Link to="/wishlist" onClick={() => setShowOfMenu()}>
                      <i className="fa fa-star"></i> Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart" onClick={() => setShowOfMenu()}>
                      <i className="fa fa-shopping-cart"></i> Cart
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cart"
                      onClick={() => setShowMenu(false)}
                      onMouseEnter={() => setOpacity(true)}
                      onMouseLeave={() => setOpacity(false)}
                    >
                      <i className="fa fa-shopping-cart"></i> Cart
                      <span className="cart-number">
                        {cartNumber !== undefined ? sum : 0}
                      </span>
                    </Link>
                  </li>
                  <li>{renderLogin()}</li>
                </ul>
              </div>
            </div>
          </div>
          <CSSTransition
            in={opacity}
            timeout={300}
            classNames="alert"
            unmountOnExit
          >
            <div className="shopping-cart">
              <div className="shopping-cart-header">
                <i className="fa fa-shopping-cart cart-icon"></i>
                <span className="badge">{sum}</span>
                <div className="shopping-cart-total">
                  <span className="lighter-text">Total:</span>
                  <span className="main-color-text"> {calculate()} kr</span>
                </div>
              </div>
              <ul className="shopping-cart-items">
                {cartNumber !== undefined
                  ? cartNumber.slice(0, 3).map((item) => {
                      return (
                        <li className="clearfix">
                          <img
                            src={item.imgSrc}
                            style={{ width: '30%' }}
                            alt="item1"
                          />
                          <span
                            className="item-name"
                            style={{ verticalAlign: 'middle' }}
                          >
                            {item.name}
                          </span>
                          <span
                            className="item-price"
                            style={{ verticalAlign: 'middle' }}
                          >
                            {item.price} kr
                          </span>
                          <span
                            className="item-quantity"
                            style={{ verticalAlign: 'middle' }}
                          >
                            Quantity: {item.quantity}
                          </span>
                        </li>
                      );
                    })
                  : null}
              </ul>
            </div>
          </CSSTransition>
        </div>
      </div>

      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              <div className="mainmenu pull-left">
                <ul className="nav navbar-nav collapse navbar-collapse">
                  <li>
                    <Link to="/" className="active">
                      Home
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="head-middle">
              <div className="head-middle-content">
                <Link to="/cart">
                  <i className="fa fa-shopping-cart cart-icon mobil"></i>
                </Link>
                <span className="badge mobil">{sum}</span>
              </div>
              <Search />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default connect(null, { signOut, signIn })(Header);
