import React from 'react'

export default function Navbar() {
  return (
    // this is scuffed but it works; to account for the extra navbar's padding, the href jumps to the *next* div to compensate
    <div className="bg-gradient-to-b from-primary to-transparent sticky top-0 z-50 w-full flex justify-center space-x-10 py-4 text-4xl font-heading bg-primary text-textDark">
        <a href={"#"} className="hover:text-textHover">about me</a>
        <a href={"#aboutMe"} className="hover:text-textHover">ingredients</a>
        <a href={"#ingredients"} className="hover:text-textHover">recipe</a>
        <a href={"#recipe"} className="hover:text-textHover">gallery</a>
    </div>
  )
}
