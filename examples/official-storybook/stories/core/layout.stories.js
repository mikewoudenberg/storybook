import React from 'react';

// eslint-disable-next-line react/prop-types
const Box = ({ children, display = 'block', width, height }) => (
  <div style={{ display, border: '2px solid #FF4785', padding: 10, width, height }}>{children}</div>
);

export default {
  title: 'Core/Layout',
  parameters: {
    layout: 'centered',
  },
};

export const Default = () => <Box>padded by default</Box>;

export const PaddedBlock = () => <Box>padded</Box>;
PaddedBlock.parameters = { layout: 'padded' };

export const PaddedInline = () => <Box display="inline-block">padded</Box>;
PaddedInline.parameters = { layout: 'padded' };

export const FullscreenBlock = () => <Box>fullscreen</Box>;
FullscreenBlock.parameters = { layout: 'fullscreen' };

export const FullscreenInline = () => <Box display="inline-block">fullscreen</Box>;
FullscreenInline.parameters = { layout: 'fullscreen' };

export const CenteredBlock = () => <Box>centered</Box>;
CenteredBlock.parameters = { layout: 'centered' };

export const CenteredInline = () => <Box display="inline-block">centered</Box>;
CenteredInline.parameters = { layout: 'centered' };

export const CenteredTall = () => <Box height="120vh">centered tall</Box>;
CenteredTall.parameters = { layout: 'centered' };

export const CenteredWide = () => <Box width="120vw">centered wide</Box>;
CenteredWide.parameters = { layout: 'centered' };

export const None = () => <Box>none</Box>;
None.parameters = { layout: 'none' };

export const Inherited = () => <Box>none</Box>;
Inherited.parameters = {};

export const Invalid = () => <Box>invalid layout value</Box>;
Invalid.parameters = { layout: '!invalid!' };
