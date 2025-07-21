import './index.css';
import { QueryProvider } from './lib/queryClient';
import AppRouter from './components/AppRouter';

function App() {
  return (
    <QueryProvider>
      <AppRouter />
    </QueryProvider>
  );
}

export default App;
