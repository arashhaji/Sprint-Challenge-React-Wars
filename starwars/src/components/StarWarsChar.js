import React from "react";
import styled from "styled-components";

const StarWarsChars = styled.div`
width: 25%;
height: 300px;
margin: 50px;
color: white;
background-color: #df4e0b;
border: 5px solid grey;
box-shadow: 5px 5px 5px #fff;
border-radius: 50%;
`
const UL = styled.ul`
list-style-type: none;
padding: 0;
padding-left: 60px;
`
const H1 = styled.li`
font-size: 2.8rem;
margin-top: 100px;
text-shadow: 1px 1px 5px #fff;
`

function StarWarsChar(props) {
  return (
    <StarWarsChars>
      <UL>
      <li>
        <H1>{props.char.name}</H1>
       </li>
        <li>Birth Year: {props.char.birth_year}</li>
        <li>Eye Color: {props.char.eye_color}</li>
        <li>Height: {props.char.height}</li>
        <li>Mass: {props.char.mass}</li>
      </UL>
    </StarWarsChars>
  );
}
export default StarWarsChar;