function findFamousCats (cats) {
  let maxFollowers = 0
  const catMostFamous = []

  for (let index = 0; index < cats.length; index++) {
    const cat = cats[index]
    const totalFollowers = cat.followers.reduce((acumulador, social) => acumulador + social, 0)

    if (totalFollowers >= maxFollowers) {
      maxFollowers = totalFollowers
    }
  }

  for (let index = 0; index < cats.length; index++) {
    const cat = cats[index]
    const totalFollowers = cat.followers.reduce((acumulador, social) => acumulador + social, 0)

    if (totalFollowers >= maxFollowers) {
      catMostFamous.push(cat.name)
    }
  }

  return catMostFamous
}

findFamousCats([
  {
    name: 'Mimi',
    followers: [320, 120, 70]
  },
  {
    name: 'Milo',
    followers: [400, 300, 100, 200]
  },
  {
    name: 'Gizmo',
    followers: [250, 750]
  }
])
