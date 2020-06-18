import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './_userMenu.scss';

// const Link = (props) => <a {...props}>A link</a>;
const Button = ({ click }) => <button type="button" onClick={click}>Нажми на меня</button>;
// const Nav = () => (
//   <>
//     <Link href="/home" activeClassName="active">Регистрация</Link>
//     <Link href="/home" activeClassName="active">Вход</Link>
//   </>
// );
const UserMenu = ({ isVisible }) => {
  const [visible, setVisible] = useState(false);

  const click = () => setVisible(!visible);
  return (
    <>
      {isVisible ? <Button click={click} /> : <h1>Гость</h1>}
      {visible ? <div>Hello</div> : null}
    </>
  );
};

UserMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
};

Button.propTypes = {
  click: PropTypes.func.isRequired,
};

export default UserMenu;
