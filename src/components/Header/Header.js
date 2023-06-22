import logo from "../../assets/investment-logo.jpg";

export default function Header() {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Invest Smart</h1>
      </header>
    </div>
  );
}
