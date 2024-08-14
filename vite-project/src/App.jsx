import { Layout } from "antd";
import {FlowBiteHeader} from "./component/FlowBiteHeader";
import {AntFooter} from "./component/AntFooter";
import { AntContent } from "./component/AntContent";

const App = () => {

  return (
    <Layout
      style={{
        margin: 0,
      }}
    >
      <FlowBiteHeader />
      <AntContent />

      <AntFooter/>

    </Layout>
  );
};
export default App;
