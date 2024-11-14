// src/App.jsx (Home Page with Layout)

import HeroSection from './components/Banner';
import Content from './components/Content';
import PlanSection from './components/Floorplan';
import Form from './components/Form';
import ProjectLocation from './components/Location';
import ProjectDetails from './components/ProjectDetail';

function App() {
  return (
<>
      <HeroSection />
      <Form />
      <Content />
      <ProjectDetails />
      <PlanSection />
      <ProjectLocation />
      </>
  );
}

export default App;
