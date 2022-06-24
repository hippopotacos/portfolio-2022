import { Main } from './Main'

export default {
  title: 'parts/Main',
  component: Main
}

export const Default = () => {
  return (
    <Main>
      <h1>h1</h1>
      <p>paragraph</p>
      <h2>h2</h2>
      <p>paragraph</p>
      <h3>h3</h3>
      <p>paragraph</p>
    </Main>
  )
}