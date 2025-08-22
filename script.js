const header = document.getElementById("header")
const title = document.getElementById("title")
const excerpt = document.getElementById("excerpt")
const profile_img = document.getElementById("profile_img")
const name = document.getElementById("name")
const date = document.getElementById("date")
const animated_bgs = document.querySelectorAll(".animated-bg")
const animated_bg_texts = document.querySelectorAll(".animated-bg-text")

setTimeout(getData, 2500)

function getData() {
  header.innerHTML = "<img src='https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3' />"
  title.innerHTML = "Frontend Developer"
  excerpt.innerHTML = "Building modern web apps with React, Next.js, Tailwind CSS and solving coding challenges every day."
  profile_img.innerHTML = "<img src='1.jpg'/>"
  name.innerHTML = "Sina Ahmadi"
  date.innerHTML = "Aug 22, 2025"
  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"))
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"))
}
