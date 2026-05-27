import gsap from "gsap";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// ─── Audio ───
let isMuted = true, backgroundMusic = null;
function initAudio() {
  backgroundMusic = new Audio("/audio/lofi.mp3");
  backgroundMusic.loop = true;
  backgroundMusic.volume = 0.35;
}
function toggleMute() {
  isMuted = !isMuted;
  if (!isMuted) { if (!backgroundMusic) initAudio(); backgroundMusic.play().catch(()=>{}); document.querySelector(".sound-off-svg").style.display="none"; document.querySelector(".sound-on-svg").style.display="block"; }
  else { if (backgroundMusic) backgroundMusic.pause(); document.querySelector(".sound-on-svg").style.display="none"; document.querySelector(".sound-off-svg").style.display="block"; }
  gsap.to(".mute-toggle-button",{scale:1.3,rotation:15,duration:0.2,ease:"back.out(2)",onComplete:()=>gsap.to(".mute-toggle-button",{scale:1,rotation:0,duration:0.25,ease:"back.out(2)"})});
}

// ─── Scene ───
const canvas = document.querySelector("#experience-canvas");
const sizes = { width: window.innerWidth, height: window.innerHeight };
const scene = new THREE.Scene();
scene.background = new THREE.Color("#b8d8e8");
const camera = new THREE.PerspectiveCamera(30, sizes.width / sizes.height, 0.1, 200);
camera.position.set(12, 9, 12);
// Mobile: move camera closer so room fills the screen
if(window.innerWidth < 768) camera.position.set(14, 10, 14);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.1;
const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 1.2, 0);
controls.minDistance = 6; controls.maxDistance = 22;
controls.minPolarAngle = 0.3; controls.maxPolarAngle = Math.PI / 2.3;
controls.enableDamping = true; controls.dampingFactor = 0.06;
controls.enabled = false; controls.update();
window.addEventListener("resize", () => {
  sizes.width = window.innerWidth; sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height; camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height); renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
// Prevent pull-to-refresh and bounce on mobile
document.body.addEventListener("touchmove",e=>{if(e.target===canvas)e.preventDefault();},{passive:false});

// ─── Lighting ───
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);
const sunLight = new THREE.DirectionalLight("#fff5e0", 1.4);
sunLight.position.set(6, 10, 8); sunLight.castShadow = true;
sunLight.shadow.mapSize.set(2048, 2048);
sunLight.shadow.camera.left = -8; sunLight.shadow.camera.right = 8;
sunLight.shadow.camera.top = 8; sunLight.shadow.camera.bottom = -8;
sunLight.shadow.bias = -0.001;
scene.add(sunLight);
scene.add(new THREE.DirectionalLight("#c8e0ff", 0.3).translateX(-4).translateY(6));
scene.add(new THREE.HemisphereLight("#e8f4ff", "#8b6b4a", 0.35));

// ─── Materials ───
const M = {
  wood: new THREE.MeshStandardMaterial({color:"#c4956a",roughness:0.85}),
  woodDk: new THREE.MeshStandardMaterial({color:"#6b4030",roughness:0.8}),
  wall: new THREE.MeshStandardMaterial({color:"#e8ddd0",roughness:0.95}),
  wallAcc: new THREE.MeshStandardMaterial({color:"#ddd2c4",roughness:0.9}),
  cream: new THREE.MeshStandardMaterial({color:"#fff8dc",roughness:0.85}),
  red: new THREE.MeshStandardMaterial({color:"#a04a3a",roughness:0.8}),
  blue: new THREE.MeshStandardMaterial({color:"#3a6ec8",roughness:0.75}),
  green: new THREE.MeshStandardMaterial({color:"#5a8c46",roughness:0.85}),
  dkGreen: new THREE.MeshStandardMaterial({color:"#2d5a2d",roughness:0.8}),
  metal: new THREE.MeshStandardMaterial({color:"#c0c0c0",metalness:0.7,roughness:0.3}),
  gold: new THREE.MeshStandardMaterial({color:"#d4a843",metalness:0.6,roughness:0.35}),
  glass: new THREE.MeshStandardMaterial({color:"#d8eef8",roughness:0.05,transparent:true,opacity:0.7}),
  snow: new THREE.MeshStandardMaterial({color:"#ffffff",roughness:0.9}),
  grass: new THREE.MeshStandardMaterial({color:"#6b9b52",roughness:0.95}),
  black: new THREE.MeshStandardMaterial({color:"#222",roughness:0.6}),
  orange: new THREE.MeshStandardMaterial({color:"#e87830",roughness:0.8}),
  pink: new THREE.MeshStandardMaterial({color:"#e8a0b0",roughness:0.85}),
  purple: new THREE.MeshStandardMaterial({color:"#7a5aaa",roughness:0.8}),
};

// ─── Room (open diorama) ───
const room = new THREE.Group(); scene.add(room);
function box(w,h,d,mat,pos,parent=room){const m=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);m.position.set(...pos);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
function cyl(rt,rb,h,mat,pos,parent=room){const m=new THREE.Mesh(new THREE.CylinderGeometry(rt,rb,h,12),mat);m.position.set(...pos);m.castShadow=true;parent.add(m);return m;}

