<template>
  <div class="login-main test">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="uid"
          name="uid"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="pwd"
          type="password"
          name="pwd"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <van-button round block type="primary" native-type="submit" :loading="loading">
        提交
      </van-button>
    </van-form>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

import { EActions, ERoutePath } from '@/const/sales/enums';
import { ELocationStorage, ESessionStorage } from '@/types/storage';
import { session, local } from '@/utils/storage';
import { useRouter, useRequest, useStore } from '@/hooks';
import fetchLogin from '@/api/login';

// 清除 vuex 长缓存
local(ELocationStorage.L_USER_NAME, null);
const router = useRouter();
const store = useStore();
const { loading, run } = useRequest<null, boolean>(fetchLogin);

const uid = ref('World');
const pwd = ref('Pass');
const onSubmit = async (values: { uid: string; pwd: string }) => {
  const logined = await run();
  if (logined) {
    session(ESessionStorage.S_TOKEN, 'tokened');
    store.dispatch(EActions.update_user_name, values.uid).then(() => {
      router.push(ERoutePath.ROOT);
    });
  }
};
</script>
<style lang="scss" scoped>
.login-main {
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;

  .login-top {
    padding: 80px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
