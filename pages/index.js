import React, { useState, useEffect } from 'react';
import { Tour } from 'reactour';

const tourConfig = [
  {
    selector: '[data-tut="reactour__abc"]',
    content: `This is a button`,
  },
  {
    selector: '[data-tut="reactour__final"]',
    content: `This is a text field...`,
  },
  {
    selector: '[data-tut="reactour__box"]',
  },
];

export default function Index() {
  const accentColor = "#5cb7b7";
  const [isTourOpen, setTourOpen] = useState(false);

  useEffect(() => {
    setTourOpen(true);
  }, []);

  return (
    <div>
      {typeof window !== 'undefined' && ( // Check if window object is available
        <Tour
          onRequestClose={() => setTourOpen(false)}
          steps={tourConfig}
          isOpen={isTourOpen}
          rounded={5}
          accentColor={accentColor}
        />
      )}
      <div>
        <div data-tut="reactour__abc">Save changes</div>
        <div data-tut="reactour__final">bambo</div>
        <div data-tut="reactour__box">hello</div>
      </div>
    </div>
  );
}
