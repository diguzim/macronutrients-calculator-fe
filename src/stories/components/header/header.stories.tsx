import { ThemeProvider } from "@mui/material/styles";
import { Meta, StoryObj } from "@storybook/react";

import Header, { HeaderProps } from "../../../components/header/header";
import { theme } from "../../../theme/material.theme";

const Container = (props: HeaderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Header {...props} />
    </ThemeProvider>
  );
};

const meta = {
  title: "Components/Header",
  component: Container,
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const H1: Story = {
  args: {
    children: "Hello World",
    size: 1,
  },
};

export const H2: Story = {
  args: {
    children: "Hello World",
    size: 2,
  },
};

export const H3: Story = {
  args: {
    children: "Hello World",
    size: 3,
  },
};

export const H4: Story = {
  args: {
    children: "Hello World",
    size: 4,
  },
};

export const H5: Story = {
  args: {
    children: "Hello World",
    size: 5,
  },
};

export const H6: Story = {
  args: {
    children: "Hello World",
    size: 6,
  },
};
