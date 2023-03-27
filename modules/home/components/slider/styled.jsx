import styled from "styled-components";
import BREAKPOINTS_DEVICES from "/theme/global/breakpoints";

export const SlideCont = styled.section`
  max-width: 1280px;
  margin: 1rem auto;
`;

export const Title = styled.h2`
  padding: 40px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-top: 5rem;
  @media ${BREAKPOINTS_DEVICES.tabletL} {
    margin-top: 5rem;
    font-size: 32px;
  }
`;
