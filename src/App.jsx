import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import HeaderPicURL from "./assets/skull.png"
import TeamCard from './components/TeamCard';

function App() {
  return (
    <div className='app-container'>
      <Navbar></Navbar>
      <Header imageUrl={HeaderPicURL}></Header>
      <div className='flex'>
        <TeamCard
          name="Tatya Bichu"
          designation="Team Head"
          instaUrl="https://instagram.com/tatyabichu"
          linkedinUrl="https://linkedin.com/in/tatyabichu"
          phone="+1234567890"
          image={HeaderPicURL}
        />
        <TeamCard
          name="Tatya Bichu"
          designation="Team Head"
          instaUrl="https://instagram.com/tatyabichu"
          linkedinUrl="https://linkedin.com/in/tatyabichu"
          phone="+1234567890"
          image={HeaderPicURL}
        />
        <TeamCard
          name="Tatya Bichu"
          designation="Team Head"
          instaUrl="https://instagram.com/tatyabichu"
          linkedinUrl="https://linkedin.com/in/tatyabichu"
          phone="+1234567890"
          image={HeaderPicURL}
        />
        <TeamCard
          name="Tatya Bichu"
          designation="Team Head"
          instaUrl="https://instagram.com/tatyabichu"
          linkedinUrl="https://linkedin.com/in/tatyabichu"
          phone="+1234567890"
          image={HeaderPicURL}
        />  
      </div>

      <div className='flex'>
        <TeamCard
          name="Tatya Bichu"
          designation="Team Head"
          instaUrl="https://instagram.com/tatyabichu"
          linkedinUrl="https://linkedin.com/in/tatyabichu"
          phone="+1234567890"
          image={HeaderPicURL}
        />
        <TeamCard
          name="Tatya Bichu"
          designation="Team Head"
          instaUrl="https://instagram.com/tatyabichu"
          linkedinUrl="https://linkedin.com/in/tatyabichu"
          phone="+1234567890"
          image={HeaderPicURL}
        />
        <TeamCard
          name="Tatya Bichu"
          designation="Team Head"
          instaUrl="https://instagram.com/tatyabichu"
          linkedinUrl="https://linkedin.com/in/tatyabichu"
          phone="+1234567890"
          image={HeaderPicURL}
        />
        <TeamCard
          name="Tatya Bichu"
          designation="Team Head"
          instaUrl="https://instagram.com/tatyabichu"
          linkedinUrl="https://linkedin.com/in/tatyabichu"
          phone="+1234567890"
          image={HeaderPicURL}
        />  
      </div>


      <div className='flex'>
        <TeamCard
          name="Tatya Bichu"
          designation="Team Head"
          instaUrl="https://instagram.com/tatyabichu"
          linkedinUrl="https://linkedin.com/in/tatyabichu"
          phone="+1234567890"
          image={HeaderPicURL}
        />
        <TeamCard
          name="Tatya Bichu"
          designation="Team Head"
          instaUrl="https://instagram.com/tatyabichu"
          linkedinUrl="https://linkedin.com/in/tatyabichu"
          phone="+1234567890"
          image={HeaderPicURL}
        />
        <TeamCard
          name="Tatya Bichu"
          designation="Team Head"
          instaUrl="https://instagram.com/tatyabichu"
          linkedinUrl="https://linkedin.com/in/tatyabichu"
          phone="+1234567890"
          image={HeaderPicURL}
        />
        <TeamCard
          name="Tatya Bichu"
          designation="Team Head"
          instaUrl="https://instagram.com/tatyabichu"
          linkedinUrl="https://linkedin.com/in/tatyabichu"
          phone="+1234567890"
          image={HeaderPicURL}
        />  
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