// Floor + planks
box(7,0.12,6,M.wood,[0,0.06,0]);
for(let i=-3;i<=3;i++) box(7,0.005,0.02,M.woodDk,[0,0.125,i*0.85]);
// Walls
box(7,4,0.14,M.wall,[0,2.06,-3]);
box(0.14,4,6,M.wallAcc,[-3.5,2.06,0]);
// Trim
box(7,0.1,0.06,M.woodDk,[0,0.17,-2.93]);
box(0.06,0.1,6,M.woodDk,[-3.42,0.17,0]);
// Window with blinds
box(1.6,1.3,0.05,M.glass,[1.5,2.6,-2.92]);
// Frame
box(1.7,0.06,0.03,M.woodDk,[1.5,3.26,-2.89]);
box(1.7,0.06,0.03,M.woodDk,[1.5,1.94,-2.89]);
box(0.05,1.35,0.03,M.woodDk,[0.7,2.6,-2.89]);
box(0.05,1.35,0.03,M.woodDk,[2.3,2.6,-2.89]);
// Blinds (horizontal slats)
const blindMat=new THREE.MeshStandardMaterial({color:"#f0ece4",roughness:0.8});
for(let i=0;i<10;i++){
  const y=2.0+i*0.13;
  box(1.5,0.025,0.04,blindMat,[1.5,y,-2.87]);
}
// Blind cord
cyl(0.008,0.008,0.6,M.cream,[2.15,2.3,-2.86]);
// Top valance
box(1.7,0.1,0.06,M.woodDk,[1.5,3.3,-2.87]);
// Warm light
const warmLight = new THREE.PointLight("#ffd9a8",1.0,8);
warmLight.position.set(-1,3.2,0); warmLight.castShadow=true; room.add(warmLight);

// ─── Outdoor scenery ───
const ground = new THREE.Mesh(new THREE.PlaneGeometry(60,60),M.grass);
ground.rotation.x=-Math.PI/2; ground.position.y=-0.01; ground.receiveShadow=true; scene.add(ground);
[[-10,-14,8,4,"#6a7a82"],[-4,-16,11,5.5,"#5a6a72"],[4,-18,13,6,"#7a8a92"],[11,-15,9,4.5,"#6a7a82"],[16,-17,7,3.5,"#5a6a72"]].forEach(([x,z,h,w,c])=>{
  const m=new THREE.Mesh(new THREE.ConeGeometry(w,h,6),new THREE.MeshStandardMaterial({color:c,flatShading:true}));
  m.position.set(x,h/2-0.3,z); m.castShadow=true; scene.add(m);
  const cap=new THREE.Mesh(new THREE.ConeGeometry(w*0.3,h*0.25,6),M.snow);
  cap.position.set(x,h*0.72,z); scene.add(cap);
});
// Trees
[[-5,-4],[-6,2],[5,-5],[6,3],[-4,4],[4,5],[-7,-1],[7,-2]].forEach(([x,z])=>{
  cyl(0.08,0.12,0.6,M.woodDk,[x,0.3,z],scene);
  const lv=new THREE.Mesh(new THREE.ConeGeometry(0.5,1.2,8),M.dkGreen);
  lv.position.set(x,1.2,z); lv.castShadow=true; scene.add(lv);
});
// Flowers
const flowers=[];
for(let i=0;i<80;i++){const a=Math.random()*Math.PI*2,r=5+Math.random()*14,x=Math.cos(a)*r,z=Math.sin(a)*r;
  if(Math.abs(x)<4.5&&Math.abs(z)<4)continue;
  const fg=new THREE.Group();
  cyl(0.01,0.01,0.18,M.green,[0,0.09,0],fg);
  const p=new THREE.Mesh(new THREE.SphereGeometry(0.045,6,6),new THREE.MeshStandardMaterial({color:["#e9637a","#f3c341","#fff","#a07cd0","#ff8a4c"][i%5]}));
  p.position.y=0.2; fg.add(p); fg.position.set(x,0,z); fg.scale.setScalar(0.5+Math.random()*0.6); scene.add(fg); flowers.push(fg);
}
// Snow
const snowCount=600,snowPos=new Float32Array(snowCount*3),snowSpd=new Float32Array(snowCount);
for(let i=0;i<snowCount;i++){snowPos[i*3]=(Math.random()-0.5)*35;snowPos[i*3+1]=Math.random()*14;snowPos[i*3+2]=(Math.random()-0.5)*35;snowSpd[i]=0.3+Math.random()*0.8;}
const snowGeo=new THREE.BufferGeometry();snowGeo.setAttribute("position",new THREE.BufferAttribute(snowPos,3));
const snowPts=new THREE.Points(snowGeo,new THREE.PointsMaterial({color:"#fff",size:0.07,sizeAttenuation:true,transparent:true,opacity:0.85,depthWrite:false}));
snowPts.visible=false; scene.add(snowPts);

