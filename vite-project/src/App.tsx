import React from "react";
import { Layout } from "antd";
import { FlowBiteHeader } from "./component/FlowBiteHeader";
import { AntFooter } from "./component/AntFooter";
import { AntContent } from "./component/AntContent";

const App = () => {
  return (
    <html data-theme="cupcake">
      <Layout
        style={{
          margin: 0,
        }}
      >
        <FlowBiteHeader />
        <AntContent />
        <AntFooter />
      </Layout>
    </html>
  );
};
export default App;
