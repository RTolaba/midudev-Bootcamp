import React from 'react'
import ReactDOM from 'react-dom';

/**
 * 
 * const Titulo = ({course}) => <h1> {props}</h1>
 * forma crta para cuando devuelve la primera linea de codigo
 * en vez de usar el props de propiedad, directamente extraemos la propiedad del objeto "course"
 */

const Header = (props) => {


  return <h1>{props.course.name}</h1>
 
}
/**
* const Parts = ({part}, {exercise}) => <p> {part} {exercise} </p>
 */

const Part = (props) => {
  console.log(props.numero);
  return<p>{props.nombre}, ejercicios:: {props.numero} </p>
}

// en este componente de una sola linea no me salen los numeros...
//const Part = ({nombre}, {numero}) => <p>{nombre}, ejercicioss:{numero} </p> 

const Content = (props) => {
  console.log("como que undefined de nuevo")
  console.log(props.course.parts[0].exercises);

  return (
    <div>
      <Part nombre={props.course.parts[0].name} numero={props.course.parts[0].exercises} ></Part> 
      <Part nombre={props.course.parts[1].name} numero={props.course.parts[1].exercises} ></Part>
      <Part nombre={props.course.parts[2].name} numero={props.course.parts[2].exercises} ></Part>
    </div>
    )
}
/**
 * Este componente no suma solo muestra todo como string
 * {const Resultado = (props) => <p>El resultado de ejercicios es:  { props.num1}+{props.num2}+{props.num3}</p>} props 
 */

//No se peude realizar en una sola linea, o por lo menos yo no pude
const Total = (props) => {

  let result = (props.course.parts[0].exercises + props.course.parts[1].exercises + props.course.parts[2].exercises);
  return <p>El resultado de ejercicios es:  {result}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course = {course} />
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))