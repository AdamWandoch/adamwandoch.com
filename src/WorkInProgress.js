import React from 'react';
import github from './img/github.svg';
import linkedin from './img/linkedin.svg';

export const WorkInProgress = () => {
  // styles
  const mainStyle = {
    padding: '1em 2em',
    border: 'solid 0.07rem',
    justifySelf: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    height: '90%',
    maxWidth: '95%',
    margin: '4% 0 5% 0',
  };
  const h1Style = {
    fontSize: '2em',
    textAlign: 'center',
    margin: '0.3em',
  };
  const logoStyle = {
    width: '5rem',
    margin: '1rem',
  };
  const aStyle = {
    textDecoration: 'underline',
  };

  // JSX
  return (
    <>
      <main style={mainStyle}>
        <h4>oops, you're here early</h4>
        <h1 style={h1Style}>
          work
          <br />
          in
          <br />
          progress
        </h1>
        <h4>
          meanwhile check{' '}
          <a
            style={aStyle}
            href='https://indeed-bot-dashboard.netlify.app/'
            target='_blank'
          >
            this
          </a>{' '}
          and{' '}
          <a
            style={aStyle}
            href='https://adams-guestbook.netlify.app/'
            target='_blank'
          >
            this
          </a>
        </h4>
        <h4>or find me on social</h4>
        <div className='logos'>
          <a href='https://github.com/AdamWandoch' target='_blank'>
            <img src={github} style={logoStyle} alt='GitHub link' />
          </a>
          <a href='https://www.linkedin.com/in/adam-wandoch/' target='_blank'>
            <img src={linkedin} style={logoStyle} alt='LinkedIn link' />
          </a>
        </div>
      </main>
    </>
  );
};
