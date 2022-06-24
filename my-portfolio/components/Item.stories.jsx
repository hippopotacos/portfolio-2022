import { Item } from './Item'

export default {
  title: 'parts/Item',
  component: Item
}

const Template = args => <Item {...args} />

export const Primary = Template.bind({})
Primary.args = {
  term: "16Personality",
  title: "仲介者",
  href: "/"
}

export const Secondary = Template.bind({})
Secondary.args = {
  term: "Language",
  emphasis: true,
  children: <p>HTML/CSS/JavaScript</p>
}

export const Tertiary = Template.bind({})
Tertiary.args = {
  term: "2018.04 - 2022.05",
  title: "会社名",
  position: "フロントエンド",
  href: "/",
  status: "（退職済み）",
  children: <p>ここに詳細な文章が入る</p>
}
