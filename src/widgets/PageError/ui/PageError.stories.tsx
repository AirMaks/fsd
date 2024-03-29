import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { PageError } from "./PageError";

export default {
    title: "widgets/ErrorPage",
    component: PageError,
    argTypes: {
        backgroundColor: { control: "color" }
    }
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = args => <PageError {...args} />;

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
