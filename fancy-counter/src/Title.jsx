function Title({ locked }) {
  return (
    <h1 className="title">
      {locked === false ? "Fancy Counter" : "Limit!! Buy Pro For > 5"}
    </h1>
  );
}

export default Title;
