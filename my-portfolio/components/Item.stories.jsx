import { Item } from './Item'

export default {
  title: 'parts/Item',
  component: Item
}

export const Primary = () => {
  return (
    <Item
      term="2020.12 - 2021.04"
      title="会社名"
      position="フロントエンドエンジニア"
    />
  )
}
