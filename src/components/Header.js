import React from 'react';

const Header = () => {
  return (
    <header className='bg-grey p-8'>
      <h1 className='text-center text-orange font-bold text-3xl tablet:text-6xl tablet:p-7 laptop:p-5 laptop:text-6xl'>
        <i className="fas fa-search text-darkGrey mr-2"></i>
        Drink <span className='text-darkGrey font-light'>Seeker</span>
      </h1>
    </header>
  );
};

export default Header;
