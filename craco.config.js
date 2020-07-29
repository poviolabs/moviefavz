const CracoLessPlugin = require('craco-less');
const colorPallete = require('./src/styles/colorPallete.json');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': colorPallete.primary, // primary color for all components
              '@link-color': colorPallete.primary, // link color
              '@success-color': colorPallete.success, // success state color
              '@warning-color': colorPallete.warning, // warning state color
              '@error-color': colorPallete.error, // error state color
              '@font-size-base': '14px', // major text font size
              '@heading-color': colorPallete.dark, // heading text color
              '@text-color': colorPallete.text, // major text color
              '@text-color-secondary': colorPallete.textSecondary, // secondary text color
              '@disabled-color': colorPallete.silver, // disable state color
              '@border-radius-base': '2px', // major border radius
              '@border-color-base': colorPallete.grey, // major border color
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
