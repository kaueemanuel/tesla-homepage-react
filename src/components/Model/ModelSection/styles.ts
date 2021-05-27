import styled from "styled-components";

interface Props {
  imgPath: string;
}

export const Container = styled.div<Props>`
  background-image: url(${(props) => props.imgPath});
  background-position: center center;
  height: 100vh;

  scroll-snap-align: start;
`;
