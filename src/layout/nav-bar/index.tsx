import { ref, defineComponent } from 'vue'
import { useRouter, useRoute } from '@/hooks/index'

import { Tabbar, TabbarItem } from 'vant'

export default defineComponent({
  name: 'tabbar',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const active = ref(route?.path)

    const handleTabbarChange = (path: string) => {
      active.value = path

      router.push(path)
    }

    return {
      active,
      handleTabbarChange,
    }
  },
  render(h) {
    return (
      <Tabbar value={this.active} onChange={this.handleTabbarChange}>
        <TabbarItem name='/home' icon='home-o'>
          tsx 私有样式
        </TabbarItem>
        <TabbarItem name='/i-18n' icon='setting-o'>
          国际化
        </TabbarItem>
      </Tabbar>
    )
  },
})
