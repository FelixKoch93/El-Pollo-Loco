/**
 * Represents an end boss object that extends MoveableObject.
 */
 class Endboss extends MoveableObject {

    height = 400;
    width = 250;
    y = 60;
    world;
    character;
    animationEnded = false;

    /**
     * Array containing paths to images representing alert state of the end boss.
     * @type {string[]}
     */
    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    /**
     * Array containing paths to images representing walking state of the end boss.
     * @type {string[]}
     */
    IMAGES_WALK = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png',
    ];

    /**
     * Array containing paths to images representing attacking state of the end boss.
     * @type {string[]}
     */
    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png',
    ];

    /**
     * Array containing paths to images representing hurt state of the end boss.
     * @type {string[]}
     */
    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png',
    ];

    /**
     * Array containing paths to images representing dead state of the end boss.
     * @type {string[]}
     */
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png',
    ];

    /**
     * Constructs a new Endboss object.
     */
    constructor() {
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 2000;
        this.animate();
        this.endbossAttack();
    }

    /**
     * Animates the end boss.
     */
    animate() {
        this.endbossImagesInterval = setInterval(() => {
            this.endbossAnimation();
        }, 200);
    
        this.endbossAttackInterval = setInterval(() => {
            if (this.endBossEnergy < 100) { 
                this.endbossAttack();
            }
        }, 250); 
    }

    /**
     * Animates the end boss based on its current state.
     */
    endbossAnimation() {
        this.playAnimation(this.IMAGES_ALERT);
        if (this.endbossIsDead()) {
            this.playAnimation(this.IMAGES_DEAD);
        }
    }

    /**
     * Initiates the end boss attack.
     */
    endbossAttack() {
            this.playAnimation(this.IMAGES_WALK)
            this.moveLeft();
            this.speed = 15; 
    }

    /**
     * Plays the dead animation of the end boss.
     */
    playDeadAnimation() {
        this.playAnimation(this.IMAGES_DEAD);
        this.animationEnded = true;
        clearInterval(this.endbossInterval);
        this.y = 120;
    }
}
