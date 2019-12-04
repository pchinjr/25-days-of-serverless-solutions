let arc = require('@architect/functions')

function route(req, res) {
  const sides = [' נ (Nun)',' ג (Gimmel)',' ה (Hay)',' ש (Shin)']
  let result = sides[Math.floor(Math.random()*4)]
  res({
    json: {
      'data': result,
      'image': 'https://i.ytimg.com/vi/kqbF2fjSiqE/hqdefault.jpg',
      'video': 'https://www.youtube.com/watch?v=kqbF2fjSiqE'
    }
  })
}

exports.handler = arc.http(route)