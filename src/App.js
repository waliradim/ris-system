import Analysis from "./component/Analysis/Analysis";
import Courses from "./component/Courses/Courses";
import Project from "./component/project/Project";
import Services from "./component/Services/Services";
import Summary from "./component/Summary/Summary";
import TopBanner from "./component/Topbaner/TopBanner";
import TopNavigation from "./component/TopNavigation/TopNavigation";
function App() {
  return (
    <div>
      <TopNavigation />
      <TopBanner />
      <Services />
      <Analysis />
      <Summary />
      <Project />
      <Courses />
    </div>
  );
}

export default App;
