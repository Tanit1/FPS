"use strict";

const Player = function(game, canvas) {
   // _this est l'accès à la caméra à l'intérieur de Player
   let _this = this;

   // La scène du jeu
   this.scene = game.scene;

   // Initialisation de la caméra
   this._initCamera(this.scene, canvas);
};

Player.prototype = {
   _initCamera: function(scene, canvas) {
      // Création de la caméra
      this.camera = new BABYLON.FreeCamera('camera', new BABYLON.Vector3(-7, 0, 30), scene);

      // Affecte le mouvement de la caméra au canvas
      this.camera.attachControl(canvas, true);

      // Initialise la caméra sur le point zéro de la scène
      this.camera.setTarget(BABYLON.Vector3.Zero());
   }
}