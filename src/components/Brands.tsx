import React from 'react';

const AnimatedLogoCloud = () => {
  const logos = [
    { name: 'Star', url: '../assets/star.png', url_dark: '../assets/star.png' },
    { name: 'Google', url: '../assets/google.png', url_dark: '../assets/google.png' },
    { name: 'Star', url: '../assets/star.png', url_dark: '../assets/star.png' },
    { name: 'Goodfirms', url: '../assets/goodfirms.png', url_dark: './assets/goodfirms.png' },
    { name: 'Star', url: '../assets/star.png', url_dark: '../assets/star.png' },
    { name: 'Glassdoor', url: '../assets/glassdoor.png', url_dark: '../assets/glassdoor.png' },
  ];

  return (
    <section className="sm:w-[95%] w-[170px] mb-[3rem] flex items-center justify-center ">
      <div className="  ">
        <div className="mx-auto  px-4 md:px-8">
          <div
            className="group relative flex overflow-hidden"
            style={{
              maskImage:
                'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
            }}
          >
            {Array(2) // Array(2) ensures a seamless loop by duplicating the logos
              .fill(null)
              .map((_, index) => (
                <div
                  key={index}
                  className="flex items-center shrink-0 animate-logo-cloud gap-12"
                >
                  {logos.map((logo, key) => (
                    <React.Fragment key={key}>
                      {logo.name==='Star' ?
                      <img
                        src={logo.url_dark}
                        className="px-2 h-8 hidden dark:block"
                        alt={`${logo.name}`}
                      />: 
                      <img
                        src={logo.url_dark}
                        className="px-2 h-16 hidden dark:block"
                        alt={`${logo.name}`}
                      />
                      }
                    </React.Fragment>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedLogoCloud;
