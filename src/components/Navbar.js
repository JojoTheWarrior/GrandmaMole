import React from 'react'

const gradientShadow = {
  boxShadow: '0px 0px 10px 5px rgba(0, 0, 0, 0.5)',
  borderRadius: "8px",
}

export default function Navbar() {
  // Function to handle anchor link clicks
  const handleAnchorClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 150;
      const y = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full flex justify-center space-x-20 py-4 text-4xl font-heading bg-primaryDark text-textDark" style={gradientShadow}>
        <a  className="hover:text-textHover">About Me</a>
        <a onClick={() => handleAnchorClick("ingredients")} className="hover:text-textHover">Ingredients</a>
        <a onClick={() => handleAnchorClick("recipe")} className="hover:text-textHover">Recipe</a>
        <a onClick={() => handleAnchorClick("gallery")} className="hover:text-textHover">Gallery</a>
        
        {/*
        <a className="hover:text-textHover" href="#"
          onClick={() => handleAnchorClick("aboutMe")}>
          <a className="transition-all duration-300 ease-in-out">
            <span className="transition-all duration-300 ease-in-out bg-left-bottom bg-gradient-to-r from-accent1 to-accent2 bg-[length:0%_2px] bg-no-repeat 
                              group-hover:bg-[length:100%_2px]">
              This text gets 'underlined' on hover
            </span>
          </a>
        </a>
        */}
    </div>
  )
}
