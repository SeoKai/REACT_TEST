import { useState } from "react";

const SonComponent = (data, hnadleData2) => {
  return (
    <div>
      {data.name}
      <br />
      {data.age}
      <br />
      <hr />
      <input type="text" name="phone" />
      <br />
      <input type="text" name="addr" />
      <br />
    </div>
  );
};

export default ParentComponent;
