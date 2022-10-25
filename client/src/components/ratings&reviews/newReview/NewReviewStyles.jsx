import styled from 'styled-components';

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(200, 200, 200, 0.9);
z-index: 1000;
`;

export const ModalForm = styled.div`
position: fixed;
top: 50%;
left: 50%;
height: 900px;
width: 800px;
transform: translate(-50%, -50%);
border-radius: 8px;
background-color: #FFFFFF;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
margin: 15px;
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

