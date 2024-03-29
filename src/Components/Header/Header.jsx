import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { Svg, Menu } from 'Components';
import './Header.scss';

const Header = () => {
  const [sticky, setSticky] = useState();
  const [height, setHeight] = useState(150);
  const headerRef = useRef(null);
  const ghostRef = useRef(null);

  const handleResize = () => {
    setTimeout(() => setHeight(headerRef.current.offsetHeight), 200);
  };

  const handleScroll = () => {
    if (ghostRef.current) {
      setSticky(window.pageYOffset + 30 > ghostRef.current.offsetHeight);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, [sticky]);

  return (
    <>
      <div className="header-background">
        <div className="header-background__image" />
        <div className="header-background__image header-background__image--delay" />
        <div className="header-background__image header-background__image--delay2" />
      </div>
      <div className="header-ghost" style={{ height }} ref={ghostRef} />
      <div className={classnames('header', { 'header--sticky': sticky })} ref={headerRef}>
        <div className="header__container max-width">
          <Link to="/#top" className="header__logo">
            <Svg id="logo" />
          </Link>
          <div className="header__menu">
            <Menu />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
