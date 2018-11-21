import React from 'preact-compat';
import SearchBox from "../SearchBox";
import FakeData from "../Fakedata";

export default () => (
  <div className={"banner"}>
    <FakeData />
    <SearchBox />
  </div>
);
