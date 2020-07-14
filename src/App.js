import React from 'react';
import './App.css';
import Header from './Components/Header';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import BaiTapLayout2 from './Components/BaiTapLayout2/BaiTapLayout2';
import DataBinding from './DataBinding/DataBinding';
import BT3DanLayout from './Components/BaiTapDanLayout/BT3DanLayout'
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      {/* <BaiTapLayout /> */}
      {/* <BaiTapLayout2 /> */}
      {/* <DataBinding /> */}
      <BT3DanLayout />
    </div>
  );
}

export default App;
