import React, { Fragment } from 'react';

const badOutput = { renderable: 'no, react can not render objects' };
const BadComponent = () => badOutput;

export default {
  title: 'Core/Errors',
};

export const Exception = () => {
  throw new Error('storyFn threw an error! WHOOPS');
};
Exception.storyName = 'story throws exception';

Exception.parameters = {
  storyshots: { disable: true },
  chromatic: { disable: true },
};

export const BadComponentStory = () => (
  <Fragment>
    <div>Hello world</div>
    <BadComponent />
  </Fragment>
);
BadComponentStory.storyName = 'story errors - invariant error';

BadComponentStory.parameters = {
  storyshots: { disable: true },
  chromatic: { disable: true },
};

export const BadStory = () => badOutput;
BadStory.storyName = 'story errors - story un-renderable type';

BadStory.parameters = {
  storyshots: { disable: true },
  chromatic: { disable: true },
};
