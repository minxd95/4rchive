import { IsShowMenuState } from "@/recoil/atoms";
import { useRecoilState } from "recoil";

export default function useMenu() {
  const [isShowMenu, setIsShowMenu] = useRecoilState(IsShowMenuState);

  function showMenu() {
    setIsShowMenu(true);
  }

  function hideMenu() {
    setIsShowMenu(false);
  }

  function toggleMenu() {
    setIsShowMenu((prev) => !prev);
  }

  return { isShowMenu, showMenu, hideMenu, toggleMenu };
}
