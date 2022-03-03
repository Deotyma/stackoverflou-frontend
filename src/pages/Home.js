import Navbar from '../components/navBar'

const Home = () => {

  const authToken = true

  const hendleClick = () =>{
    console.log('clicked')
  }


    return (
      <>
      <Navbar></Navbar>
      <div className="home">
          <h1>Stackoverflou</h1>
          <h2>bienvenue</h2>
          <button className="primary_button" onClick={hendleClick}>
            {authToken ? 'se deconecter' : 'se conecter'}

          </button>
      </div>
      </>
    );
  }
  export default Home;