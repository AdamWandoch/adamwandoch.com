import './css/new_intro_style.css';
import { initialize } from './intro-logic';
import github from './img/github.svg';
import linkedin from './img/linkedin.svg';

export const Intro = () => {
  initialize();

  // JSX
  return (
    <main>
      <aside>
        <img
          id='portrait'
          className='hidden'
          src={require('./img/portrait.jpg')}
          alt='Adam looking at code.'
        />
      </aside>
      <article>
        <p id='p1'></p>
        <p id='p2'></p>
        <h1 id='header1'></h1>
        <h1 id='header2'></h1>
        <button id='cta' className='hidden'>
          <a href='https://www.linkedin.com/in/adam-wandoch/' target='_blank'>
            GET IN TOUCH
          </a>
        </button>
      </article>
      <section>
        <img
          id='desktop'
          className='desktop-initial hidden'
          src={require('./img/desktop.jpg')}
          alt='Keyboard and monitors with code on the screen.'
        />
      </section>
      <a id='links'>
        <section className='logos'>
          <a href='https://github.com/AdamWandoch' target='_blank'>
            <img
              src={github}
              alt='GitHub'
              id='github'
              className='hidden'
            />
          </a>
          <a href='https://www.linkedin.com/in/adam-wandoch/' target='_blank'>
            <img
              src={linkedin}
              alt='LinkedIn'
              id='linkedin'
              className='hidden'
            />
          </a>
        </section>
      </a>
    </main>
  );
};
