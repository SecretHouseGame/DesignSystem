// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta} from '@storybook/angular/types-6-0';
import { moduleMetadata, componentWrapperDecorator } from '@storybook/angular';
import { InputSelectComponent } from '../../projects/ngx-ds-secret-house/src/lib/components/form/input-select/input-select.component';
import { FieldContainerComponent } from '../../projects/ngx-ds-secret-house/src/lib/components/form/field-container/field-container.component';

import { CommonModule } from '@angular/common';

// More on default export: https://storybook.js.org/docs/angular/writing-stories/introduction#default-export
export default {
  title: 'Form/Input Select',
  component: InputSelectComponent,
  decorators: [
    moduleMetadata({
      //👇 Imports both components to allow component composition with Storybook
      declarations: [FieldContainerComponent, InputSelectComponent],
      imports: [CommonModule],
    }),
    //👇 Wraps our stories with a decorator
    componentWrapperDecorator(story => `<div>${story}</div>`),
  ],
  // More on argTypes: https://storybook.js.org/docs/angular/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/angular/writing-stories/introduction#using-args
const Template: Story<InputSelectComponent> = (args) => ({
  props: args,
});

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/angular/writing-stories/args
Default.args = {
  label: 'Quelle est ma question ?',
  id: 'form-id',
  help: "Ceci est une indication pour aider l'utilisateur",
  options: [
    {
      id: "option-one",
      value: "option-one",
      name: "Option 1",
    },
    {
      id: "option-two",
      value: "option-two",
      name: "Option 2",
    },
    {
      id: "option-three",
      value: "option-three",
      name: "Option 3",
    },
  ],
	disabled: false,
};

Default.decorators = [
  componentWrapperDecorator((story) =>
	  `<sh-field-container [disabled]="disabled"> ${story} </sh-field-container>`
  ),
];
