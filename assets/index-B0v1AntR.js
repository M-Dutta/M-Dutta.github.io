const __vite__fileDeps=["assets/Attractor-fNODa5Xb.js","assets/ParticlesInteractorBase-vfDeBun3.js","assets/index-DS45phhp.js","assets/index-D0IbTL8g.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as c}from"./index-DS45phhp.js";async function i(t,r=!0){await t.addInteractor("particlesAttract",async a=>{const{Attractor:o}=await c(()=>import("./Attractor-fNODa5Xb.js"),__vite__mapDeps([0,1,2,3]));return new o(a)},r)}export{i as loadParticlesAttractInteraction};
