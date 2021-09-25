import './App.css';
import { Helmet } from 'react-helmet';
import InitialContainer from './components/initial/initialContainer';
import CVicon from './assets/CVicon.png'

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charset="utf-8" />
        <link rel="icon" href={CVicon} />
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="CV, web, development, HTML, CSS, javascript, react, git"/>
        <meta
          name="description"
          content="CV of web and mobile developer Arman Gharibyan"
        />
        {/* <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
        <title>CV</title>
      </Helmet>
      <InitialContainer />
    </div>
  );
}

export default App;
