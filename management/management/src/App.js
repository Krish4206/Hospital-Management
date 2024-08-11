import logo from './logo.svg';
import './App.css';
import Header from './common/Header';
import Sidebar from './common/Sidebar';
import { useState } from 'react';
import Dashboard from './components/superadmin/Dashboard';
import CreateNewOrg from './components/superadmin/CreateNewOrg';

function App() {
  const [activeTabIndex, setActiveTabIndex] = useState(1)
  return (
    <div className="App">
      {/* <div>
        <Sidebar activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex}/>
      </div>
      <div>
        <Header />
        <main>
            <Dashboard/>
        </main>
      </div> */}
      <Header/>
      <main>
        <Sidebar activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex}/>
        <div className="loadsection">
          {/* <Dashboard/> */}
          <CreateNewOrg/>
        </div>
      </main>
    </div>
  );
}

export default App;
