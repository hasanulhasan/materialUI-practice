import AutoComp from "./components/AutoComp";
import CardMui from "./components/CardMui";
import DrawerMenu from "./components/DrawerMenu";
import Progress from "./components/Progress";
import ResponsiveGrid from "./components/ResponsiveGrid";

function App() {
  return (
    <div>
      <h1>Material UI</h1>
      <CardMui />
      <AutoComp />
      <DrawerMenu />
      <Progress/>
      <ResponsiveGrid/>
    </div>
  );
}

export default App;
