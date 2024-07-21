import { Meta, StoryObj } from "@storybook/react";
import PageTitle from "../../../components/page-title/page-title";

const meta = {
  title: "Components/Page Title",
  component: PageTitle,
  tags: ["autodocs"],
} satisfies Meta<typeof PageTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Page Title",
    description: "Page description",
  },
};

export const NoDescription: Story = {
  args: {
    title: "Page Title",
  },
};

export const BigTitle: Story = {
  args: {
    title:
      "Big Page Title with INDEED a very long title that is very long and can go multiple lines as you can see",
    description: "Page description",
  },
};

export const BigDescription: Story = {
  args: {
    title: "Page Title",
    description:
      "Big Page Description with INDEED a very long description that is very long and can go multiple lines as you can see. Actually you can clearly see that this is a very long description",
  },
};
