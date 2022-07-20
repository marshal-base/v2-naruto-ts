import { defineComponent, ref } from 'vue';
import type { VNode } from 'vue';

export default defineComponent({
  name: 'i-18n',
  setup() {
    const name = ref('name');

    return {
      name,
    };
  },
  render(h): VNode {
    return (
      <div style='font-size: 16px;'>
        <div>字符串 {this.$t('message')}</div>
        <div>
          插值{' '}
          {this.$t('currentDate', {
            v: this.$dayjs().format('YYYY-MM-DD HH:mm:ss'),
          })}
        </div>
        <div>
          html 方法 1：<span domProps-innerHTML={this.$t('h')}></span> <br />
          方法 2：
          {h(
            'span',
            {
              domProps: {
                innerHTML: this.$t('h'),
              },
            },
            []
          )}
        </div>
        <div>
          对象形式{' '}
          {this.$t('info.name', {
            v: '123',
            other: 'other',
          })}
        </div>
      </div>
    );
  },
});