// Swimming pool (outside the room, to the right)
const poolGroup=new THREE.Group();
// Pool basin
const poolWater=new THREE.Mesh(new THREE.BoxGeometry(3.5,0.05,2.2),new THREE.MeshStandardMaterial({color:"#4ab8d8",roughness:0.1,metalness:0.05,transparent:true,opacity:0.8}));
poolWater.position.set(0,0.15,0);poolGroup.add(poolWater);
// Pool edges (white concrete)
const poolEdgeMat=new THREE.MeshStandardMaterial({color:"#e8e4e0",roughness:0.8});
box(3.7,0.3,0.15,poolEdgeMat,[0,0.15,-1.15],poolGroup);
box(3.7,0.3,0.15,poolEdgeMat,[0,0.15,1.15],poolGroup);
box(0.15,0.3,2.5,poolEdgeMat,[-1.85,0.15,0],poolGroup);
box(0.15,0.3,2.5,poolEdgeMat,[1.85,0.15,0],poolGroup);
// Pool floor (light blue tiles)
box(3.5,0.04,2.2,new THREE.MeshStandardMaterial({color:"#a0d8e8",roughness:0.6}),[0,-0.02,0],poolGroup);
// Ladder
cyl(0.025,0.025,0.6,M.metal,[1.6,0.4,-1.0],poolGroup);
cyl(0.025,0.025,0.6,M.metal,[1.6,0.4,-0.8],poolGroup);
box(0.02,0.02,0.22,M.metal,[1.6,0.55,-0.9],poolGroup);
box(0.02,0.02,0.22,M.metal,[1.6,0.35,-0.9],poolGroup);
// Pink flamingo float
const flamingo=new THREE.Group();
// Ring body (torus)
const ring=new THREE.Mesh(new THREE.TorusGeometry(0.4,0.12,10,16),new THREE.MeshStandardMaterial({color:"#ff69b4",roughness:0.7}));
ring.rotation.x=Math.PI/2;ring.position.set(0,0.2,0);flamingo.add(ring);
// Neck (curved cylinder)
const neck=new THREE.Mesh(new THREE.CapsuleGeometry(0.05,0.5,8,8),new THREE.MeshStandardMaterial({color:"#ff69b4",roughness:0.7}));
neck.position.set(0.25,0.55,0);neck.rotation.z=-0.3;flamingo.add(neck);
// Head
const fHead=new THREE.Mesh(new THREE.SphereGeometry(0.07,8,8),new THREE.MeshStandardMaterial({color:"#ff69b4",roughness:0.7}));
fHead.position.set(0.38,0.82,0);flamingo.add(fHead);
// Beak
const beak=new THREE.Mesh(new THREE.ConeGeometry(0.03,0.08,6),new THREE.MeshStandardMaterial({color:"#ff8c00",roughness:0.6}));
beak.position.set(0.44,0.8,0);beak.rotation.z=-Math.PI/2;flamingo.add(beak);
// Eye
const eye=new THREE.Mesh(new THREE.SphereGeometry(0.015,6,6),M.black);
eye.position.set(0.4,0.84,0.04);flamingo.add(eye);
flamingo.position.set(0.5,0.05,0.3);
poolGroup.add(flamingo);
poolGroup.position.set(6,0,0);
poolGroup.rotation.y=Math.PI/2;
scene.add(poolGroup);

// ─── Hotspot system ───
const rayObjs=[],hitMap=new Map();
function makeLabel(text,pos){
  const c=document.createElement("canvas");c.width=256;c.height=64;const ctx=c.getContext("2d");
  ctx.fillStyle="rgba(255,248,220,0.92)";ctx.beginPath();ctx.roundRect(4,4,248,56,28);ctx.fill();
  ctx.strokeStyle="#5a3a2a";ctx.lineWidth=2;ctx.beginPath();ctx.roundRect(4,4,248,56,28);ctx.stroke();
  ctx.fillStyle="#2b2118";ctx.font="bold 20px 'Bricolage Grotesque',sans-serif";ctx.textAlign="center";ctx.textBaseline="middle";ctx.fillText(text,128,34);
  const tex=new THREE.CanvasTexture(c);
  const spriteMat=new THREE.SpriteMaterial({map:tex,transparent:true,depthTest:false,opacity:0.7});
  const s=new THREE.Sprite(spriteMat);
  s.position.copy(pos); s.scale.set(1.6,0.4,1); room.add(s); return s;
}
function hotspot(mesh,modal,label,labelOff=0.6){
  mesh.castShadow=true;mesh.receiveShadow=true;room.add(mesh);
  const b=new THREE.Box3().setFromObject(mesh),sz=b.getSize(new THREE.Vector3()),cn=b.getCenter(new THREE.Vector3());
  const hb=new THREE.Mesh(new THREE.BoxGeometry(sz.x*1.4,sz.y*1.6,sz.z*1.4),new THREE.MeshBasicMaterial({visible:false}));
  hb.position.copy(cn); room.add(hb); rayObjs.push(hb);
  const lp=cn.clone(); lp.y=b.max.y+labelOff;
  const lb=makeLabel(label,lp);
  hitMap.set(hb,{mesh,modal,lb,iScale:mesh.scale.clone(),iPos:mesh.position.clone()});
}

