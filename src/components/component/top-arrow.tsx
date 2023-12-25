"use client"
import { Link as ScrollLink } from "react-scroll"
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { useState, useEffect } from "react"

export function TopArrow() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeHidden = scrollTop === 0;
      setIsTop(shouldBeHidden);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ScrollLink to="body" smooth={true}>
      <Button
        aria-label="Back to top"
        className={`fixed right-4 bottom-4 w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-lg hover:bg-gray-700 ${isTop ? 'opacity-0 pointer-events-none transition-opacity duration-300' : 'opacity-100 transition-opacity duration-300'}`}
      >
        <FontAwesomeIcon icon={faArrowUp} className="text-white w-4 h-4" />
      </Button>
    </ScrollLink>
  )
}
