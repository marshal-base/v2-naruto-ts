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
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit" :loading="loading"> 提交 </van-button>
      </div>
    </van-form>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { ESessionStorage } from '@/types/storage'
import { session } from '@/utils/storage'
import { useRouter, useRequest } from '@/hooks/index'
import fetchLogin from '@/api/login'

const router = useRouter()
const { loading, run } = useRequest<null, boolean>(fetchLogin)

const uid = ref('admin')
const pwd = ref('Pass')
const onSubmit = async (values: { uid: string; pwd: string }) => {
  console.log('submit', values)
  const logined = await run()
  if (logined) {
    session(ESessionStorage.S_TOKEN, 'tokened')
    session(ESessionStorage.S_USER_NAME, uid.value)
    router.push('/')
  }
}
</script>
<style lang="scss" scoped>
.login-main {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .login-top {
    padding: 80px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
