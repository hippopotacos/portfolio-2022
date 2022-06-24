import { Footer } from './Footer'

export default {
  title: 'parts/Footer',
  component: Footer
}

const Template = args => <Footer {...args} />

export const Primary = Template.bind({})
Primary.args = {
  playlist: false
}

export const Secondary = Template.bind({})
Secondary.args = {
  playlist: true
}