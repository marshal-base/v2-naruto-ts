import { defineComponent } from 'vue';
import styles from './index.module.scss';

export default defineComponent({
  name: 'view-main',
  render(h) {
    return (
      <div class={styles['view-main']}>
        <router-view></router-view>
      </div>
    );
  },
});
