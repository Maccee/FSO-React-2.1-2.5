const Header = ({ header }) => {
  return <h2>{header}</h2>;
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <p key={part.id}>
          {part.name} {part.exercises}
        </p>
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0);
  return (
    <p>
      <strong>total of {total} exercises</strong>
    </p>
  );
};

const Course = (props) => {
  return (
    <>
      <Header header={props.courses.name} />
      <Content parts={props.courses.parts} />
      <Total parts={props.courses.parts} />
    </>
  );
};
export default Course;
