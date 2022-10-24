import styled from 'styled-components';

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(128, 128, 128, 0.7);
z-index: 1000;
`;

export const ModalForm = styled.div`
position: fixed;
top: 50%;
left: 50%;
width: 800px;
transform: translate(-50%, -50%);
background-color: #f4f0db;
color: black;
padding: 50px;
overflow-y: auto;
`;

export const Missing = styled.span`
color: red;
margin-left: 7px;
`;

export const Close = styled.button`
position: absolute;
right: 0;
top: 0;
border-radius: 5px;
border: 1px solid black;
cursor: pointer;
color: white;
text-shadow: 1px 0 black, 0 1px black, -1px 0 black, 0 -1px black;
`

export const Remain = styled.p`
margin-top: 0px;
font-style: italic;
`

export const Input = styled.input`
margin-left: 8px;
`

export const Submit = styled.input`
background: #f0f0f0;
padding: 5px;
max-width: fit-content;
font-weight: bold;
cursor: pointer;
margin-top: 8px;
border-radius: 5px;
border: 1px solid black;
cursor: pointer;
`;

