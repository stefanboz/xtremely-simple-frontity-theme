import Root from "./theme-files";

export default {
  name: "jsnation-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: { isMenuOpen: false },
  },
  actions: {
    theme: {
      toggleMenu: ({ state }) => {
        state.theme.isMenuOpen = !state.theme.isMenuOpen;
      },
    },
  },
};
