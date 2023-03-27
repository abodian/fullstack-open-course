const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
}

const Content = (props) => {
  return (
    <div>
      {console.log(props)}
      <Part part={props.exercises[0].name} exercises={props.exercises[0].exercises}/>
      <Part part={props.exercises[1].name} exercises={props.exercises[1].exercises}/>
      <Part part={props.exercises[2].name} exercises={props.exercises[2].exercises}/>
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
  return (
    <p>
      Number of exercises {props.exercises[0].exercises
       + props.exercises[1].exercises 
       + props.exercises[2].exercises}
    </p>
  );
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course={course}/>
      <Content exercises={[part1, part2, part3]} />
      <Total exercises={[part1, part2, part3]} />
    </div>
  )
}

export default App