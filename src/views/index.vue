<route lang="yaml">
name: home
meta:
  title: 主页
  icon: ant-design:home-twotone
</route>

<script lang="ts" setup>
const inputValue = ref<string>('')
const inputValue1 = ref<string>('')

const radioValue = ref<number>(1)

const datePickerValue1 = ref()
const datePickerValue2 = ref()
const datePickerValue3 = ref()
const datePickerValue4 = ref()
const datePickerValue5 = ref()

const rateValue = ref<number>(2)

const selectValue1 = ref('lucy')
const selectValue2 = ref('lucy')
const selectValue3 = ref('lucy')
const selectOptions1 = ref([
  { value: 'jack', label: 'Jack' },
  { value: 'lucy', label: 'Lucy' },
  { value: 'disabled', label: 'Disabled', disabled: true },
  { value: 'yiminghe', label: 'Yiminghe' },
])
const selectOptions2 = ref([
  { value: 'lucy', label: 'Lucy' },
])
const selectOptions3 = ref([
  { value: 'lucy', label: 'Lucy' },
])

const sliderValue1 = ref<number>(0)
const sliderValue2 = ref<[number, number]>([20, 50])

const switchChecked = ref<boolean>(false)

const columns = [
  { title: 'Name', dataIndex: 'name' },
  { title: 'Salary', dataIndex: 'salary' },
  { title: 'Address', dataIndex: 'address' },
  { title: 'Email', dataIndex: 'email' },
]
const data = reactive([
  {
    key: '1',
    name: 'Jane Doe',
    salary: 23000,
    address: '32 Park Road, London',
    email: 'jane.doe@example.com',
  },
  {
    key: '2',
    name: 'Alisa Ross',
    salary: 25000,
    address: '35 Park Road, London',
    email: 'alisa.ross@example.com',
  },
  {
    key: '3',
    name: 'Kevin Sandra',
    salary: 22000,
    address: '31 Park Road, London',
    email: 'kevin.sandra@example.com',
  },
  {
    key: '4',
    name: 'Ed Hellen',
    salary: 17000,
    address: '42 Park Road, London',
    email: 'ed.hellen@example.com',
  },
  {
    key: '5',
    name: 'William Smith',
    salary: 27000,
    address: '62 Park Road, London',
    email: 'william.smith@example.com',
  },
])
</script>

<template>
  <div>
    <PageHeader>
      <template #title>
        <div class="flex items-center gap-4">
          欢迎使用 Fantastic-admin
        </div>
      </template>
      <template #content>
        <div class="text-sm/6">
          本演示站基于 Fantastic-admin 源码开发，将 Element Plus 替换为 Arco Design Vue ，详细操作步骤请阅读官方文档。
        </div>
      </template>
    </PageHeader>
    <PageMain>
      <ASpace>
        <AButton type="primary">
          Primary
        </AButton>
        <AButton>Secondary</AButton>
        <AButton type="dashed">
          Dashed
        </AButton>
        <AButton type="outline">
          Outline
        </AButton>
        <AButton type="text">
          Text
        </AButton>
      </ASpace>
    </PageMain>
    <PageMain>
      <ASpace>
        <AInput v-model="inputValue" :style="{ width: '320px' }" placeholder="Please enter something" allow-clear />
        <AInput v-model.lazy="inputValue1" :style="{ width: '320px' }" placeholder="Please enter something" allow-clear />
      </ASpace>
    </PageMain>
    <PageMain>
      <ARadioGroup v-model="radioValue">
        <ARadio :value="1">
          A
        </ARadio>
        <ARadio :value="2">
          B
        </ARadio>
        <ARadio :value="3">
          C
        </ARadio>
        <ARadio :value="4">
          D
        </ARadio>
      </ARadioGroup>
    </PageMain>
    <PageMain>
      <ASpace direction="vertical" :size="12">
        <ADatePicker v-model="datePickerValue1" />
        <AWeekPicker v-model="datePickerValue2" />
        <AMonthPicker v-model="datePickerValue3" />
        <AQuarterPicker v-model="datePickerValue4" />
        <AYearPicker v-model="datePickerValue5" />
      </ASpace>
    </PageMain>
    <PageMain>
      <ARate v-model:value="rateValue" />
    </PageMain>
    <PageMain>
      <ASpace>
        <ASelect v-model="selectValue1" style="width: 120px;" :options="selectOptions1" />
        <ASelect v-model="selectValue2" style="width: 120px;" disabled :options="selectOptions2" />
        <ASelect v-model="selectValue3" style="width: 120px;" loading :options="selectOptions3" />
      </ASpace>
    </PageMain>
    <PageMain>
      <ASlider v-model="sliderValue1" />
      <ASlider v-model="sliderValue2" range />
    </PageMain>
    <PageMain>
      <ASwitch v-model="switchChecked" />
    </PageMain>
    <PageMain>
      <ATable :columns="columns" :data="data" />
    </PageMain>
  </div>
</template>