// ─── DESK (Experience) — shifted nearer to bed ───
const desk=new THREE.Group();
box(2,0.08,1,M.wood,[0,0.82,0],desk);
[[-0.9,0.4,-0.4],[-0.9,0.4,0.4],[0.9,0.4,-0.4],[0.9,0.4,0.4]].forEach(p=>cyl(0.04,0.04,0.8,M.woodDk,p,desk));
box(0.55,0.025,0.38,M.black,[0,0.87,-0.05],desk);
const scr=box(0.55,0.38,0.02,new THREE.MeshStandardMaterial({color:"#1a1a2e",emissive:"#4a90d9",emissiveIntensity:0.4}),[0,1.07,-0.23],desk);
scr.rotation.x=-0.12;
// Bubble tea on desk
const btCup=new THREE.Mesh(new THREE.CylinderGeometry(0.055,0.045,0.2,12),new THREE.MeshStandardMaterial({color:"#f8f0e0",roughness:0.4,transparent:true,opacity:0.85}));
btCup.position.set(0.7,0.92,0.2);desk.add(btCup);
const btTea=new THREE.Mesh(new THREE.CylinderGeometry(0.045,0.035,0.14,12),new THREE.MeshStandardMaterial({color:"#c4885a",roughness:0.6}));
btTea.position.set(0.7,0.91,0.2);desk.add(btTea);
const btStraw=new THREE.Mesh(new THREE.CylinderGeometry(0.01,0.01,0.26,6),new THREE.MeshStandardMaterial({color:"#e85080",roughness:0.5}));
btStraw.position.set(0.7,1.08,0.2);desk.add(btStraw);
const btLid=new THREE.Mesh(new THREE.SphereGeometry(0.056,12,8,0,Math.PI*2,0,Math.PI/2),new THREE.MeshStandardMaterial({color:"#f8f8f8",roughness:0.3,transparent:true,opacity:0.6}));
btLid.position.set(0.7,1.02,0.2);desk.add(btLid);
// Revolving office chair (white)
// Base (5-star)
cyl(0.03,0.03,0.35,M.metal,[0,0.18,0.7],desk); // center pole
[0,1,2,3,4].forEach(i=>{
  const a=i*Math.PI*2/5;
  const lx=Math.cos(a)*0.2,lz=0.7+Math.sin(a)*0.2;
  cyl(0.02,0.02,0.04,M.metal,[lx,0.02,lz],desk); // star arm
  const wh=new THREE.Mesh(new THREE.SphereGeometry(0.03,8,6),M.black);
  wh.position.set(lx,0.02,lz);desk.add(wh); // caster wheel
});
// Seat (rounded)
const cSeat=new THREE.Mesh(new THREE.CylinderGeometry(0.28,0.28,0.06,16),M.cream);
cSeat.position.set(0,0.42,0.7);desk.add(cSeat);
// Backrest (solid rectangle)
const cBack=new THREE.Mesh(new THREE.BoxGeometry(0.52,0.5,0.06),M.cream);
cBack.position.set(0,0.7,0.96);desk.add(cBack);
// Armrests
const armMat2=new THREE.MeshStandardMaterial({color:"#e0e0e0",roughness:0.7});
cyl(0.02,0.02,0.2,armMat2,[-0.24,0.55,0.75],desk);
cyl(0.02,0.02,0.2,armMat2,[0.24,0.55,0.75],desk);
box(0.04,0.02,0.18,armMat2,[-0.24,0.65,0.75],desk);
box(0.04,0.02,0.18,armMat2,[0.24,0.65,0.75],desk);
desk.position.set(0.2,0.12,-2.0);
hotspot(desk,"experience","Experience");

// ─── BOOKSHELF (Education) ───
const shelf=new THREE.Group();
box(0.35,2.4,1.4,M.woodDk,[0,1.2,0],shelf);
[0.2,0.7,1.2,1.7,2.2].forEach(y=>box(0.38,0.04,1.42,M.wood,[0,y,0],shelf));
const bkC=["#8b3a3a","#3a5a8b","#3a8b5a","#c47b4f","#5a3a8b","#d9b94f","#2a6a6a","#8b5a3a"];
[0.35,0.85,1.35,1.85].forEach((sy,r)=>[-0.5,-0.35,-0.2,-0.05,0.1,0.25,0.4,0.55].forEach((z,i)=>{
  if(Math.random()>0.82)return;
  const h=0.18+Math.random()*0.08;
  box(0.12,h,0.07,new THREE.MeshStandardMaterial({color:bkC[(r+i)%8],roughness:0.8}),[0.12,sy+h/2,z],shelf);
}));
shelf.position.set(-3.25,0.12,-0.5);
hotspot(shelf,"education","Education");

// ─── PHOTOS on wall (decorative — hover to see travel photos) ───
// Drop your photos at: public/photos/1.jpg, public/photos/2.jpg, public/photos/3.jpg
const aboutPhotos=new THREE.Group();
const texLoader=new THREE.TextureLoader();
const photoMats=[
  new THREE.MeshStandardMaterial({color:"#e8c8a0",roughness:0.9}),
  new THREE.MeshStandardMaterial({color:"#c8d8e8",roughness:0.9}),
  new THREE.MeshStandardMaterial({color:"#d8e8c8",roughness:0.9}),
];
// Try loading real photos (graceful fallback to colors if missing)
["/photos/1.jpg","/photos/2.jpg","/photos/3.jpg"].forEach((src,i)=>{
  texLoader.load(src,(tex)=>{tex.colorSpace=THREE.SRGBColorSpace;photoMats[i].map=tex;photoMats[i].color.set("#ffffff");photoMats[i].needsUpdate=true;},undefined,()=>{});
});
// Frame 1 (large)
box(0.9,0.7,0.05,M.woodDk,[0,0,0],aboutPhotos);
const ph1=new THREE.Mesh(new THREE.PlaneGeometry(0.76,0.56),photoMats[0]);
ph1.position.set(0,0,0.03);aboutPhotos.add(ph1);
// Frame 2
box(0.5,0.5,0.04,M.woodDk,[0.85,-0.1,0],aboutPhotos);
const ph2=new THREE.Mesh(new THREE.PlaneGeometry(0.38,0.38),photoMats[1]);
ph2.position.set(0.85,-0.1,0.025);aboutPhotos.add(ph2);
// Frame 3
box(0.4,0.4,0.04,M.woodDk,[-0.8,-0.2,0],aboutPhotos);
const ph3=new THREE.Mesh(new THREE.PlaneGeometry(0.3,0.3),photoMats[2]);
ph3.position.set(-0.8,-0.2,0.025);aboutPhotos.add(ph3);
aboutPhotos.position.set(-1.0,2.8,-2.9); room.add(aboutPhotos);


