import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Sidebar } from "./Sidebar";

export default {
    title: "widgets/Sidebar",
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: "color" }
    }
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = args => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.parameters = {
    layout: "fullscreen"
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.parameters = {
    layout: "fullscreen"
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
