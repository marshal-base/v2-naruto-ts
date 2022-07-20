import { defineComponent } from 'vue';

import Topbar from './top-bar/index';
import Main from './main/index';
import NavBar from './nav-bar/index';
import styles from './index.module.scss';

export default defineComponent({
  name: 'layout',
  render(h) {
    return (
      <div class={styles['layout-wrapper']}>
        <Topbar />
        <Main />
        <NavBar />
      </div>
    );
  },
});
