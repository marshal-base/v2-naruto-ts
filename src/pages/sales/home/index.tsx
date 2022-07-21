import { defineComponent } from 'vue';
import type { VNode } from 'vue';

import styles from './index.module.scss';

export default defineComponent({
  name: 'home',
  render(h): VNode {
    return <div class={styles.test}>Hello {this.$store.state.user.name}</div>;
  },
});
