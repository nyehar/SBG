// This is the game code. I've added in some key bits in here to start you off.
import gsap, { Bounce, Elastic } from "gsap";
// To make a game we use pixi js, a game animation package that renders the games we make.
import { Application, Graphics, Sprite } from "pixi.js";

export default function PixiGame() {
  const width = 1024;
  const height = 512;
  const game = new Application({
    width,
    height,
    backgroundColor: 0x333333
  });

  document.getElementsByClassName("canvas")[0].appendChild(game.view);

  const background = Sprite.from(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/518097-background-hd.jpg/1280px-518097-background-hd.jpg"
  );
  background.anchor.set(0.5);
  background.position.set(width / 2, height / 2);
  console.log(background.position.x);
  console.log(background.position.y);
  game.stage.addChild(background);

  const fu = Sprite.from(
    "https://pbs.twimg.com/profile_images/1318184199799668738/_fnZOYHc_400x400.jpg"
  );
  fu.anchor.set(0.5);
  fu.scale.set(0.25);
  fu.position.set(width / 2, height / 2);
  console.log(fu.position.x);
  console.log(fu.position.y);
  game.stage.addChild(fu);

  // Making a basic shape
  const box = new Graphics();
  box.beginFill(0xff0f0); // This is the colour in hex -
  // first two letters/numbers are red channel, second is green, third is blue
  box.drawRect(0, 0, 100, 100); // the Geometry for the shape
  box.endFill(); // anything from the shape geometry gets colour once you end the fill
  box.position.set(width / 2, height / 2);
  box.pivot.set(box.width / 2, box.height / 2); // centers the object
  game.stage.addChild(box);

  // A sprite is what we use to add an image or texture.
  const sprite = Sprite.from(
    "https://static.wixstatic.com/media/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png/v1/fill/w_1000,h_571,al_c,usm_0.66_1.00_0.01/bb1bd6_5798c09022ba43249a38bfea9be1db34~mv2.png"
  );
  sprite.position.set(200, 300);
  sprite.tint = 0xff00ff;
  sprite.width = 222;
  sprite.alpha = 0;
  sprite.height = 222;
  sprite.interactive = true;
  sprite.buttonMode = true;

  // sprite.anchor = 0.5;
  game.stage.addChild(sprite);

  let buttonworking = true;
  let i = 1;
  sprite.on("pointertap", async () => {
    i++;
    await gsap.to(box.position, {
      duration: 1,
      y: height / 2 + 30 * i,
      yoyo: true,
      ease: Elastic.easeOut
    });
    sprite.interactive = false;
    sprite.buttonMode = false;
    buttonworking = false;
  });

  if (buttonworking === false) {
    sprite.tint = 0xff0000;
  }

  // Gsap is a plugin we use to do some fun animating for our minigames.
  // https://greensock.com/docs/v3/Eases
  function animate() {
    gsap.to(sprite, {
      duration: 1,
      alpha: 1,
      repeat: 4,
      ease: Bounce.easeOut
    });

    gsap.to(box.position, {
      duration: 1,
      repeat: -1,
      x: width / 2 + 300,
      yoyo: true,
      ease: Elastic.easeIn
    });
  }

  animate();

  const play = (delta) => {
    box.rotation += ((Math.PI * 2) / 120) * delta;
  };

  let state = play;

  const loop = (delta) => {
    state(delta);
  };

  game.ticker.add((delta) => loop(delta));
}
