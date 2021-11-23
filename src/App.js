import './App.css';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';
import TodoContextProvider from './context/TodoContext';
import Todo from './components/Todo';
import AuthContextProvider from './context/AuthContext';
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar/>
        <TodoContextProvider>
        <Todo/>
        </TodoContextProvider>
      </AuthContextProvider>
        <ThemeToggle/>
    </div>
  );
}

export default App;
