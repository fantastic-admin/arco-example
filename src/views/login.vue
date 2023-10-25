<route lang="yaml">
meta:
  title: 登录
  constant: true
  layout: false
</route>

<script setup lang="ts">
import { Message } from '@arco-design/web-vue'
import Copyright from '@/layouts/components/Copyright/index.vue'
import useUserStore from '@/store/modules/user'

defineOptions({
  name: 'Login',
})

const route = useRoute()
const router = useRouter()

const userStore = useUserStore()

const banner = new URL('../assets/images/login-banner.png', import.meta.url).href
const title = import.meta.env.VITE_APP_TITLE

// 表单类型，login 登录，register 注册，reset 重置密码
const formType = ref('login')
const loading = ref(false)
const redirect = ref(route.query.redirect?.toString() ?? '/')

// 登录
const loginFormRef = ref()
const loginForm = ref({
  account: localStorage.login_account || '',
  password: '',
  remember: !!localStorage.login_account,
})
const loginRules = ref({
  account: [
    { required: true, message: '请输入用户名' },
  ],
  password: [
    { required: true, message: '请输入密码' },
    { min: 6, max: 18, message: '密码长度为6到18位' },
  ],
})
function handleLogin() {
  loginFormRef.value && loginFormRef.value.validate((errors: any) => {
    if (!errors) {
      loading.value = true
      userStore.login(loginForm.value).then(() => {
        loading.value = false
        if (loginForm.value.remember) {
          localStorage.setItem('login_account', loginForm.value.account)
        }
        else {
          localStorage.removeItem('login_account')
        }
        router.push(redirect.value)
      }).catch(() => {
        loading.value = false
      })
    }
  })
}