// ─── GEAR (For Fun) — skis, backpack, hiking boots, bicycle ───
const gear=new THREE.Group();
// Skis (curved tips)
const skiMat1=new THREE.MeshStandardMaterial({color:"#c83030",roughness:0.7});
const skiMat2=new THREE.MeshStandardMaterial({color:"#3060c8",roughness:0.7});
const ski1B=box(0.08,1.6,0.025,skiMat1,[0,0.85,0],gear); ski1B.rotation.z=0.06;
const ski1Tip=new THREE.Mesh(new THREE.SphereGeometry(0.045,8,6),skiMat1);
ski1Tip.scale.set(1,0.5,0.5); ski1Tip.position.set(-0.02,1.7,0); gear.add(ski1Tip);
const ski1Tail=new THREE.Mesh(new THREE.SphereGeometry(0.04,8,6),skiMat1);
ski1Tail.scale.set(1,0.4,0.5); ski1Tail.position.set(0.01,0.05,0); gear.add(ski1Tail);
box(0.07,0.04,0.04,M.metal,[0,0.5,0.015],gear);
const ski2B=box(0.08,1.6,0.025,skiMat2,[0.16,0.85,0],gear); ski2B.rotation.z=0.05;
const ski2Tip=new THREE.Mesh(new THREE.SphereGeometry(0.045,8,6),skiMat2);
ski2Tip.scale.set(1,0.5,0.5); ski2Tip.position.set(0.14,1.7,0); gear.add(ski2Tip);
const ski2Tail=new THREE.Mesh(new THREE.SphereGeometry(0.04,8,6),skiMat2);
ski2Tail.scale.set(1,0.4,0.5); ski2Tail.position.set(0.17,0.05,0); gear.add(ski2Tail);
box(0.07,0.04,0.04,M.metal,[0.16,0.5,0.015],gear);
// Ski poles
cyl(0.012,0.012,1.5,M.metal,[-0.12,0.75,0.05],gear).rotation.z=0.04;
cyl(0.012,0.012,1.5,M.metal,[0.3,0.75,0.05],gear).rotation.z=0.03;
// Backpack
box(0.4,0.6,0.28,new THREE.MeshStandardMaterial({color:"#2a5040",roughness:0.85}),[-0.5,0.3,0.15],gear);
box(0.36,0.15,0.06,M.orange,[-0.5,0.15,0.3],gear);
box(0.08,0.35,0.02,M.black,[-0.35,0.4,0.3],gear);
box(0.08,0.35,0.02,M.black,[-0.65,0.4,0.3],gear);
// Hiking boots (shoe-shaped)
const bootMat=new THREE.MeshStandardMaterial({color:"#5a3a2a",roughness:0.85});
const soleMat=new THREE.MeshStandardMaterial({color:"#2a1a0a",roughness:0.95});
const b1=new THREE.Group();
const b1Body=new THREE.Mesh(new THREE.CapsuleGeometry(0.07,0.1,8,8),bootMat);
b1Body.rotation.x=Math.PI/2;b1Body.position.set(0,0.09,0);b1.add(b1Body);
b1.add(new THREE.Mesh(new THREE.BoxGeometry(0.14,0.03,0.24),soleMat)).position.set(0,0.01,0.02);
const b1Ankle=new THREE.Mesh(new THREE.CylinderGeometry(0.06,0.07,0.08,8),bootMat);
b1Ankle.position.set(0,0.14,-0.04);b1.add(b1Ankle);
const b1Toe=new THREE.Mesh(new THREE.SphereGeometry(0.065,8,6),bootMat);
b1Toe.position.set(0,0.06,0.1);b1.add(b1Toe);
b1.position.set(0.5,0,0.25);gear.add(b1);
const b2=b1.clone();b2.position.set(0.68,0,0.18);b2.rotation.y=0.35;gear.add(b2);
// Bicycle
const bikeFrame=new THREE.Group();
const wh1=new THREE.Mesh(new THREE.TorusGeometry(0.28,0.025,8,20),M.black);
wh1.position.set(0,0.3,0);wh1.rotation.y=Math.PI/2;bikeFrame.add(wh1);
const wh2=new THREE.Mesh(new THREE.TorusGeometry(0.28,0.025,8,20),M.black);
wh2.position.set(0,0.3,0.7);wh2.rotation.y=Math.PI/2;bikeFrame.add(wh2);
cyl(0.02,0.02,0.75,M.red,[0,0.4,0.35],bikeFrame).rotation.x=Math.PI/2;
cyl(0.02,0.02,0.4,M.red,[0,0.22,0.15],bikeFrame).rotation.z=0.4;
cyl(0.02,0.02,0.4,M.red,[0,0.22,0.55],bikeFrame).rotation.z=-0.4;
box(0.08,0.03,0.14,M.black,[0,0.52,0.5],bikeFrame);
box(0.3,0.03,0.03,M.metal,[0,0.55,0.05],bikeFrame);
bikeFrame.position.set(-0.5,0.0,-0.4);bikeFrame.rotation.y=0.3;
gear.add(bikeFrame);
gear.position.set(2.5,0.12,-1.8);
hotspot(gear,"fun","For Fun");

