import { defineComponent, toRefs, reactive } from 'vue'
import type { VNode } from 'vue'

import styles from './index.module.scss'

interface IProps {
  uid: string
}

interface IDetail {
  id: number
  name: string
}

export default defineComponent({
  name: 'home',
  props: {
    uid: String,
  },
  setup(props: IProps, { emit }) {
    const detail = reactive<IDetail>({
      id: 123,
      name: 'name',
    })

    const handleClick = () => {
      emit('cb', detail)
      detail.name = 'name2'
    }

    return {
      ...toRefs(detail),
      handleClick,
    }
  },
  render(h): VNode {
    return (
      <div onClick={this.handleClick} class={styles.test}>
        detail.name: {this.name} <br /> detail.id: {this.id}
      </div>
    )
  },
})
