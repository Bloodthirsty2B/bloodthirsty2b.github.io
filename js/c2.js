const b = document.getElementById('btn-animation-controler')
const m = document.getElementById('canvas-mask')
const g = document.getElementById('canvas-gro')
let i
let j
const d = 230
const f = [
  {
    X: 3
  },
  {
    X: 3
  },
  {
    X: 3
  },
  {
    X: 3
  },
  {
    X: 3
  },
  {
    X: 3
  },
  {
    X: 3
  },
  {
    X: 3
  },
  {
    X: 3
  },
  {
    X: 3
  },
  {
    X: 3
  },
  {
    X: 3
  },
  {
    X: 3
  },
  {
    X: 3
  },
  {
    X: 3
  },
  {
    X: 3
  },
  {
    X: 3
  },
  {
    X: 1
  },
  {
    X: d,
    n: true
  },
  {
    X: 60,
    l: true
  },
  {
    X: 8
  },
  {
    X: 8
  },
  {
    X: 8
  },
  {
    X: 8
  },
  {
    X: 8
  },
  {
    X: 6
  },
  {
    X: 6
  },
  {
    X: 6
  },
  {
    X: 6
  },
  {
    X: 30
  },
  {
    X: 2
  },
  {
    X: 25
  },
  {
    X: 5
  },
  {
    X: 5
  },
  {
    X: 5
  },
  {
    X: 5
  },
  {
    X: 5
  },
  {
    X: 5
  },
]
f.forEach((R, S) => {
  R.Y = [642, -300 * S]
})
function _c(R, S = [0, 0], T = Math.PI) {
  const [x, y] = S
  R.save()
  R.translate(x, y)
  R.rotate(T)
  R.drawImage(i, 0, 0, 1920, 400, 0, 0, 1920, 400)
  R.restore()
}
function w(R, S = 0) {
  R.clearRect(0, 0, 1920, 400)
  const K = 16
  for (let i = 0; i < K; i++) {
    R.save()
    R.translate(960, 150)
    R.rotate(2 * i * Math.PI / K)
    R.translate(-960, -150)
    R.drawImage(j, 0, 0, 900, 239, 900 + S * 34, 40 - S * 5, 400 + S * 30, 200 + S * 10)
    R.restore()
  }
}
const r = document.createElement('canvas')
r.width = Q.width
r.height = 400
const _a = r.getContext('2d')
function _T (g, [x, y]) {
  g.style.transform = `translate(${x}px,${y}px)`
}
function _b (I, _A) {
  function O() {
    if (h) {
      D.E = 0
      D.F = 0
      M(t, o)
      return
    } 
    const { X, Y, n, l } = I[D.E]
    if (D.F < X) {
      p.clearRect(0, 0, 1920, 400)
      if (n) {
        const J = Z.createLinearGradient(0,0,0,400)
        J.addColorStop(0,'transparent')
        J.addColorStop(0.25 - D.F / d * .05,'#611')
        J.addColorStop(0.5,'#a22')
        J.addColorStop(0.75 + D.F / d * .05,'#611')
        J.addColorStop(1,'transparent')
        p.fillStyle = J
        p.fillRect(0, 0, 1920, 400)
        switch (D.F) {
          case 0:
            Z.drawImage(r, 0, -35)
            _c(_a, [200, 500], -Math.PI / 3)
            break
          case 5:
            _T(g,[0,-5])
            break
          case 7:
            _T(g,[0,0])
            break
          case 10:
            _T(g,[0,-2])
            break
          case 20:
            _T(g,[0,0])
            break
          case 60:
            Z.drawImage(r, 0, -35)
            _c(_a, [1600, 700], -6 * Math.PI / 7)
            break
          case 62:
            _T(g,[0,2])
            break
          case 65:
            _T(g,[0,-3])
            break
          case 67:
            _T(g,[0,1])
            break
          case 70:
            _T(g,[0,0])
            break
          case 75:
            Z.drawImage(r, 0, -35)
            _c(_a, [1000, -700], 5 * Math.PI / 15)
            _T(g,[0,3])
            break
          case 77:
            _T(g,[0,-2])
            break
          case 80:
            _T(g,[0,2])
            break
          case 82:
            _T(g,[0,0])
            break
          case 92:
            Z.drawImage(r, 0, -35)
            _c(_a, [100, 400], -Math.PI / 6)
            _T(g,[0,3])
            break
          case 95:
            _T(g,[0,-2])
            break
          case 97:
            _T(g,[0,2])
            break
          case 100:
            _T(g,[0,0])
            break
          case 105:
            Z.drawImage(r, 0, -35)
            _c(_a, [2000, 500], -17 * Math.PI / 18)
            _T(g,[0,3])
            break
          case 107:
            _T(g,[0,-2])
            break
          case 110:
            _T(g,[0,2])
            break
          case 112:
            _T(g,[0,0])
            break
          case 120:
            Z.drawImage(r, 0, -35)
            _c(_a, [0, 400], - 1 * Math.PI / 9)
            _T(g,[0,3])
            break
          case 122:
            _T(g,[0,-2])
            break
          case 125:
            _T(g,[0,2])
            break
          case 127:
            _T(g,[0,0])
            break
          case 132:
            Z.drawImage(r, 0, -35)
            _c(_a, [1400, 600], -5 * Math.PI / 9)
            _T(g,[0,3])
            break
          case 135:
            _T(g,[0,-2])
            break
          case 137:
            _T(g,[0,2])
            break
          case 140:
            _T(g,[0,0])
            break
          case 142:
            Z.drawImage(r, 0, -35)
            _c(_a, [1100, -300], 4 * Math.PI / 9)
            _T(g,[0,3])
            break
          case 145:
            _T(g,[0,-2])
            break
          case 147:
            _T(g,[0,2])
            break
          case 150:
            _T(g,[0,0])
            break
          case 152:
            Z.drawImage(r, 0, -35)
            _c(_a, [2000, 250], 17 * Math.PI / 18)
            _T(g,[0,3])
            break
          case 155:
            _T(g,[0,-2])
            break
          case 157:
            _T(g,[0,2])
            break
          case 160:
            _T(g,[0,0])
            break
          case 162:
            Z.drawImage(r, 0, -35)
            _c(_a, [700, 700], -Math.PI / 2)
            _T(g,[0,3])
            break
          case 165:
            _T(g,[0,-2])
            break
          case 167:
            _T(g,[0,2])
            break
          case 170:
            _T(g,[0,0])
            break
          case 172:
            Z.drawImage(r, 0, -35)
            _c(_a, [900, -900], 5 * Math.PI / 11)
            _T(g,[0,3])
            break
          case 175:
            _T(g,[0,-2])
            break
          case 177:
            _T(g,[0,2])
            break
          case 180:
            _T(g,[0,0])
            break
          case 182:
            Z.drawImage(r, 0, -35)
            _c(_a, [1000, -300], Math.PI / 4)
            _T(g,[0,3])
            break
          case 185:
            _T(g,[0,-2])
            break
          case 187:
            _T(g,[0,2])
            break
          case 190:
              Z.drawImage(r, 0, -35)
              _c(_a, [600, -900], 6 * Math.PI / 11)
              _T(g,[0,-3])
            break
          case 192:
            _T(g,[0,3])
            break
          case 195:
            Z.drawImage(r, 0, -35)
            _c(_a, [-200, -200], Math.PI / 8)
            _T(g,[0,-3])
            break
          case 197:
            _T(g,[0,3])
            break
          case 200:
            _T(g,[0,-3])
            break
          case 202:
            Z.drawImage(r, 0, -35)
            _c(_a, [-200, -300], Math.PI / 9)
            _T(g,[0,3])
            break
          case 205:
            Z.drawImage(r, 0, -35)
            _c(_a, [400, -600], 5 * Math.PI / 9)
            _T(g,[0,-3])
            break
          case 207:
            _T(g,[0,3])
            break
          case 210:
            Z.drawImage(r, 0, -35)
            _T(g,[0,-3])
            break
          case 212:
            Z.drawImage(r, 0, -35)
            _T(g,[0,3])
            break
          case 215:
            Z.drawImage(r, 0, -35)
            _T(g,[0,-3])
            break
          case 217:
            Z.fillStyle = 'black'
            Z.fillRect(0, 0, 1920, 300)
            _T(g,[0,0])
            _a.clearRect(0, 0, 1920, 400)
            w(_a)
            break
        }
      } else if (l) {
        switch (D.F) {
          case 0:
            z.drawImage(r, 0, 0)
            w(_a, 2)
            _T(g,[4,0])
            break
          case 2:
            z.drawImage(r, 0, 0)
            w(_a, 5)
            _T(g,[-3,0])
            break
          case 5:
            z.clearRect(0, 0, 1920, 400)
            z.drawImage(r, 0, 0)
            w(_a, 7)
            _T(g,[3,0])
            break
          case 7:
            z.drawImage(r, 0, 0)
            w(_a, 10)
            break
          case 10:
            z.clearRect(0, 0, 1920, 400)
            z.drawImage(r, 0, 0)
            _T(g,[-2,0])
            w(_a, 12)
            break
          case 12:
            z.drawImage(r, 0, 0)
            w(_a, 15)
            break
          case 15:
            z.clearRect(0, 0, 1920, 400)
            z.drawImage(r, 0, 0)
            _T(g,[1,0])
            w(_a, 17)
            break
          case 17:
            z.drawImage(r, 0, 0)
            w(_a, 20)
            break
          case 20:
            z.clearRect(0, 0, 1920, 400)
            z.drawImage(r, 0, 0)
            _T(g,[-1,0])
            w(_a, 22)
            break
          case 22:
            z.drawImage(r, 0, 0)
            w(_a, 25)
            break
          case 25:
            z.clearRect(0, 0, 1920, 400)
            z.drawImage(r, 0, 0)
            _T(g,[1,0])
            w(_a, 27)
            break
          case 27:
            z.drawImage(r, 0, 0)
            w(_a, 30)
            break
          case 30:
            z.clearRect(0, 0, 1920, 400)
            z.drawImage(r, 0, 0)
            _T(g,[0,0])
            break
        }
      }
      D.F++
    } else {
      D.F = 0
      k.clearRect(0, 0, 1920, 300)
      if (D.E <= 17) {
        k.drawImage(Q, 0, 0)
      }
      Z.clearRect(0, 0, 1920, 300)
      Z.drawImage(C, 0, 0)
      D.E = D.E < (I.length - 1) ? D.E + 1 : I.length - 4
      G(D, _A, Y)
    }
    requestAnimationFrame(O)
  }
  requestAnimationFrame(O)
  _a.clearRect(0, 0, 1920, 400)
  _a.drawImage(i, 0, 0, 1920, 400, 0, 0, 1920, 400)
  _a.drawImage(i, 0, 400, 1920, 400, 0, 0, 1920, 400)
}
window.onload = function () {
  Promise.all([L('/images/hkm_1.png'), L('/images/eff_line.png'), L('/images/eff_burst.png')]).then(([q, e, v]) => {
    u = q
    i = e
    j = v
    _f.innerText = '点击以播放动画'
    b.onclick = function () {
      if (!h) {
        m.classList.add('bgcChange')
        _f.innerText = '重置中…'
        setTimeout(() => {
          h = !h
        }, 400);
        setTimeout(() => {
          _f.innerText = '点击以播放动画'
          m.classList.remove('bgcChange')
        }, 1000);
      } else {
        h = !h
        _f.innerText = '点击以重置动画'
      }
    }
  }).catch(() => {
    _f.innerText = '加载后续图片失败'
    console.log('加载后续图片失败')
  })
}