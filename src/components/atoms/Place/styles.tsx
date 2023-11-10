import styled from 'styled-components';

export const TextBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%; 
  height: 65px; 
  border: 1px solid lightgray; 
  box-shadow: 2px 2px 5px lightgray; 
  background-color: white; 
`;

export const Text = styled.p`
  flex: 1;
  padding: 12px; 
  margin: 0; 
  font-size: 20px; 
  text-align: start;
`;

export const Icon = styled.img`
  width: 18px; 
  height: 20px;
  margin: 0 10px; 
`;