export default function HelloWorld() {
  const props = {
    text: "Hello World semua",
  };
  return (
    <div>
      <HeaderHelloWorld {...props} />
      <ParagraphHelloWorld />
    </div>
  );
}

export function HeaderHelloWorld({ text = "Hello World" }) {
  const style = {
    color: "red",
    backgroundColor: "aqua",
  };
  return <h1 style={style}>{text.toUpperCase()}</h1>;
}

export function ParagraphHelloWorld() {
  const text = "Ini adalah Paragarph Hello World";
  const style = {
    color: "red",
    backgroundColor: "aqua",
  };
  return <p style={style}>{text.toLowerCase()}</p>;
}

// export default HelloWorld;
