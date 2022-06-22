import { Layout } from './Layout'

export default {
  title: 'parts/Layout',
  component: Layout
}

export const Primary = () => {
  return (
    <Layout>
      <h1>h1</h1>
      <p>paragraph</p>
      <h2>h2</h2>
      <p>paragraph</p>
      <h3>h3</h3>
      <p>paragraph</p>
    </Layout>
  )
}
export const Secondary = () => {
  return (
    <Layout works>
      <h1>h1</h1>
      <p>paragraph</p>
      <h2>h2</h2>
      <p>paragraph</p>
      <h3>h3</h3>
      <p>paragraph</p>
    </Layout>
  )
}