import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import Domains from '../pages/Domains';
import "./Navbar.css"
import WebHosting from '../pages/WebHosting';
import DedicatedServices from '../pages/DedicatedServices';


import 'react-tabs/style/react-tabs.css';

const Navbar = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div className='Tab'>
    <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
      <div className='Tab-size'><TabList>
        <Tab>Domains</Tab>
        <Tab>Web Hosting</Tab>
        <Tab>Dedicated Services</Tab>
        <Tab>Virtual Cloud Services</Tab>
        <Tab>WordPress Hosting</Tab>
        <Tab>Email Hosting</Tab>
        <Tab>VPS Hosting Services</Tab>
        <Tab>Free Hosting  </Tab>

        </TabList>
      </div>
      <TabPanel><Domains/></TabPanel>
      <TabPanel><WebHosting /></TabPanel>
      <TabPanel><DedicatedServices /></TabPanel>
      <TabPanel>This page is about Virtual Cloud Services</TabPanel>
      <TabPanel>This page is about WordPress Hostin</TabPanel>
      <TabPanel>This page is about Email Hosting</TabPanel>
      <TabPanel>This page is about VPS Hosting Services</TabPanel>
      <TabPanel>This page is about Free Hosting</TabPanel>
    </Tabs>
    </div>
  );
};
export default Navbar;