// 注册
const registerFormRef = ref()
const registerForm = ref({
  account: '',
  captcha: '',
  password: '',
  checkPassword: '',
})
const registerRules = ref({
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
        if (value !== registerForm.value.password) {
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
  registerFormRef.value && registerFormRef.value.validate(() => {
    // 这里编写业务代码
  })
}

// 重置密码
const resetFormRef = ref()
const resetForm = ref({
  account: localStorage.login_account,
  captcha: '',
  newPassword: '',
})
const resetRules = ref({
  account: [
    { required: true, message: '请输入用户名' },
  ],
  captcha: [
    { required: true, message: '请输入验证码' },
  ],
  newPassword: [
    { required: true, message: '请输入新密码' },
    { min: 6, max: 18, message: '密码长度为6到18位' },
  ],
})
function handleReset() {
  Message.info('重置密码仅提供界面演示，无实际功能，需开发者自行扩展')
  resetFormRef.value && resetFormRef.value.validate(() => {
    // 这里编写业务代码
  })
}

function testAccount(account: string) {
  loginForm.value.account = account
  loginForm.value.password = '123456'
  handleLogin()
}
</script>

<template>
  <div>
    <div class="bg-banner" />
    <div id="login-box" class="shadow">
      <div class="login-banner">
        <div class="logo shadow" />
        <img :src="banner" class="banner">
      </div>
      <AForm v-show="formType === 'login'" id="login" ref="loginFormRef" :model="loginForm" :rules="loginRules" class="login-form">
        <div class="title-container">
          <h3 class="title">
            欢迎来到 {{ title }} ! 👋🏻
          </h3>
        </div>
        <div>
          <AFormItem field="account" hide-label>
            <AInput v-model="loginForm.account" size="large" placeholder="用户名" tabindex="1">
              <template #prefix>
                <SvgIcon name="ri:user-3-fill" />
              </template>
            </AInput>
          </AFormItem>
          <AFormItem field="password" hide-label>
            <AInputPassword v-model="loginForm.password" size="large" placeholder="密码" tabindex="2" @keyup.enter="handleLogin">
              <template #prefix>
                <SvgIcon name="ri:lock-2-fill" />
              </template>
            </AInputPassword>
          </AFormItem>
        </div>
        <div class="flex-bar">
          <ACheckbox v-model:checked="loginForm.remember">
            记住我
          </ACheckbox>
          <ALink type="link" @click="formType = 'reset'">
            忘记密码了?
          </ALink>
        </div>
        <AButton :loading="loading" type="primary" size="large" style="width: 100%;" @click.prevent="handleLogin">
          登录
        </AButton>
        <div class="sub-link">
          <span class="text">还没有帐号?</span>
          <ALink type="link" @click="formType = 'register'">
            创建新帐号
          </ALink>
        </div>
        <div style="margin-top: 20px; margin-bottom: -20px; text-align: center;">
          <ADivider>演示账号一键登录</ADivider>
          <ASpace>
            <AButton type="primary" size="small" @click="testAccount('admin')">
              admin
            </AButton>
            <AButton size="small" @click="testAccount('test')">
              test
            </AButton>
          </ASpace>
        </div>
      </AForm>
      <AForm v-show="formType === 'register'" id="register" ref="registerFormRef" :model="registerForm" :rules="registerRules" class="login-form" auto-complete="on">
        <div class="title-container">
          <h3 class="title">
            探索从这里开始! 🚀
          </h3>
        </div>
        <div>
          <AFormItem field="account" hide-label>
            <AInput v-model="registerForm.account" size="large" placeholder="用户名" tabindex="1">
              <template #prefix>
                <SvgIcon name="ri:user-3-fill" />
              </template>
            </AInput>
          </AFormItem>
          <AFormItem field="captcha" hide-label>
            <AInputGroup style="width: 100%;">
              <AInput v-model="registerForm.captcha" size="large" placeholder="验证码" tabindex="2">
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
            <AInputPassword v-model="registerForm.password" size="large" placeholder="密码" tabindex="3">
              <template #prefix>
                <SvgIcon name="ri:lock-2-fill" />
              </template>
            </AInputPassword>
          </AFormItem>
          <AFormItem field="checkPassword" hide-label>
            <AInputPassword v-model="registerForm.checkPassword" size="large" placeholder="确认密码" tabindex="4">
              <template #prefix>
                <SvgIcon name="ri:lock-2-fill" />
              </template>
            </AInputPassword>
          </AFormItem>
        </div>
        <AButton :loading="loading" type="primary" size="large" style="width: 100%; margin-top: 20px;" @click.prevent="handleRegister">
          注册
        </AButton>
        <div class="sub-link">
          <span class="text">已经有帐号?</span>
          <ALink type="link" @click="formType = 'login'">
            去登录
          </ALink>
        </div>
      </AForm>
      <AForm v-show="formType === 'reset'" id="reset" ref="resetFormRef" :model="resetForm" :rules="resetRules" class="login-form">
        <div class="title-container">
          <h3 class="title">
            忘记密码了? 🔒
          </h3>
        </div>
        <div>
          <AFormItem field="account" hide-label>
            <AInput v-model="resetForm.account" size="large" placeholder="用户名" tabindex="1">
              <template #prefix>
                <SvgIcon name="ri:user-3-fill" />
              </template>
            </AInput>
          </AFormItem>
          <AFormItem field="captcha" hide-label>
            <AInputGroup style="width: 100%;">
              <AInput v-model="resetForm.captcha" size="large" placeholder="验证码" tabindex="2">
                <template #prefix>
                  <SvgIcon name="ic:baseline-verified-user" />
                </template>
              </AInput>
              <AButton size="large">
                发送验证码
              </AButton>
            </AInputGroup>
          </AFormItem>
          <AFormItem field="newPassword" hide-label>
            <AInputPassword v-model="resetForm.newPassword" size="large" placeholder="新密码" tabindex="3">
              <template #prefix>
                <SvgIcon name="ri:lock-2-fill" />
              </template>
            </AInputPassword>
          </AFormItem>
        </div>
        <AButton :loading="loading" type="primary" size="large" style="width: 100%; margin-top: 20px;" @click.prevent="handleReset">
          确认
        </AButton>
        <div class="sub-link">
          <ALink type="link" @click="formType = 'login'">
            去登录
          </ALink>
        </div>
      </AForm>
    </div>
    <Copyright />
  </div>
</template>

<style lang="scss" scoped>
[data-mode="mobile"] {
  #login-box {
    position: relative;
    width: 100%;
    height: 100%;
    top: inherit;
    left: inherit;
    transform: translateX(0) translateY(0);
    flex-direction: column;
    justify-content: start;
    border-radius: 0;
    box-shadow: none;

    .login-banner {
      width: 100%;
      padding: 20px 0;

      .banner {
        position: relative;
        right: inherit;
        width: 100%;
        max-width: 375px;
        margin: 0 auto;
        display: inherit;
        top: inherit;
        transform: translateY(0);
      }
    }

    .login-form {
      width: 100%;
      min-height: auto;
      padding: 30px;
    }
  }

  .copyright {
    position: relative;
  }
}

:deep(input[type="password"]::-ms-reveal) {
  display: none;
}

.bg-banner {
  position: fixed;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at center, var(--g-container-bg), var(--g-bg));
}

#login-box {
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background-color: var(--g-container-bg);
  border-radius: 10px;
  overflow: hidden;

  .login-banner {
    position: relative;
    width: 450px;
    background-color: var(--g-bg);
    overflow: hidden;

    .banner {
      width: 100%;

      @include position-center(y);
    }

    .logo {
      position: absolute;
      top: 20px;
      left: 20px;
      width: 30px;
      height: 30px;
      border-radius: 4px;
      background: url("../assets/images/logo.png") no-repeat;
      background-size: contain;
    }
  }

  .login-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 500px;
    width: 500px;
    padding: 50px;
    overflow: hidden;

    .title-container {
      position: relative;

      .title {
        font-size: 1.3em;
        margin: 0 auto 30px;
        font-weight: bold;
      }
    }
  }

  :deep(.ant-divider-inner-text) {
    background-color: var(--g-container-bg);
  }

  .flex-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .sub-link {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-size: 14px;
  }
}

.copyright {
  position: absolute;
  bottom: 0;
  padding: 20px;
  margin: 0;
  width: 100%;
}
</style>
