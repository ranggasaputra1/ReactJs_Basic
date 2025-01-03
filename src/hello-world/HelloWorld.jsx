import "./HelloWorld.css";

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
  return <h1 className="title">{text.toUpperCase()}</h1>;
}

export function ParagraphHelloWorld() {
  const text = "Ini adalah Paragarph Hello World";
  return <p className="content">{text.toLowerCase()}</p>;
}

// export default HelloWorld;
