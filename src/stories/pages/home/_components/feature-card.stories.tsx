import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import { Meta, StoryObj } from "@storybook/react";
import FeatureCard from "../../../../app/home/_components/feature-card/feature-card";

const meta = {
  title: "Pages/Home/Components/FeatureCard",
  component: FeatureCard,
  tags: ["autodocs"],
} satisfies Meta<typeof FeatureCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Item Listing",
    description:
      "Browse through a comprehensive list of food items, each with detailed nutritional values. Easily add new items to the list.",
    actionLink: "/",
    actionText: "Go to feature",
    icon: <RestaurantMenuIcon />,
  },
};
