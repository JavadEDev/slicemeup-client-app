const Pizza = (props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
      <h3 className="text-secondary mb-2 text-2xl">{props.name}</h3>
      <p className="mb-1">{props.description}</p>
      <img
        src={props.image}
        alt={props.name}
        className="border-border shadow-card max-w-[200px] rounded-xl border"
      />
      <p className="text-lg font-bold">$12.99</p>
    </div>
  );
};

export default Pizza;