// ─── DOG (Skills) — sleeping curled up ───
const dog=new THREE.Group();
// Body (oval)
const dogBody=new THREE.Mesh(new THREE.SphereGeometry(0.28,12,10),new THREE.MeshStandardMaterial({color:"#c49a6a",roughness:0.9}));
dogBody.scale.set(1.4,0.8,1); dogBody.position.set(0,0.2,0); dog.add(dogBody);
// Head
const dogHead=new THREE.Mesh(new THREE.SphereGeometry(0.16,10,8),new THREE.MeshStandardMaterial({color:"#c49a6a",roughness:0.9}));
dogHead.position.set(0.3,0.28,0.15); dog.add(dogHead);
// Snout
const snout=new THREE.Mesh(new THREE.SphereGeometry(0.07,8,6),new THREE.MeshStandardMaterial({color:"#b08050",roughness:0.9}));
snout.position.set(0.42,0.24,0.15); dog.add(snout);
// Nose
const nose=new THREE.Mesh(new THREE.SphereGeometry(0.03,6,6),M.black);
nose.position.set(0.48,0.25,0.15); dog.add(nose);
// Ears (floppy)
const ear1=new THREE.Mesh(new THREE.SphereGeometry(0.08,8,6),new THREE.MeshStandardMaterial({color:"#8a6040",roughness:0.9}));
ear1.scale.set(0.6,1,0.4); ear1.position.set(0.25,0.35,0.28); dog.add(ear1);
const ear2=new THREE.Mesh(new THREE.SphereGeometry(0.08,8,6),new THREE.MeshStandardMaterial({color:"#8a6040",roughness:0.9}));
ear2.scale.set(0.6,1,0.4); ear2.position.set(0.25,0.35,0.02); dog.add(ear2);
// Tail (curled)
const tail=new THREE.Mesh(new THREE.CapsuleGeometry(0.04,0.2,6,8),new THREE.MeshStandardMaterial({color:"#c49a6a",roughness:0.9}));
tail.position.set(-0.35,0.2,-0.1); tail.rotation.z=0.8; tail.rotation.y=-0.5; dog.add(tail);
// Paws tucked
const paw1=new THREE.Mesh(new THREE.SphereGeometry(0.06,8,6),new THREE.MeshStandardMaterial({color:"#e8d0b0",roughness:0.9}));
paw1.position.set(0.2,0.08,0.25); dog.add(paw1);
const paw2=new THREE.Mesh(new THREE.SphereGeometry(0.06,8,6),new THREE.MeshStandardMaterial({color:"#e8d0b0",roughness:0.9}));
paw2.position.set(0.2,0.08,-0.05); dog.add(paw2);
dog.position.set(0.8,0.12,1.5);
hotspot(dog,"contact","Contact");

// ─── Decorations ───
// Bed
const bed=new THREE.Group();
box(1.5,0.35,2.0,M.woodDk,[0,0.18,0],bed);
box(1.4,0.16,1.9,M.cream,[0,0.43,0],bed);
box(1.38,0.06,1.4,M.red,[0,0.53,0.2],bed);
box(0.5,0.14,0.3,M.cream,[-0.3,0.55,-0.75],bed);
box(0.5,0.14,0.3,M.pink,[0.3,0.55,-0.75],bed);
box(1.5,0.9,0.08,M.woodDk,[0,0.7,-1.0],bed);
bed.position.set(-2.0,0.12,-1.5); room.add(bed);

