import styled from 'styled-components/macro'

export const Wrapper = styled.div`
  display: flex;
 `;

 export const Title = styled.div`
  display: flex;
 `;

 export const Dropper = styled.div`
    display: ${props => props.open ? "flex" : "none"};
  `;
 

