import './App.css';
import Header from './Header';
import Stories from './Stories';
import FeedForm from './FeedForm';
import FeedPost from './FeedPost';


function App() {
  return (
    <div className="App">
      <Header />
      <Stories />
      <FeedForm />
      <FeedPost nome='Nome Sobrenome' conteudo='Texto do meu post' horario='10:21'/> 
      <FeedPost nome='Nome Sobrenome' conteudo='Texto do meu post' horario='10:21'/> 
      <FeedPost nome='Nome Sobrenome' conteudo='Texto do meu post' horario='10:21'/> 
    </div>
  );
}

export default App;

