import Phaser from "phaser";
export default class MyComp {
    constructor(gameObject: Phaser.GameObjects.Image);
    static getComponent(gameObject: Phaser.GameObjects.Image): MyComp;
    private gameObject;
}
