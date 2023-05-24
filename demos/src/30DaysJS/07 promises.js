function sendMail(email, subject, body) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email && subject && body) {
        resolve({ email, subject, body })
      } else {
        reject(new Error('Falta algún parámetro'))
      }
    }, 2000)
  })
}

sendMail(
  'test@mail.com',
  'Nuevo reto'
)
  .then(result => console.log(result))
