import React from 'react';
import Input from './Input';

const REGISTRATION = [
  {
    id: 0,
    name: 'name',
    type: 'text',
    placeholder: 'Имя',
    icon: '../../assets/images/user.svg',
  },
  {
    id: 1,
    name: 'email',
    type: 'email',
    placeholder: 'email',
    icon: '../../assets/images/email.png',
  },
  {
    id: 2,
    name: 'password__first',
    type: 'password',
    placeholder: 'password',
    icon: '../../assets/images/password.png',
  },
  {
    id: 3,
    name: 'password_second',
    type: 'password',
    placeholder: 'password',
    icon: '../../assets/images/password.png',
  },
];

const Registration = () => {
  const input = REGISTRATION.map((element) => (
    <Input
      key={`${element.name}-${element.id}`}
      name={element.name}
      type={element.type}
      placeholder={element.placeholder}
      icon={element.icon}
    />
  ));
  return (
    <form className="reg__form">
      <h1 className="reg__h1">Создать аккаунт</h1>
      {input}
      <button type="submit" className="btn btn-primary">Sign in</button>
    </form>
  );
};

export default Registration;
