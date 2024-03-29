import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { NotFoundPage } from "./NotFoundPage";

export default {
    title: "pages/NotFoundPage",
    component: NotFoundPage,
    argTypes: {
        backgroundColor: { control: "color" }
    }
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = args => <NotFoundPage {...(args as {})} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
    layout: "fullscreen"
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.parameters = {
    layout: "fullscreen"
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
