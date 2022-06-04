import './css/new_intro_style.css';

export const Intro = ({ callback }) => {
  // intro startup function
  const initialize = () => {
    setTimeout(() => {
      typingAnimation('p1', "Hi, I'm Adam.", 100);
    }, 1000);

    setTimeout(() => {
      typingAnimation('p2', "I'm looking for a change.", 100);
    }, 3500);

    setTimeout(() => {
      typingAnimation('header1', 'Are you looking', 100);
    }, 7500);

    setTimeout(() => {
      typingAnimation('header2', 'for a developer?', 100);
    }, 9300);

    setTimeout(() => {
      document.getElementById('portrait').classList.add('revealed');
    }, 11500);

    setTimeout(() => {
      document.getElementById('cta').classList.add('revealed');
    }, 11800);

    setTimeout(() => {
      document.getElementById('desktop').classList.add('revealed');
    }, 12100);

    setTimeout(() => {
      let h2 = document.getElementById('header2');
      const span = document.getElementById('developer');
      if (!span) {
        h2.innerHTML = h2.innerHTML.replace(
          'developer',
          "<span id='developer'>developer</span>"
        );
      }
    }, 13000);

    setTimeout(() => {
      developerWordAnimation();
      // desktopAnimation();
    }, 14000);
  };

  // animation functions
  function typingAnimation(id, text, speed) {
    let element = document.getElementById(id);
    let textPosition = 0;
    element.textContent = '';

    writingFunc();

    function writingFunc() {
      element.textContent = text.substring(0, textPosition);
      if (textPosition++ !== text.length) {
        setTimeout(writingFunc, speed);
      }
    }
  }

  function developerWordAnimation() {
    const developer = document.getElementById('developer');
    console.log('adding gradient-initial');
    developer.classList.add('gradient-initial');
    setInterval(() => {
      console.log('toggle gradient-change');
      developer.classList.toggle('gradient-change');
    }, 1200);
  }

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
        <button
          onClick={() => callback(false)}
          id='cta'
          className='hidden'
        >
          LEARN MORE
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
    </main>
  );
};
