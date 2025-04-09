import type { NextConfig } from "next";

import withNextIntl from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
};

// next-intlと統合
export default withNextIntl("./src/config/i18n.ts")(nextConfig);
