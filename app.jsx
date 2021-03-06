let PLAYERS = [
  {
    id: 1,
name: "Ihor Bond",
 score: 31
  },
   {
     id: 2,
name: "Tommy Roldan",
 score: 30
  }
]

function Header(props) {

 return (
   <div className="header">
    <h1> {props.title} </h1>
    </div>
 );

}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
};

function Counter(props) {

return (
    <div className="counter">
    <button className="counter-action decrement"> - </button>
    <div className="counter-score">{props.score}</div>
     <button className="counter-action increment"> + </button>
    </div>
);

}

Counter.propTypes = {
  score: React.PropTypes.number.isRequired
};

function Player(props) {

return (
 <div className="player">
    <div className="player-name">
  {props.name}
    </div>
  <div className="player-score">
  <Counter score={props.score} />
  </div>
  </div>
);

}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
};

function Application (props) {

  return (
    <div className='scoreboard'>
    <Header title={props.title} />
    <div className="players">
    {props.players.map(onePlayer => {
      return <Player key={onePlayer.id} name={onePlayer.name} score={onePlayer.score} />
    })}
    </div>
    </div>
  );

}

Application.propTypes = {
  title: React.PropTypes.string,
  //define players array
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
  id: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired
  })).isRequired
};

Application.defaultProps = {
  title: "ScoreBoard"
};

ReactDOM.render(
  <Application players={PLAYERS} />,
  document.getElementById('container')
)
