<template>
  <div class="projView">
      <h2 class="mb-4 accent--text">Zelda Clone!</h2>
      <p> 
        The goal of this project is to crate a very simple and short demo for a Zelda-like game.
        What this mean in this context? A 2D, top-down, sprite-based, pixel art game where the game world
        consists of tilemaps. The gameplay has basic attacking with a sword and a few puzzles. Its not going 
        to win any game of the year awards but its a fun experience to make. 
      </p>
      <p> 
        Unity was the engine I chose to use. Unity is prodominantly a 3D engine but it does have support for 2D stuff. While this support is limited
        and not as fully fleshed out as some 2D engines made for the purpose, Unity is used so widely in the games industry, using this 
        project to gain familiarity with it seemed of higher value than using a more niche engine that would do the job better. That being said, Unity has been adding
        more 2D features so it might catch up anyway to other engines.
      </p>
      <p>
        First thing I tackled was the character animations. Starting with spritesheets, I needed to create the animations 
        and the triggers for those animations. I chose two approaches, first for the player, I used the Unity animator which works as essentially a 
        state machine with a visual editor.
      </p>
      <div class="imgDisplay">
        <img :src="require('../assets/codeSnippets/zelda/animator.png')"/>
        <p class="imgCap">Lazy loading of components</p>
      </div>
      <p>
        Above shows the web for the player character. Each node is for a seperate animation that also has four directions for each animation (up, down, right, left)
        that corresponds to seperate sprites. The parameters dirY and dirX determine which directional sprite is used with each node having a blend tree that uses these values.
      </p>
      <div class="imgDisplay">
        <img :src="require('../assets/codeSnippets/zelda/blendTree.png')"/>
        <p class="imgCap">Blend tree for player animation</p>
      </div>
      <p> We can then use the player input to determine these parameters. The player controller will set the arrow keys to both move the player in terms
        of velocity and also set the there parameters in the animator to get the correct sprites and animations for those movements.
      </p>
      <div class="imgDisplay">
        <img :src="require('../assets/codeSnippets/zelda/playerController.png')"/>
        <p class="imgCap">C# code for player input</p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>