// Lady lying on bed (diagonal, starfish pose) — ABOUT ME hotspot
const lady = new THREE.Group();
const torso = new THREE.Mesh(new THREE.CapsuleGeometry(0.15, 0.55, 8, 12), new THREE.MeshStandardMaterial({color:"#f5d0b0",roughness:0.8}));
torso.rotation.z = Math.PI / 2; torso.position.set(0, 0.18, 0); lady.add(torso);
const head = new THREE.Mesh(new THREE.SphereGeometry(0.14, 12, 10), new THREE.MeshStandardMaterial({color:"#f5d0b0",roughness:0.8}));
head.position.set(-0.48, 0.2, 0); lady.add(head);
const hair = new THREE.Mesh(new THREE.SphereGeometry(0.16, 12, 10), new THREE.MeshStandardMaterial({color:"#2a1a0a",roughness:0.9}));
hair.position.set(-0.52, 0.23, 0); hair.scale.set(1.1, 0.7, 1.3); lady.add(hair);
const dress = new THREE.Mesh(new THREE.CapsuleGeometry(0.16, 0.5, 8, 12), new THREE.MeshStandardMaterial({color:"#a0d4f0",roughness:0.85}));
dress.rotation.z = Math.PI / 2; dress.position.set(0.05, 0.22, 0); lady.add(dress);
// White pants on legs
const leg1 = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.45, 6, 8), new THREE.MeshStandardMaterial({color:"#f0f0f0",roughness:0.8}));
leg1.rotation.z = Math.PI / 2.3; leg1.rotation.y = 0.4; leg1.position.set(0.55, 0.14, 0.25); lady.add(leg1);
const leg2 = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.45, 6, 8), new THREE.MeshStandardMaterial({color:"#f0f0f0",roughness:0.8}));
leg2.rotation.z = Math.PI / 2.3; leg2.rotation.y = -0.35; leg2.position.set(0.55, 0.14, -0.2); lady.add(leg2);
const arm1 = new THREE.Mesh(new THREE.CapsuleGeometry(0.04, 0.38, 6, 8), new THREE.MeshStandardMaterial({color:"#f5d0b0",roughness:0.8}));
arm1.rotation.z = Math.PI / 2.5; arm1.rotation.y = 0.6; arm1.position.set(-0.15, 0.2, 0.35); lady.add(arm1);
const arm2 = new THREE.Mesh(new THREE.CapsuleGeometry(0.04, 0.38, 6, 8), new THREE.MeshStandardMaterial({color:"#f5d0b0",roughness:0.8}));
arm2.rotation.z = Math.PI / 2.5; arm2.rotation.y = -0.7; arm2.position.set(-0.15, 0.2, -0.3); lady.add(arm2);
lady.rotation.y = Math.PI / 5;
lady.position.set(-2.0, 0.62, -1.5);
hotspot(lady,"about","About Me",0.5);
// Rug (rounded, warm sage)
const rugM=new THREE.Mesh(new THREE.CircleGeometry(1.4,32),new THREE.MeshStandardMaterial({color:"#b8c4a8",roughness:0.9}));
rugM.rotation.x=-Math.PI/2;rugM.position.set(0.5,0.13,0.5);room.add(rugM);
const rugI=new THREE.Mesh(new THREE.CircleGeometry(1.0,32),new THREE.MeshStandardMaterial({color:"#c8d4b8",roughness:0.9}));
rugI.rotation.x=-Math.PI/2;rugI.position.set(0.5,0.135,0.5);room.add(rugI);
// Sofa (Skills) — replaces plant
const sofa=new THREE.Group();
// Seat cushion
const sofaSeat=new THREE.Mesh(new THREE.BoxGeometry(1.4,0.3,0.7),new THREE.MeshStandardMaterial({color:"#4a6a8a",roughness:0.85}));
sofaSeat.position.set(0,0.25,0);sofaSeat.castShadow=true;sofa.add(sofaSeat);
// Back cushion
const sofaBack=new THREE.Mesh(new THREE.BoxGeometry(1.4,0.5,0.2),new THREE.MeshStandardMaterial({color:"#4a6a8a",roughness:0.85}));
sofaBack.position.set(0,0.55,-0.25);sofaBack.castShadow=true;sofa.add(sofaBack);
// Armrests
const armMat=new THREE.MeshStandardMaterial({color:"#3a5a7a",roughness:0.85});
const armL=new THREE.Mesh(new THREE.BoxGeometry(0.15,0.4,0.7),armMat);
armL.position.set(-0.75,0.3,0);sofa.add(armL);
const armR=new THREE.Mesh(new THREE.BoxGeometry(0.15,0.4,0.7),armMat);
armR.position.set(0.75,0.3,0);sofa.add(armR);
// Legs
[[-0.6,0.05,-0.28],[-0.6,0.05,0.28],[0.6,0.05,-0.28],[0.6,0.05,0.28]].forEach(p=>{
  cyl(0.04,0.04,0.1,M.woodDk,p,sofa);
});
// Throw pillow
const throwP=new THREE.Mesh(new THREE.BoxGeometry(0.3,0.25,0.12),new THREE.MeshStandardMaterial({color:"#e8a060",roughness:0.85}));
throwP.position.set(-0.4,0.48,0.1);throwP.rotation.z=0.15;sofa.add(throwP);
sofa.position.set(-3.0,0.12,1.5);
sofa.rotation.y=Math.PI/2;
hotspot(sofa,"skills","Skills");
// Clock
const cf=new THREE.Mesh(new THREE.CylinderGeometry(0.3,0.3,0.04,24),M.cream);cf.position.set(-1.8,3.0,-2.85);cf.rotation.x=Math.PI/2;room.add(cf);
const cr2=new THREE.Mesh(new THREE.TorusGeometry(0.3,0.025,8,24),M.woodDk);cr2.position.set(-1.8,3.0,-2.83);cr2.rotation.x=Math.PI/2;room.add(cr2);
box(0.02,0.2,0.01,M.black,[-1.8,3.05,-2.81]);
box(0.015,0.14,0.01,M.black,[-1.78,3.0,-2.81]).rotation.z=Math.PI/3;
// Hanging shelf
box(1.2,0.04,0.25,M.wood,[0,3.2,-2.9]);
cyl(0.04,0.05,0.18,M.green,[-0.3,3.32,-2.85]);
cyl(0.06,0.05,0.08,M.orange,[-0.3,3.26,-2.85]);
box(0.12,0.08,0.16,M.purple,[0.1,3.26,-2.85]);
const gl=new THREE.Mesh(new THREE.SphereGeometry(0.07,12,10),M.blue);gl.position.set(0.4,3.31,-2.85);room.add(gl);
// Circular window on left wall (near bookshelf, above sofa)
const circWinFrame=new THREE.Mesh(new THREE.TorusGeometry(0.45,0.06,12,24),M.woodDk);
circWinFrame.position.set(-3.4,2.5,1.0);circWinFrame.rotation.y=Math.PI/2;room.add(circWinFrame);
const circWinGlass=new THREE.Mesh(new THREE.CircleGeometry(0.44,24),M.glass);
circWinGlass.position.set(-3.38,2.5,1.0);circWinGlass.rotation.y=Math.PI/2;room.add(circWinGlass);
// Cross divider
const cwH=new THREE.Mesh(new THREE.BoxGeometry(0.03,0.88,0.03),M.woodDk);
cwH.position.set(-3.37,2.5,1.0);cwH.rotation.y=Math.PI/2;room.add(cwH);
const cwV=new THREE.Mesh(new THREE.BoxGeometry(0.03,0.03,0.88),M.woodDk);
cwV.position.set(-3.37,2.5,1.0);room.add(cwV);

// ─── Theme toggle ───
let isWinter=false;
function toggleTheme(){
  isWinter=!isWinter;
  const sun=document.querySelector(".sun-svg"),sn=document.querySelector(".snow-svg");
  document.body.classList.toggle("summer-theme",!isWinter);document.body.classList.toggle("winter-theme",isWinter);
  gsap.to(".theme-toggle-button",{scale:1.3,rotation:40,duration:0.2,ease:"back.out(2)",
    onStart:()=>{sun.style.display=isWinter?"none":"block";sn.style.display=isWinter?"block":"none";},
    onComplete:()=>gsap.to(".theme-toggle-button",{scale:1,rotation:0,duration:0.25,ease:"back.out(2)"})});
  const bg=isWinter?"#6b8caf":"#b8d8e8";
  gsap.to(scene.background,{r:new THREE.Color(bg).r,g:new THREE.Color(bg).g,b:new THREE.Color(bg).b,duration:1.2});
  const gc=isWinter?"#e0e8f0":"#6b9b52";
  gsap.to(ground.material.color,{r:new THREE.Color(gc).r,g:new THREE.Color(gc).g,b:new THREE.Color(gc).b,duration:1.2});
  flowers.forEach(f=>{f.visible=!isWinter;});
  snowPts.visible=isWinter;
  gsap.to(sunLight,{intensity:isWinter?0.7:1.4,duration:1});
  gsap.to(ambientLight,{intensity:isWinter?0.65:0.5,duration:1});
  gsap.to(warmLight,{intensity:isWinter?1.6:1.0,duration:1});
}

