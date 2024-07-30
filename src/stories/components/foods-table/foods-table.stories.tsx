import { Meta, StoryObj } from "@storybook/react";
import { Food } from "../../../common/interfaces/item.interface";
import FoodsTable from "../../../components/foods-table/foods-table";

const meta = {
  title: "Components/Foods Table",
  component: FoodsTable,
  tags: ["autodocs"],
} satisfies Meta<typeof FoodsTable>;

export default meta;

type Story = StoryObj<typeof meta>;

const foods: Food[] = [
  {
    id: "1",
    name: "Apple",
    type: "raw",
    kcalPerGram: 0.52,
    carbohydrateRatio: 0.14,
    proteinRatio: 0.01,
    fatRatio: 0.01,
    fiberRatio: 0.02,
  },
  {
    id: "2",
    name: "Banana",
    type: "raw",
    kcalPerGram: 0.89,
    carbohydrateRatio: 0.23,
    proteinRatio: 0.01,
    fatRatio: 0.01,
    fiberRatio: 0.02,
  },
  {
    id: "3",
    name: "White Rice",
    type: "cooked",
    kcalPerGram: 2.5,
    carbohydrateRatio: 0.0,
    proteinRatio: 0.21,
    fatRatio: 0.18,
    fiberRatio: 0.0,
  },
  {
    id: "4",
    name: "Pasta",
    type: "cooked",
    kcalPerGram: 1.4,
    carbohydrateRatio: 0.28,
    proteinRatio: 0.06,
    fatRatio: 0.01,
    fiberRatio: 0.02,
  },
  {
    id: "5",
    name: "White Rice",
    type: "raw Carb",
    kcalPerGram: 1.3,
    carbohydrateRatio: 0.28,
    proteinRatio: 0.02,
    fatRatio: 0.01,
    fiberRatio: 0.01,
  },
];

export const Default: Story = {
  args: {
    foods,
  },
};
