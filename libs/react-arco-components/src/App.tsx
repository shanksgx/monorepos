import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { ScrollBar } from './libs/main'
import { Typography } from '@arco-design/web-react'
import styled from "styled-components"
import './App.less'

const { Title } = Typography

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ScrollBar
        autoHide={true}
        barStyle={barStyle}
        content={
          <ScrollBox>
            <Title type="primary" underline heading={5}>This is ScrollBar components...</Title>
          </ScrollBox>
        }
      />
    </div>
  )
}

const ScrollBox = styled.span`
	width: 510px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center
`;
const barStyle = {
  width: 500,
  height: 300,
  border: "1px solid #181818"
}

export default App
