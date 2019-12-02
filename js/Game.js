"use strict";

document.addEventListener("DOMContentLoaded", function() {
   new Game('renderCanvas');
}, false);

const Game = function(canvasId) {
   // Définition de canvas et engine
   let canvas = document.getElementById(canvasId);
   let engine = new BABYLON.Engine(canvas, true);
   let _this  = this;
   _this.actualTime = Date.now();

   // Initialisation de la scène avec une fonction associé à l'objet Game
   this.scene = this._initScene(engine);

   // Appel de Player & Arena
   let _arena  = new Arena(_this);
   let _player = new Player(_this, canvas);

   // Boucle pour faire tourner le jeu
   engine.runRenderLoop( function() {
      // Récuperer le ratio par les fps
      _this.fps = Math.round(1000 / engine.getDeltaTime());

      _this.scene.render();
   } );

   // Ajuste la vue 3D si la fenêtre est agrandi ou diminué
   window.addEventListener('resize', () => {
      if(engine)
         engine.resize();
   }, false);
};

Game.prototype = {
   // Prototype d'initialisation de la scène
   _initScene: (engine) => {
      let scene         = new BABYLON.Scene(engine);
      scene.clearColor  = new BABYLON.Color3(0, 0, 0);
      scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
      scene.collisionsEnabled = true;
      return scene;
   }
};

// ------------------------- TRANSFO DE DEGRES/RADIANS 
function degToRad(deg) {
   return (Math.PI * deg) / 180
}
// ----------------------------------------------------

// -------------------------- TRANSFO DE DEGRES/RADIANS 
function radToDeg(rad) {
   // return (Math.PI*deg)/180
   return (rad * 180) / Math.PI
}
// ----------------------------------------------------