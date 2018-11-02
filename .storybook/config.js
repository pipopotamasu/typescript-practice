import { configure } from "@storybook/vue";
import { configureViewport } from "@storybook/addon-viewport";

function loadStories() {
  require("../src/stories/index");
}

configure(loadStories, module);
