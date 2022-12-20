import "../styles/globalStyles.scss";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: "light", value: "#fdfcfeff" },
      { name: "dark", value: "#1a1c1eff" },
    ],
  },
};

export const decorators = [
  (Story, context) => {
    console.log(context.globals.backgrounds.value);
    return (
      <div
        data-color-mode={
          context.globals.backgrounds.value === "#1a1c1eff" ? "dark" : "light"
        }
      >
        <div
          style={{
            backgroundColor: `var(--color-background)`,
            padding: `3rem`,
          }}
        >
          <Story />
        </div>
      </div>
    );
  },
];
