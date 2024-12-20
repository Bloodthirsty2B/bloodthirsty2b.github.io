const P = document.getElementById('banner')
const Q = document.getElementById('canvas-main')
const _d = document.getElementById('canvas-eff_ghostimg')
const _e = document.getElementById('canvas-eff_behind')
const _ = document.getElementById('canvas-eff_front')
const _f = document.getElementById('btn-text')
let h = true
let Z
let k
let p
let z
let o
let u
const t = [
  {
    X: 5,
    Y: [808, 0]
  },
  {
    X: 5,
    Y: [808, -300]
  },
  {
    X: 5,
    Y: [808, -600]
  }
]
function G(R, S, T = [0, 0]) {
  R.clearRect(0, 0, 1920, 300)
  const [x, y] = T
  R.drawImage(S, x, y)
}
function L(T = '/images/hkm_0.png') {
  return new Promise((R, S) => {
    const B = new Image()
    B.onabort = function () {
      S()
    }
    B.onerror = function () {
      S()
    }
    B.onload = function () {
      R(B)
    }
    B.src = T
  })
}
if (Q.getContext) {
  Z = Q.getContext('2d')
  k = _d.getContext('2d')
  p = _e.getContext('2d')
  z = _.getContext('2d')
} else {
  Q.classList.add('hide')
  P.classList.remove('hide')
  throw new Error('你的浏览器不支持canvas')
}
const C = document.createElement('canvas')
C.width = Q.width
C.height = Q.height
const D = C.getContext('2d')
D.E = 0
D.F = 0
L('/images/hkm_0.png').then(S => {
  o = S
  M(t, o)
  _f.innerText = 'canvas后续动画加载中…'
}).catch(() => {
  Q.classList.add('hide')
  P.classList.remove('hide')
})
function M (H, S) {
  function N() {
    if (!h) {
      D.E = 0
      D.F = 0
      _b(f, u)
      return
    }
    k.clearRect(0, 0, 1920, 300)
    p.clearRect(0, 0, 1920, 400)
    const { X, Y } = H[D.E]
    if (D.F < X) {
      D.F++
    } else {
      D.F = 0
      Z.clearRect(0, 0, 1920, 300)
      Z.drawImage(C, 0, 0)
      D.E = D.E < (H.length - 1) ? D.E + 1 : 0
      G(D, S, Y)
    }
    requestAnimationFrame(N)
  }
  requestAnimationFrame(N)
}