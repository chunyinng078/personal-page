import { Layout } from "antd";
import {AntHeader} from "./component/AntHeader";
import {AntFooter} from "./component/AntFooter";
import { AntContent } from "./component/AntContent";

const App = () => {

  return (
    <Layout
      style={{
        margin: 0,
      }}
    >
      <AntHeader />
      <AntContent />

      <AntFooter/>

    </Layout>
  );
};
export default App;
