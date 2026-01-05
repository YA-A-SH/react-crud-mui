import Body from "./Body";
import Header from "./Header";
export default function MainCode({ show, setShow }) {
 
  return (
    <div className="main">
      <Header />
      <Body show={show} setShow={setShow} />
    </div>
  );
}
