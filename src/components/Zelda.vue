<template>
  <div class="projView">
      <h2 class="mb-4 accent--text">Animating Sprites</h2>
      <p> 
        The goal of this project is to animate two characters in a simple 2D sprite based game using Unity. There are two characters that covered in this
        article. The player character and a "boss" enemy.
      </p>
      <p> 
        Unity was the engine I chose to use. Unity is prodominantly a 3D engine but it does have support for 2D stuff. While this support is limited
        and not as fully fleshed out as some 2D engines made for the purpose, Unity is used so widely in the games industry, using this 
        project to gain familiarity with it seemed of higher value than using a more niche engine that would do the job better. That being said, Unity has been adding
        more 2D features so it might catch up anyway to other engines.
      </p>
      <p>
        Starting with spritesheets, I needed to create the animations 
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
      <p> 
        We can then use the player input to determine these parameters. The player controller will set the arrow keys to both move the player in terms
        of velocity and also set the there parameters in the animator to get the correct sprites and animations for those movements.
      </p>
      <div class="imgDisplay">
        <img :src="require('../assets/codeSnippets/zelda/playerController.png')"/>
        <p class="imgCap">C# code for player input</p>
      </div>
      <p>
        Now, for the second character. For this character, we are going to use a programatic approach, not using the editor to do most of the
          leg work for us. Unity allows you to plsit up a spritesheet into it's individual sprites, using this, we will then load these sprites into
          an array. Knowing the order in which the sprites are loaded, we can use simple arithmetic to know which sprite to use.
      </p>
      <div class="imgDisplay">
        <img :src="require('../assets/codeSnippets/zelda/spriteArray.png')"/>
        <p class="imgCap">Code for loading the sprites</p>
      </div>
      <p>
        We want the boss to appear to be facing the player character so to acheive this, we use the player position and the boss position to form a vector. With 
        this vector we get an angle against a north facing vector, giving us the ability to tell if the boss if facing up, down, right or left. The boss will also
        be casting spells and with this, he has casting animations. Each direction has 6 sprites that are in the order of the casting animation so we have an int which is incremented
        in small time frames and then used to access the array to choose the correct sprite. We then have a seperate index which accounts for the direction of the character, when added together
        we get both the correct next sprite for the casting animation and also the correct facing sprite. This gives the illusion that the casting animation is independant to
        the direction.
      </p>
      <div class="imgDisplay">
        <img :src="require('../assets/codeSnippets/zelda/bossDirection1.png')"/>
        <p class="imgCap">Vectors used for determining player direction</p>
      </div>
      <div class="imgDisplay">
        <img :src="require('../assets/codeSnippets/zelda/bossDirection2.png')"/>
        <p class="imgCap">Angle from vector used to get an index used for the arithmetic</p>
      </div>
      <div class="imgDisplay">
        <img :src="require('../assets/codeSnippets/zelda/bossDirection3.png')"/>
        <p class="imgCap">The arithmetic used for indexing the array</p>
      </div>
      <p>With the cast stage int that we use for the indexing of the sprites, we reset it to zero after it reaches the amount of sprites we have for each cast animation.
        This allows us to loop the animation and not start using animations from other directions or reaching an index outside the bounds of the array. Below is the finished animations
        for the boss and the player character.
      <div class="imgDisplay">
        <video width="300" autoplay loop><source :src="require('../assets/codeSnippets/zelda/animation.mp4')"></video>
        <p class="imgCap"> Animation demo </p>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>