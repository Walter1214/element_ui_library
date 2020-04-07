import { action } from '@storybook/addon-actions'
import Input from '../components/Input.vue'
export default {
  title: 'Input',
  component: Input,
  includeStories: ['Default']
}

export const Default = () => ({
  methods: {
    action() {
      action('clicked')
    }
  },
  render() {
    return (
      <div style="width:500px;">
        <Input onClick={action} />
      </div>
    )
  }
})
