const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.exercises[0].part} exercises={props.exercises[0].number}/>
      <Part part={props.exercises[1].part} exercises={props.exercises[1].number}/>
      <Part part={props.exercises[2].part} exercises={props.exercises[2].number}/>
    </div>
  );
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Total = (props) => {
  const totalExercises = props.exercises.reduce((acc, curr) => acc + curr.number, 0);

  return (
    <p>
      Number of exercises {totalExercises}
    </p>
  );
}


const App = () => {
  const exercises = [{part: 'Fundamentals of React', number: 10}, 
    {part: 'Using props to pass data', number: 7}, 
    {part: 'State of a component', number: 14}]

  return (
    <div>
      <Header course='Half Stack Application Development'/>
      <Content exercises={exercises} />
      <Total exercises={exercises} />
    </div>
  )
}

export default App