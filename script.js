let original;
let alice = '<h2 style="margin: auto; display: flex; justify-content: center;">Alice Anselmi</h2><p>Aiming at soaring to new heights by delivering a game with impressive and memorable visuals, I carefully shaped the protagonist of Flock. I brought the bird to life with Autodesk Maya – modeling, rigging, and animating its graceful movements. I also took care of integrating the animations into Unity, ensuring a seamless and immersive experience for players. Finally, texturing in Blender and some final touches with particle effects added a vibrant layer to the bird’s appearance. Completing the sensory experience and adding to the game’s atmosphere, I curated the evocative soundtrack and SFX, and incorporated them into the game</p>'
let celina = '<h2 style="margin: auto; display: flex; justify-content: center;">Celina Söderman</h2><p>My key responsibility for this project was to develop smooth environmental changes to the level, seamless to the user. Such changes included creating curvature to the world and making sure that shaders and textures integrated smoothly. I have evaluated different methods of procedural generation, and exploring the illusions of shaders. Some of the side tasks i had during the project was to create an alpha version of the player controller</p>'
let gustav = '<h2 style="margin: auto; display: flex; justify-content: center;">Gustav Axelsson</h2><p>this is a Gustav! </p>'
let jesper = '<h2 style="margin: auto; display: flex; justify-content: center;">Jesper Lidbaum</h2><p>this is a Jesper! </p>'
let emile = '<h2 style="margin: auto; display: flex; justify-content: center;">Emile Pascoe</h2> <p>I brought the flap to Flock by developing the gesture-based interactions used in the experience. Using Google\'s MediaPipe library I helped transform movement into gameplay action. I also harnessed the power of Unity\'s HDRP pipeline to create the atmosphere and lighting for the game giving the game its unique look and feel. The add extra life to the scene I created custom shaders; blending style, and realism</p>'
let btn = '<button onclick="buttonFunc2()" style="margin: auto; display: flex;" >Close</button>'

let array = [alice,celina,gustav,jesper,emile]

function buttonFunc2(){
    original = document.querySelectorAll(".main_table");
    const test = document.querySelector(".text");
    test.innerHTML ='';
    console.log(test);
}

function buttonFunc(option){

    const test = document.querySelector(".text");
    test.innerHTML = '';
    test.innerHTML += array[option];
    test.innerHTML += btn;
    console.log(test);
}