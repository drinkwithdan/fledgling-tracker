const Header = () => {
  const birdLogo = require("../images/bird.png")

  return (
    <div className="header">
      <div className="title">
        <h1>Victorian Fledgling Tracker</h1>
      </div>

      <div className="header-image">
        <img src={birdLogo} alt="Bird" />
      </div>

    </div>
  )
}

export default Header
