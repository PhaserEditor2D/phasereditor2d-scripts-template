
// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MyComp {

	constructor(gameObject: Phaser.GameObjects.Image) {
		this.gameObject = gameObject;
		(gameObject as any)["__MyComp"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Image): MyComp {
		return (gameObject as any)["__MyComp"];
	}

	private gameObject: Phaser.GameObjects.Image;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
