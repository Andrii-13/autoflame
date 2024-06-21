import React, { useEffect, useState } from 'react';
import { BtnUpDownStyle } from './BtnUpDown.stuled';
import { FaAnglesUp } from 'react-icons/fa6';

export const BtnUpDown = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Відображати кнопку після прокручування на 200 пікселів
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Прибираємо обробник події при розмонтаженні компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const clickUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <BtnUpDownStyle onClick={clickUp}>
          <FaAnglesUp className="btnUpStyle" />
        </BtnUpDownStyle>
      )}
    </>
  );
};
