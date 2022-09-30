// write your code here
// As a user, I can:
// - See all ramen images in the `div` with the id of `ramen-menu`. When the page
//   loads, request the data from the server to get all the ramen objects. Then,
//   display the image for each of the ramen using an `img` tag inside the
//   `#ramen-menu` div.
// - Click on an image from the `#ramen-menu` div and see all the info about that
//   ramen displayed inside the `#ramen-detail` div and where it says
//   `insert comment here` and `insert rating here`.
// - Create a new ramen after submitting the `new-ramen` form. The new ramen should
//   be added to the`#ramen-menu` div. The new ramen does not need to persist; in
//   other words, if you refresh the page, it's okay that the new ramen is no
//   longer on the page.

// id, name, restaurant, image, rating, comment

const ramenMenu = document.getElementById("ramen-menu")
const namer = document.getElementById("name")
const restaurant = document.getElementById("restaurant")
const mainImage = document.getElementById("mainImage")
const comment = document.getElementById("comment-display")
const rating = document.getElementById("rating-display")
const form = document.getElementById("new-ramen")

fetch("http://localhost:3000/ramens")
.then(resp => resp.json())
.then(data => {
    data.forEach(ramen => {
        const img = document.createElement("img")
        img.src = `${ramen.image}`
        img.addEventListener("click", () => {
            namer.innerHTML = `${ramen.name}`
            restaurant.innerHTML = `${ramen.restaurant}`
            mainImage.src = `${ramen.image}`
            comment.innerHTML = `${ramen.comment}`
            rating.innerHTML = `${ramen.rating}`
        })
        ramenMenu.append(img)
    })
})

form.addEventListener("submit", e => {
    e.preventDefault()
    const newName = e.target.name.value
    const newRes = e.target.restaurant.value
    const newImg = e.target.image.value
    const newRating = e.target.rating.value
    const newComment = e.target["new-comment"].value
    console.log(newName, newRes, newImg, newRating, newComment)

    const img = document.createElement("img")
        img.src = `${newImg}`
        img.addEventListener("click", () => {
            namer.innerHTML = `${newName}`
            restaurant.innerHTML = `${newRes}`
            mainImage.src = `${newImg}`
            comment.innerHTML = `${newComment}`
            rating.innerHTML = `${newRating}`
})
        ramenMenu.append(img)
})