I started by drawing the 3x3 grid. From this sketch, I could see one housing container and 9 individual tiles. I would make the container an object that is responsible for housing the tiles. The tiles would also be objects of the same class.

The container would have methods to manage clicks, create the tiles and store them in array. I would have another array. The first array would be the current state. The other array would be the future state this would be a copy of the current state.

Each tile would have a number from 0 - 8 be responsible for holding there current color and two methods both to replace another tile's color with their color. One method would target a vertical shift the other a horizontal.

The shifting logic would take the number of the tile and then work out which one to target in the future state array.
eg tile 0 only needs to shift its color to tile 1 if a horizontal shift is chosen.

The buttons, when pressed, would trigger the method in the container that loops through the current state, filters the tiles that need to update, and calls there method. The next step would set the current state to the future state and rerender.
