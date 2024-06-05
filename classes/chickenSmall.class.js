/**
 * Represents a small chicken object that extends MoveableObject.
 */
 class ChickenSmall extends MoveableObject {

    /**
     * The height of the small chicken.
     * @type {number}
     */
    height = 45;

    /**
     * The width of the small chicken.
     * @type {number}
     */
    width = 45;

    /**
     * The y-coordinate of the small chicken.
     * @type {number}
     */
    y = 380;

    /**
     * Array containing paths to images representing the small chicken walking animation.
     * @type {string[]}
     */
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png',
    ];

    /**
     * Array containing paths to images representing the dead small chicken animation.
     * @type {string[]}
     */
    IMAGES_DEAD = [
        'img/3_enemies_chicken/chicken_small/2_dead/dead.png',
    ];

    /**
     * Constructs a new ChickenSmall object.
     */
    constructor() {
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.x = 350 + Math.random() * 800;
        this.speed = 0.15 + Math.random() * 0.5;
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_DEAD);
        this.animate();
    }

    /**
     * Starts small chicken animations.
     */
    animate() {
        this.chickenSmallAnimationInterval = setInterval(() => {
            this.chickenSmallAnimation();
        }, 100);
    }

    /**
     * Animates the small chicken based on its state.
     */
    chickenSmallAnimation() {
        if (!this.isDead()) {
            this.playAnimation(this.IMAGES_WALKING);
        } else {
            this.playAnimation(this.IMAGES_DEAD);
        }
    }

    /**
     * Animates the small chicken walking.
     */
    chickenSmallWalkAnimation() {
        this.chickenSmallWalkInterval = setInterval(() => {
            this.moveLeft();
        }, 20);
    }

}
