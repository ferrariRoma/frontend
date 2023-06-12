import { RankingAndRecords } from './components';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <Welcome />
      <RankingAndRecords isLogin={true} />
    </>
  );
}

export default App;
