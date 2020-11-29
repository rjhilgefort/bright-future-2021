import React from 'react'
// import tw, { styled } from 'twin.macro'
import Layout from '../components/Layout'
import HeaderImg from '../assets/header-clouds-1.jpg'

// const Button = styled.button`
//   ${tw`bg-blue-500 hover:bg-blue-800 text-white p-2 rounded`}
// `

// // or use the shorthand version
// const Button2 = tw.button`
//   bg-blue-500 hover:bg-blue-800 text-white p-2 rounded
// `;

const App = () => (
  <Layout>
    <div>
      <img src={HeaderImg} alt="A dog smiling in a party hat" />
    </div>
  </Layout>
)

export default App
