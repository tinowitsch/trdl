function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center> 
          <MyButton />
          <MyApp />
          <Profile />
        </center>
      </header>          
    </div>
  );
}
function MyButton() {
  return (
    <button>
      Start
    </button>
  );
}

function MyApp() {
  return (
    <div>
      <h1>my app</h1>
    </div>
  );
}

const user = {
  name: 'tinowitsch',
  imageSize: 90,
};

function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

export default App;
