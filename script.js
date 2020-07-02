function coss(height, width, theta) {
  let amplitude = height/2;
  let period = width;
  let dx = Math.PI/width;
  let yVal = [];
  let x = theta;

  for(let i=0;i<width;i++){
    yVal.push((Math.cos(x)*amplitude)+(height/2));
    x += dx;
  }
  return yVal;
}

function lamby(height, width, thick) {
  let out = "";
  let yvals = coss(height, width, Math.PI);
  let halfWidth = width/2;

  for(let y=0;y<height;y++){
    for(let x=0;x<width;x++){
      let posy = yvals[x];
      let negy = height-posy;
      if (Math.abs(posy-y) < thick) {
        out += "<span style=\"color: hsl("+ (Math.abs(posy-y)/thick*260) +",100%, 50%)\">&lambda;</span>";
      } else if ((x < halfWidth) && (Math.abs(negy-y) < thick)) {
        out += "<span style=\"color: hsl("+ (Math.abs(negy-y)/thick*260) +",100%, 50%)\">&lambda;</span>";
      } else {
        out += " ";
      }
    }
    out += "\n";
  }
  return out;
}

function putlam(el, height, width, min, max, period) {
  let amp = max-min;
  const f = function() {
    let percent = (Math.sin(((new Date).getTime()/period)) + 1) / 2;
    let thick = (amp * percent) + min;
    el.innerHTML = lamby(height, width, thick);
  };
  window.setInterval(f, 100);
}

let lamEl = document.querySelector('.lambda');
putlam(lamEl, 45, 45, 0.3, 4.5, 450);


`
00
  0
   0
  0 0
 0   0
0     00

0
 0
0 0

_
  \
   \
   /\
  /  \
 /    \
/      \_
`;
