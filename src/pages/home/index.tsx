import { defineComponent, toRefs, reactive } from 'vue';
import type { VNode } from 'vue';
import styled from 'vue-styled-components';
import styles from './index.module.scss';

interface IProps {
  uid: string;
}

interface IDetail {
  id: number;
  name: string;
}
interface IScProps {
  name: string;
}

const ScDiv = styled('div', {
  name: String,
})`
  color: ${(props: IScProps) => (props.name ? '#fff' : 'blue')};
`;

export default defineComponent({
  name: 'home',
  props: {
    uid: String,
  },
  setup(props: IProps, { emit }) {
    const detail = reactive<IDetail>({
      id: 123,
      name: 'name',
    });

    const handleClick = () => {
      emit('cb', detail);
      detail.name = '';
    };

    return {
      ...toRefs(detail),
      handleClick,
    };
  },
  render(h): VNode {
    return (
      <ScDiv onClick={this.handleClick} class={styles.test} name={this.name}>
        detail.name: {this.name} <br /> detail.id: {this.id}
      </ScDiv>
    );
  },
});
