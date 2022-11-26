import React from 'react';
import Matter from 'matter-js';
import { View } from 'react-native';


const Bird = props => {
    // calculations for the width, height, x and y positions, and color 
    const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
    const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;
    const xBody = props.body.position.x - (widthBody / 2);
    const yBody = props.body.position.y - (heightBody / 2);
    const color = props.color;

    // information that gets passed to the renderer via <Bird/>
    return (
        <View style={{
            borderWidth: 1,
            borderColor: color,
            borderStyle: 'solid',
            position: 'absolute',
            left: xBody,
            top: yBody,
            width: widthBody,
            height: heightBody,
        }}/>
    )
}

export default (world, color, pos, size) => {
  // defining the Bird's parameters 
    const initialBird = Matter.Bodies.rectangle(
    pos.x, 
    pos.y, 
    size.width, 
    size.height, 
    {label: 'Bird'}
  );
  
  // adding it to the world via the engine 
  Matter.World.add(world, initialBird);

  // passing info to the renderer and game engine 
  return {
    body: initialBird,
    color,
    pos,
    renderer: <Bird/>
  }
}
