import { ref, defineComponent } from 'vue';
import { Tabbar, TabbarItem } from 'vant';

import { ERoutePath } from '@/const';
import { useRouter, useRoute } from '@/hooks/index';


export default defineComponent({
  name: 'tabbar',
  setup() {
    const route = useRoute();
    const router = useRouter();
    const active = ref(route?.path);

    const handleTabbarChange = (path: ERoutePath) => {
      active.value = path;

      router.push(path);
    };

    return {
      active,
      handleTabbarChange,
    };
  },
  render(h) {
    return (
      <Tabbar value={this.active} onChange={this.handleTabbarChange}>
        <TabbarItem name={ERoutePath.HOME} icon='home-o'>
          tsx 私有样式
        </TabbarItem>
        <TabbarItem name={ERoutePath.I18N} icon='setting-o'>
          国际化
        </TabbarItem>
      </Tabbar>
    );
  },
});
