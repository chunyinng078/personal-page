import React from "react";

import { Layout, theme } from "antd";

const { Content } = Layout;

export const AntContent = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Content
      style={{
        padding: "0 48px",
      }}
    >
      {/* <AntBreadcrumb /> */}
      <div
        style={{
          background: colorBgContainer,
          minHeight: 280,
          padding: 24,
          borderRadius: borderRadiusLG,
        }}
      >
        Content
      </div>
    </Content>
  );
};
