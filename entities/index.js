import Matter from 'matter-js';
import Bird from '../components/Bird';
import Floor from '../components/Floor';

import { Dimensions } from 'react-native';
import Obstacle from '../components/Obstacle';


// useful constants 
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default restart => {
    // defining the engine and the game world 
    let engine = Matter.Engine.create({enableSleeping: false});
    let world = engine.world;

    // setting constants 
    world.gravity.y = 0.4;

    // returning objects in the game 
    return {
        physics: {engine, world},
        Bird: Bird(world, 'green', {x: 50, y: 300}, {height: 40, width: 40}),
        Floor: Floor(world, 'green', {x: windowWidth / 2, y: windowHeight}, {height: 50, width: windowWidth}), 
        ObstacleTop1: Obstacle(world, 'ObstacleTop1', 'red', {x: 50, y: 300}, {height: 40, width: 40}),
    }
}