import { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const ScrollToTop = ({ children }: Props) => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return children;
};

export default ScrollToTop;
