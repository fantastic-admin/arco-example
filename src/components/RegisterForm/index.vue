<script setup lang="ts">
import { Message } from '@arco-design/web-vue'

defineOptions({
  name: 'RegisterForm',
})

const props = defineProps<{
  account?: string
}>()

const emits = defineEmits<{
  onLogin: [account: string]
  onRegister: [account: string]
}>()

const loading = ref(false)

const formRef = ref()
const form = ref({
  account: props.account ?? '',
  captcha: '',
  password: '',
  checkPassword: '',
})
const rules = ref({
  account: [
    { required: true, message: '请输入用户名' },
  ],
  captcha: [
    { required: true, message: '请输入验证码' },
  ],
  password: [
    { required: true, message: '请输入密码' },
    { min: 6, max: 18, message: '密码长度为6到18位' },
  ],
  checkPassword: [
    { required: true, message: '请再次输入密码' },
    {
      validator: async (value: string, callback: any) => {
        if (value !== form.value.password) {
          return callback('两次输入的密码不一致')
        }
        else {
          return callback()
        }
      },
    },
  ],
})
function handleRegister() {
  Message.info('注册模块仅提供界面演示，无实际功能，需开发者自行扩展')
  formRef.value?.validate(() => {
    // 这里编写业务代码
    emits('onRegister', form.value.account)
  })
}
</script>

<template>
  <AForm id="register" ref="formRef" :model="form" :rules="rules" class="min-h-500px w-full flex-col-stretch-center p-12">
    <h3 class="mb-8 text-xl color-[var(--el-text-color-primary)] font-bold">
      探索从这里开始! 🚀
    </h3>
    <div>
      <AFormItem field="account" hide-label>
        <AInput v-model="form.account" size="large" placeholder="用户名" tabindex="1">
          <template #prefix>
            <SvgIcon name="ri:user-3-fill" />
          </template>
        </AInput>
      </AFormItem>
      <AFormItem field="captcha" hide-label>
        <AInputGroup style="width: 100%;">
          <AInput v-model="form.captcha" size="large" placeholder="验证码" tabindex="2">
            <template #prefix>
              <SvgIcon name="ic:baseline-verified-user" />
            </template>
          </AInput>
          <AButton size="large">
            发送验证码
          </AButton>
        </AInputGroup>
      </AFormItem>
      <AFormItem field="password" hide-label>
        <AInputPassword v-model="form.password" size="large" placeholder="密码" tabindex="3">
          <template #prefix>
            <SvgIcon name="ri:lock-2-fill" />
          </template>
        </AInputPassword>
      </AFormItem>
      <AFormItem field="checkPassword" hide-label>
        <AInputPassword v-model="form.checkPassword" size="large" placeholder="确认密码" tabindex="4">
          <template #prefix>
            <SvgIcon name="ri:lock-2-fill" />
          </template>
        </AInputPassword>
      </AFormItem>
    </div>
    <AButton :loading="loading" type="primary" size="large" style="width: 100%; margin-top: 20px;" @click.prevent="handleRegister">
      注册
    </AButton>
    <div class="mt-4 flex-center gap-2 text-sm color-[var(--el-text-color-secondary)]">
      已经有帐号?
      <ALink type="link" @click="emits('onLogin', form.account)">
        去登录
      </ALink>
    </div>
  </AForm>
</template>
