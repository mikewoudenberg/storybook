import React from 'react';
import Vue from 'vue';
import { StoryContext, PartialStoryFn } from '@storybook/csf';
import { VueFramework } from '@storybook/vue';

// Inspired by https://github.com/egoist/vue-to-react,
// modified to store args as props in the root store

// FIXME get this from @storybook/vue
const COMPONENT = 'STORYBOOK_COMPONENT';
const VALUES = 'STORYBOOK_VALUES';

export const prepareForInline = (
  storyFn: PartialStoryFn<VueFramework>,
  { args }: StoryContext<VueFramework>
) => {
  const component = storyFn();
  const el = React.useRef(null);

  // FIXME: This recreates the Vue instance every time, which should be optimized
  React.useEffect(() => {
    const root = new Vue({
      el: el.current,
      data() {
        return {
          [COMPONENT]: component,
          [VALUES]: args,
        };
      },
      render(h) {
        const children = this[COMPONENT] ? [h(this[COMPONENT])] : undefined;
        return h('div', { attrs: { id: 'root' } }, children);
      },
    });
    return () => root.$destroy();
  });

  return React.createElement('div', null, React.createElement('div', { ref: el }));
};
