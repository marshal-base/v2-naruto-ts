import { defineComponent } from 'vue'
import { VNode } from 'vue/types'
import { NavBar } from 'vant'

interface IProps {
  leftText: string
  title?: string
}

export default defineComponent<IProps>({
  name: 'top-bar',
  props: {
    leftText: {
      type: String,
      default: '返回',
    },
    title: {
      type: String,
      default: '',
    },
  },
  render(h): VNode {
    return (
      <NavBar
        fixed
        title={this.title || this.$route.meta.title}
        left-text='返回'
        left-arrow
        click-left={() => this.$router.go(-1)}
      />
    )
  },
})
