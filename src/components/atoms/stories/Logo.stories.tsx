import type { Meta, StoryObj } from "@storybook/react";

// components
import Logo from "../Logo";

const meta = {
  title: "Atoms/Logo",
  component: Logo,
  parameters: {
    docs: {
      autodocs: true,
      description: {
        component: `
### 概要
サイト全体で使用されるロゴを表示するコンポーネントです。

### 特徴
- リンク機能付きのロゴ表示
- 3種類のサイズバリエーション
- 画像の自動最適化対応
        `,
      },
    },
  },
  argTypes: {
    id: {
      control: {
        type: "text",
      },
      description: "key設定用のid",
    },
    href: {
      control: {
        type: "text",
      },
      description: "リンク先のURL",
      defaultValue: "/",
    },
    size: {
      control: {
        type: "select",
      },
      description: "ロゴのサイズ",
      options: [
        "xxsmall",
        "xsmall",
        "small",
        "medium",
        "large",
        "xlarge",
        "xxlarge",
      ],
      defaultValue: "medium",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: "logo",
    href: "/",
    size: "medium",
  },
};

export const XXSmall: Story = {
  args: {
    id: "logo",
    href: "/",
    size: "xxsmall",
  },
};
export const XSmall: Story = {
  args: {
    id: "logo",
    href: "/",
    size: "xsmall",
  },
};

export const Small: Story = {
  args: {
    id: "logo",
    href: "/",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    id: "logo",
    href: "/",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    id: "logo",
    href: "/",
    size: "large",
  },
};
export const XLarge: Story = {
  args: {
    id: "logo",
    href: "/",
    size: "xlarge",
  },
};
export const XXLarge: Story = {
  args: {
    id: "logo",
    href: "/",
    size: "xxlarge",
  },
};