// ─── Modals ───
const modals={about:document.querySelector(".modal.about"),experience:document.querySelector(".modal.experience"),education:document.querySelector(".modal.education"),skills:document.querySelector(".modal.skills"),fun:document.querySelector(".modal.fun"),contact:document.querySelector(".modal.contact"),photos:document.querySelector(".modal.photos")};
const overlay=document.querySelector(".overlay");
let isModalOpen=true;
function showModal(cls){const m=modals[cls];if(!m)return;m.style.display="block";overlay.style.display="block";isModalOpen=true;controls.enabled=false;gsap.fromTo(overlay,{opacity:0},{opacity:1,duration:0.35});gsap.fromTo(m,{opacity:0,scale:0},{opacity:1,scale:1,duration:0.45,ease:"back.out(2)"});}
function hideModal(m){isModalOpen=false;controls.enabled=true;
  // Reset hover state so raycaster can pick up new hovers
  if(hovered){hover(hovered,false);hovered=null;}
  document.body.style.cursor="default";
  gsap.to(overlay,{opacity:0,duration:0.25});gsap.to(m,{opacity:0,scale:0,duration:0.35,ease:"back.in(2)",onComplete:()=>{m.style.display="none";overlay.style.display="none";}});}
overlay.addEventListener("click",()=>{const m=document.querySelector('.modal[style*="display: block"]');if(m)hideModal(m);});
document.querySelectorAll(".modal-exit-button").forEach(b=>b.addEventListener("click",e=>hideModal(e.target.closest(".modal"))));

// ─── Raycaster ───
const ray=new THREE.Raycaster(),ptr=new THREE.Vector2(-10,-10);
let hovered=null;
function hover(hb,on){const d=hitMap.get(hb);if(!d)return;gsap.killTweensOf(d.mesh.scale);gsap.killTweensOf(d.mesh.position);
  if(on){gsap.to(d.mesh.scale,{x:d.iScale.x*1.08,y:d.iScale.y*1.08,z:d.iScale.z*1.08,duration:0.35,ease:"back.out(2)"});gsap.to(d.mesh.position,{y:d.iPos.y+0.12,duration:0.35,ease:"back.out(2)"});gsap.to(d.lb.material,{opacity:1,duration:0.2});}
  else{gsap.to(d.mesh.scale,{x:d.iScale.x,y:d.iScale.y,z:d.iScale.z,duration:0.25,ease:"back.out(2)"});gsap.to(d.mesh.position,{y:d.iPos.y,duration:0.25,ease:"back.out(2)"});gsap.to(d.lb.material,{opacity:0.7,duration:0.3});}
}
function onClick(){if(isModalOpen)return;if(hovered){const d=hitMap.get(hovered);if(d&&d.modal)showModal(d.modal);}}
window.addEventListener("mousemove",e=>{ptr.x=(e.clientX/sizes.width)*2-1;ptr.y=-(e.clientY/sizes.height)*2+1;});
window.addEventListener("click",onClick);
window.addEventListener("touchstart",e=>{if(isModalOpen)return;ptr.x=(e.touches[0].clientX/sizes.width)*2-1;ptr.y=-(e.touches[0].clientY/sizes.height)*2+1;},{passive:true});
window.addEventListener("touchend",onClick);

// ─── Enter ───
const enterOv=document.querySelector(".enter-overlay"),enterBtn=document.querySelector(".enter-button");
enterBtn.addEventListener("click",()=>{
  initAudio();if(backgroundMusic)backgroundMusic.play().then(()=>{isMuted=false;document.querySelector(".sound-off-svg").style.display="none";document.querySelector(".sound-on-svg").style.display="block";}).catch(()=>{});
  gsap.to(enterOv,{opacity:0,duration:0.7,ease:"power2.inOut",onComplete:()=>{enterOv.style.display="none";isModalOpen=false;controls.enabled=true;
    const ms=Array.from(hitMap.values()).map(d=>d.mesh);ms.forEach(m=>m.scale.set(0,0,0));
    ms.forEach((m,i)=>gsap.to(m.scale,{x:1,y:1,z:1,duration:0.5,delay:0.12*i,ease:"back.out(1.7)"}));
  }});
});

// ─── UI ───
document.querySelector(".theme-toggle-button").addEventListener("click",toggleTheme);
document.querySelector(".mute-toggle-button").addEventListener("click",toggleMute);

// ─── Render ───
const clock=new THREE.Clock();
(function render(){
  const dt=clock.getDelta(); controls.update();
  if(snowPts.visible){const p=snowGeo.attributes.position;for(let i=0;i<snowCount;i++){let y=p.getY(i)-snowSpd[i]*dt,x=p.getX(i)+Math.sin((y+i)*0.4)*0.002;if(y<0){y=12+Math.random()*2;x=(Math.random()-0.5)*35;}p.setX(i,x);p.setY(i,y);}p.needsUpdate=true;}
  if(!isModalOpen){ray.setFromCamera(ptr,camera);const hits=ray.intersectObjects(rayObjs);
    if(hits.length>0){const h=hits[0].object;if(h!==hovered){if(hovered)hover(hovered,false);hovered=h;hover(h,true);document.body.style.cursor="pointer";}}
    else{if(hovered){hover(hovered,false);hovered=null;}document.body.style.cursor="default";}
  }
  renderer.render(scene,camera);requestAnimationFrame(render);
})();
