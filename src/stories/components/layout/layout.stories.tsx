import { Meta, StoryObj } from "@storybook/react";
import Layout from "../../../components/layout/layout";

const meta = {
  title: "Components/Layout",
  component: Layout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Layout>;

export default meta;

function Children() {
  return (
    <>
      <div className="p-4">
        <p>
          Amaranth arugula bean bona broccoli brussels bunya burdock cauliflower
          chestnut chickpea chickweed choy cucumber daikon dandelion desert
          endive epazote fennel garlic grape gumbo. Amaranth asparagus aubergine
          avocado bologi bona carrot chickweed choy collard corn epazote fava
          fennel gumbo j. Amaranth asparagus brussels bush carrot catsear
          celtuce chard chestnut chickpea choy courgette daikon desert endive
          epazote esse fava garlic greens horseradish. Artichoke arugula
          asparagus avocado azuki beet bitterleaf black-eyed bona burdock
          catsear caulie chard chickpea choy collard coriander courgette
          cucumber desert dulse endive fava gourd green groundnut gumbo
          horseradish. Artichoke arugula asparagus aubergine avocado azuki bean
          beet bitterleaf black-eyed bunya bush cauliflower chestnut collard
          coriander courgette cress dandelion desert dulse epazote esse fennel
          garlic gourd green greens gumbo j. Artichoke beet beetroot bitterleaf
          bona broccoli brussels bush cabbage caulie celery chickpea chicory
          coriander epazote groundnut horseradish. Amaranth arugula asparagus
          bamboo bitterleaf bok bunya carrot caulie cauliflower celery choy
          collard daikon dandelion earthnut epazote esse garlic gourd green
          groundnut. Artichoke arugula aubergine azuki bean black-eyed bok
          bologi bush celtuce dandelion desert dulse epazote gourd gram grape
          gumbo. Bologi catsear cauliflower celtuce chickpea chickweed chicory
          courgette cucumber daikon desert eggplant esse fennel garlic. Amaranth
          avocado bean bona bunya cabbage catsear caulie cauliflower celery
          celtuce chard chestnut chicory desert earthnut eggplant epazote esse
          fennel garlic gram green gumbo.
        </p>
      </div>
    </>
  );
}

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Children />,
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: <Children />,
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: <Children />,
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: <Children />,
  },
};

export const Full: Story = {
  args: {
    size: "full",
    children: <Children />,
  },
};

export const WithoutBackgroundEffect: Story = {
  args: {
    disableBackgroundEffect: true,
    children: <Children />,
  },
};
