

const firstname = document.getElementById("firstname")
const lastname = document.getElementById("lastname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const button = document.getElementById("submit")

console.log(button)

let url = 'https://jsonplaceholder.typicode.com/posts'

// const getPosts = async () => {
//   const response = await fetch(url)
//   const json = await response.json()
//   console.log(json)
// }

const sendPost = async (data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data)
  })

  const json = await response.json()

  console.log(response)
  console.log(json)

  if (response.ok) {
    alert('Post Successful')
  } else {
    alert('Error uploading post')
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault()



  const name = {
    titles: 'Post from ${lastname.value} ',
    bodys: 'Hi $(firstname.value) Welcome $(email;value) Is the Email correct?',
    userId: Math.random(10000)
  }

  sendPost()
  firstname.value = ""
  lastname.value = ""
  email.value = ""
  password.value = ""
name
  console.log(name)

})







