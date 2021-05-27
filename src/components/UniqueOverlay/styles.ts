import { motion } from "framer-motion";
import styled from "styled-components";
import { BurgerSVG } from "./IconSVG";

export const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 20px;
  min-height: 52px;
`;
export const Logo = styled.div`
  color: #393c41;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
`;
export const Burger = styled(BurgerSVG)`
  width: 30px;
  height: 30px;
  cursor: pointer;

  padding-right: 5px;
`;
export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      list-style: none;

      font-size: 16px;
      font-weight: 600;

      & + li {
        margin: 10px 0 0;
      }

      a {
        text-decoration: none;
        color: #222427;

        &:hover {
          color: #000;
        }
      }
    }
  }

  margin-bottom: 30px;

  @media (min-width: 600px) {
    margin-bottom: 38px;
    ul {
      flex-direction: row;

      li + li {
        margin: 0 0 0 30px;
      }
    }
  }
`;
