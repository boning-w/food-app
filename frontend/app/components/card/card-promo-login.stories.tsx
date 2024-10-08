import type { Meta, StoryObj } from "@storybook/react";
import { CardPromoLogin } from "./card-promo";

const meta: Meta<typeof CardPromoLogin> = {
  component: CardPromoLogin,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
