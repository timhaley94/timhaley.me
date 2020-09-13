import React, {
  useState,
  createRef,
} from 'react';
import useOnVisible from 'use-on-visible';
import classNames from 'classnames';
import { Emoji } from '..';
import styles from './index.module.css';

const Footer = () => {
  const [rotating, setRotating] = useState(false);
  const [timer, setTimer] = useState(null);

  const ref = createRef();
  
  useOnVisible(
    ref,
    () => {
      if (timer) {
        clearTimeout(timer);
      }

      setTimer(
        setTimeout(() => {
          setRotating(false);
        }, 1000)
      );

      setRotating(true);
    },
    [timer, setTimer, setRotating],
  );

  return (
    <>
      <hr />
      <footer className={ styles.container }>
        <Emoji
          ref={ ref }
          value="🔮"
          alt="crystal ball"
          className={
            classNames({
              [styles.rotating]: rotating,
            })
          }
        />
      </footer>
    </>
  );
};

export default Footer;
