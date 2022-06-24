import { Button } from './Button'

export default {
  title: 'parts/Button',
  component: Button,
}

const Template = args => <Button {...args} />

export const Default = Template.bind({});
Default.args = {
  children: "もっとみる",
  href: "/"
}
