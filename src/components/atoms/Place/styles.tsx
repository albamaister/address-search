import styled from 'styled-components';

export const TextBlockWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%; 
  height: 90px; 
  border: 1px solid lightgray; 
  box-shadow: 2px 2px 5px #a59f9f; 
  background-color: white; 
  cursor: pointer;
`;

export const PrimaryText = styled.p`
  flex: 1;
  margin: 0; 
  font-size: 20px; 
  text-align: start;
`;
export const SecondaryText = styled.p`
  flex: 1;
  margin: 0; 
  font-size: 16px; 
  text-align: start;
  color: #9ea2a9;
`;

export const Icon = styled.img`
  width: 18px; 
  height: 20px;
  margin: 0 10px; 
`;

export const AdressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 10px;
`;