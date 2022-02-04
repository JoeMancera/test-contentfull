import styled from "styled-components";

export const FormSearch = styled.form`
position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`

export const InputSearch = styled.input`
  padding: 12px;
  border-radius: 20px;
  border-color: #ccc;
`

export const PanelResults = styled.div`
  position: absolute;
  padding: 0;
  border-radius: 20px;
  background-color: #fff;
  top: 45px;
  z-index: 10;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
`

export const ListResults = styled.ul`
  list-style: none;
  padding: 5px 12px;
`
