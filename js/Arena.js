"use strict";

const Arena = function(game) {
   // Appel des variables utiles
   this.game  = game;
   let scene  = game.scene;

   // Création de la lumière principale
   let light        = new BABYLON.HemisphericLight('light', new BABYLON.Vector3(0, 1, 0), scene);
   var light1       = new BABYLON.PointLight("pointLight", new BABYLON.Vector3(2, 5, 3), scene);
   light1.diffuse   = new BABYLON.Color3(1, 1, 1);
   light1.specular  = new BABYLON.Color3(1, 1, 1);

   // Création de matière pour le sol
   let materialGround                     = new BABYLON.StandardMaterial('groundTexture', scene);
   materialGround.diffuseTexture          = new BABYLON.Texture('assets/images/brick.jpg', scene);
   materialGround.diffuseTexture.uScale   = 4.0;
   materialGround.diffuseTexture.vScale   = 4.0;

   // Création de matière pour les murs
   let materialWall = new BABYLON.StandardMaterial('wallTexture', scene);
   materialWall.diffuseTexture = new BABYLON.Texture('assets/images/wall.jpg', scene);

   // Création de la matière pour les objets
   // BOX
   let materialObject                     = new BABYLON.StandardMaterial('objectTexture', scene);
   materialObject.diffuseTexture          = new BABYLON.Texture('assets/images/wood.jpg', scene);
   materialObject.diffuseTexture.uScale   = 1.0;
   materialObject.diffuseTexture.vScale   = 1.0;
   // SPHERE
   let materialSphere                     = new BABYLON.StandardMaterial('sphereTexture', scene);
   materialSphere.diffuseTexture          = new BABYLON.Texture('assets/images/rock.jpg', scene);
   materialSphere.diffuseColor            = new BABYLON.Color3(1, 0.5, 0.5);
   materialSphere.specularColor           = new BABYLON.Color3(0, 0, 0);
   materialSphere.diffuseTexture.uScale   = 4.0;
   materialSphere.diffuseTexture.vScale   = 4.0;
   // CYLINDER
   let materiaCylinder                    = new BABYLON.StandardMaterial('cylinderTexture', scene);
   materiaCylinder.diffuseTexture         = new BABYLON.Texture('assets/images/marble.jpg', scene);
   materiaCylinder.diffuseTexture.uScale  = 1.0;
   materiaCylinder.diffuseTexture.vScale  = 1.0;
   // GLASS
   let materialGlass                      = new BABYLON.StandardMaterial('glassTexture', scene);
   materialGlass.diffuseTexture           = new BABYLON.Texture('assets/images/glass.jpg', scene);
   materialGlass.diffuseTexture.uScale    = 1.0;
   materialGlass.diffuseTexture.vScale    = 1.0;

   // Création du sol ( name, width, depth, subdivision, scene )
   let ground           = BABYLON.Mesh.CreateGround('ground1', 100, 100, 2, scene)
   ground.scaling       = new BABYLON.Vector3(2, 10, 3);
   ground.scaling.z     = 2;
   ground.material      = materialGround;

   // Création des murs
   let boxArena = BABYLON.Mesh.CreateBox('wall', 100, scene, false, BABYLON.Mesh.BACKSIDE);
   boxArena.material = materialGround;
   boxArena.checkCollisions = true;

   // Création d'un cube ( name, size, scene, updatable, orientation )
   // Modèle de cube
   let mainBox          = BABYLON.Mesh.CreateBox('box1', 3, scene);
   mainBox.scaling.y    = 1;
   mainBox.position     = new BABYLON.Vector3(5, ((3/2)*mainBox.scaling.y), 5);
   mainBox.rotation.y   = (Math.PI*45/180);
   mainBox.material     = materialObject;

   // Clones
   let mainBox2         = mainBox.clone('box2');
   mainBox2.scaling.y   = 2;
   mainBox2.position    = new BABYLON.Vector3(5, ((3/2)*mainBox2.scaling.y), -5);

   let mainBox3         = mainBox.clone('box3');
   mainBox3.scaling.y   = 2;
   mainBox3.position    = new BABYLON.Vector3(-5, ((3/2) * mainBox3.scaling.y), -5);

   let mainBox4         = mainBox.clone('box4');
   mainBox4.scaling.y   = 2;
   mainBox4.position    = new BABYLON.Vector3(-5, ((3/2) * mainBox4.scaling.y), 5);

   // Création d'un sphère ( name, segments, size, scene, updatable, orientation )
   let sphere           = BABYLON.Mesh.CreateSphere('sphere', 16, 2, scene);
   sphere.scaling.y     = 1;
   sphere.position      = new BABYLON.Vector3(12, ((2/2) * sphere.scaling.y), -12);
   sphere.material      = materialSphere;

   let sphere2          = sphere.clone('sphere2');
   sphere2.scaling.y    = 1;
   sphere2.position     = new BABYLON.Vector3(-10, ((2/2) * sphere2.scaling.y), -8);

   let sphere3          = sphere.clone('sphere3');
   sphere3.scaling.y    = 1;
   sphere3.position     = new BABYLON.Vector3(15, ((2/2) * sphere3.scaling.y), -1);
   sphere3.material     = materialGlass;

   // Création d'un cylindre ( name, height, diamTop, diamBottom, tesselation, subdivision, scene, updatable, orientation )
   let cylinder         = BABYLON.Mesh.CreateCylinder('cyl1', 60, 5, 5, 20, 4, scene);
   cylinder.position.y  = 20/2;
   cylinder.material    = materiaCylinder;
};