import { Layout, theme } from "antd";
import { AntBreadcrumb } from "./component/AntBreadCrumb";
import {AntHeader} from "./component/AntHeader";
const { Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        margin: 0,
      }}
    >
      <AntHeader />
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <AntBreadcrumb />
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
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default App;
