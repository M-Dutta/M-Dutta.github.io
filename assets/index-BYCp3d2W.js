const __vite__fileDeps=["assets/Collider-CRjfNbH8.js","assets/index-iaw0yNyP.js","assets/index-D0IbTL8g.css","assets/ParticlesInteractorBase-vfDeBun3.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./index-iaw0yNyP.js";async function n(t,o=!0){await t.addInteractor("particlesCollisions",async i=>{const{Collider:r}=await a(()=>import("./Collider-CRjfNbH8.js"),__vite__mapDeps([0,1,2,3]));return new r(i)},o)}export{n as loadParticlesCollisionsInteraction};
