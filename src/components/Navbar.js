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
    <div className="sticky top-0 z-50 w-full flex justify-center space-x-10 py-4 text-4xl font-heading bg-primaryDark text-textDark" style={gradientShadow}>
        <a onClick={() => handleAnchorClick("aboutMe")} className="hover:text-textHover">about me</a>
        <a onClick={() => handleAnchorClick("ingredients")} className="hover:text-textHover">ingredients</a>
        <a onClick={() => handleAnchorClick("recipe")} className="hover:text-textHover">recipe</a>
        <a onClick={() => handleAnchorClick("gallery")} className="hover:text-textHover">gallery</a>
    </div>
  )
}
