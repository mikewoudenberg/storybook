import React from 'react';
import BaseButton from '../../components/BaseButton';
import DelayedRender from '../../components/DelayedRender';

const text = 'Testing the a11y addon';

export default {
  title: 'Addons/A11y/BaseButton',
  component: BaseButton,
  parameters: {
    options: { selectedPanel: 'storybook/a11y/panel' },
  },
};

export const Default = () => <BaseButton label="" />;
export const Label = () => <BaseButton label={text} />;
export const Disabled = () => <BaseButton disabled label={text} />;

export const InvalidContrast = () => (
  // FIXME: has no effect on score
  <BaseButton style={{ color: 'black', backgroundColor: 'black' }} label={text} />
);
InvalidContrast.storyName = 'Invalid contrast';

export const DelayedRenderStory = () => (
  <DelayedRender>
    <BaseButton label="This button has a delayed render of 1s" />
  </DelayedRender>
);
DelayedRenderStory.storyName = 'delayed render';
