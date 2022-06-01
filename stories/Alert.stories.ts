// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AlertComponent } from '../projects/ngx-ds-secret-house/src/lib/components/alert/alert.component';


// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'SecretHouse/Alert',
  component: AlertComponent,
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<AlertComponent> = (args: AlertComponent) => ({
  props: args,
});

export const Information = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Information.args = {
  content: "Content",
  type: "info",
  title: "Titre Info"
};

export const Success = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Success.args = {
  content: " SuccessSu ccessSu ccess SuccessSuc cessSucce ssSuccess SuccessSucce ssSuccess SuccessSuccessSuccessSuccess SuccessSuccess SuccessSuccess  !",
  type: "success",
  title: "Titre Succes"
};

export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Error.args = {
  content: "Error ! ",
  type: "error",
  title: "Titre Erreur"
};