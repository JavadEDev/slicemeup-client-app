const Pizza = (props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h3 className="text-secondary mb-2 text-2xl">{props.name}</h3>
      <p className="mb-1">{props.description}</p>
      <img
        src={props.image}
        alt={props.name}
        className="border-border shadow-card max-w-[200px] rounded-xl border"
      />
      <p className="text-lg font-bold">{props.price}</p>
    </div>
  );
};

export default Pizza;
