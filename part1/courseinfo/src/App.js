const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
}

const Content = (props) => {
  return (
    <div>
      {console.log(props)}
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  );
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  const totalParts = props.parts.reduce((acc, curr) => acc + curr.exercises, 0);

  return (
    <p>
      Number of Exercises {totalParts}
    </p>
  );
}


const App = () => {
  const course = 'Half Stack Application Development'
  const parts = [{name: 'Fundamentals of React', exercises: 10}, 
    {name: 'Using props to pass data', exercises: 7}, 
    {name: 'State of a component', exercises: 14}]

  return (
    <div>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App