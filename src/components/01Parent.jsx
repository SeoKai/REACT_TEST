import { useState } from "react";
import SonComponent_01 from "./01Son";

const ParentComponent = () => {
  const [data2, setData2] = useState({});
  const data = { name: "hong", age: 30 };

  return (
    <div>
      <SonComponent_01 data={data} />
    </div>
  );
};

export default ParentComponent;
