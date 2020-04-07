import Vue from 'vue'
// import Element from 'element-ui'
import {
  Button,
  Checkbox,
  RadioButton,
  RadioGroup,
  DatePicker,
  Select,
  Option,
  Icon
} from 'element-ui'
import ElementLocale from 'element-ui/lib/locale'
export default ({ app }) => {
  // Vue.use(Element, { i18n: (key, value) => app.i18n.t(key, value) })
  Vue.use(Button)
  Vue.use(Checkbox)
  Vue.use(RadioButton)
  Vue.use(RadioGroup)
  Vue.use(DatePicker)
  Vue.use(Select)
  Vue.use(Option)
  Vue.use(Icon)
  ElementLocale.i18n((key, value) => app.i18n.t(key, value))
}
