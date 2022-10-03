import styled from 'styled-components';
   
export const Box = styled.div`
  // padding: 80px 60px;
  background: black;
  // position: absolute;
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    
    flex-direction: column;
    justify-content: center;
    max-width: 80%;
    margin:0px auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  // margin-left: 80px;
  // border:1px solid green;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: white;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;
   
  &:hover {
      color: yellow;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: red;
  margin-bottom: 40px;
  font-weight: bold;
`;