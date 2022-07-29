import styled from "styled-components"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9BCDF2;
`

const ToDoDiv = styled.div`
  width: 400px;
  height: 500px;
  background-color: #fff;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
`

const InnerContainer = styled.div`
  padding: 15px;
`

const Title = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 40px;
  background: #78B0B0;
  margin-bottom: 0;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const P = styled.p`
  font-size: ${({size}) => size};
  color: ${({color}) => color};
  font-weight: ${({fontWeight}) => fontWeight};
`

const Button = styled.button`
  background: #c95b71;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  border: none;
  outline: none;
  height: 30px;
  padding: 0 10px;
  cursor: pointer;
`

const BottomWrapper = styled.div`
  width: 100%;
  bottom: 20px;
  position: absolute;
  text-align: center;
  box-sizing: border-box;
  left: 0;
  padding: 0 10px;
`

const AddButton = styled.button`
  background: #1d69a1;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  border: none;
  outline: none;
  width: 70%;
  font-size: 20px;
  height: 35px;
  cursor: pointer;
  padding: 0 10px;
`

const Input = styled.input`
  border-radius: 10px;
  height: 30px;
  padding-left: 10px;
  outline: none;
  border: none;
  font-size: 20px;
`

const SubmitButton = styled.button`
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  border: none;
  outline: none;
  background: #219d9d;
  font-size: 20px;
  padding: 0 20px;
  height: 30px;
  cursor: pointer;
`

export {Container, ToDoDiv, Title, Wrapper, P, Button, InnerContainer, BottomWrapper, AddButton, Input, SubmitButton}
