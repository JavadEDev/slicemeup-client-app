import Loading from "./loading";
const Pizza = (props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h3 className="pizza-name">{props.name}</h3>
      <p className="pizza-description">{props.description}</p>
      <img
        src={props.image ? props.image : <Loading />}
        alt={props.name}
        className="pizza-image"
      />
      <p className="pizza-price">{props.price}</p>
    </div>
  );
};

export default Pizza;
