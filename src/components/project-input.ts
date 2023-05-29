import { Component } from './base-components.js';
import { Validatable, validate2 } from '../util/validation.js';
import { AutoBindProject } from '../decorators/autobind.js';
import { projectState } from '../state/project-state.js';

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super('project-input', 'app', true, 'user-input');

    this.titleInputElement = this.element.querySelector(
      '#title'
    )! as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      '#description'
    )! as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      '#people'
    )! as HTMLInputElement;

    this.configure();
  }

  configure() {
    this.element.addEventListener('submit', this.submitHandler);
  }

  renderContent(): void {}

  private clearUserInput() {
    this.titleInputElement.value = '';
    this.descriptionInputElement.value = '';
    this.peopleInputElement.value = '';
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle2 = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    const titleValidatable: Validatable = {
      value: enteredTitle2,
      required: true,
    };

    const descriptionValidatable: Validatable = {
      value: enteredDescription,
      required: true,
      minLength: 5,
    };

    const peopleValidatable: Validatable = {
      value: enteredPeople,
      required: true,
      min: 1,
      max: 5,
    };

    if (
      !validate2(titleValidatable) ||
      !validate2(descriptionValidatable) ||
      !validate2(peopleValidatable)
    ) {
      alert('Invalid input, please try again');
      return;
    } else {
      return [enteredTitle2, enteredDescription, +enteredPeople];
    }
  }

  @AutoBindProject
  private submitHandler(event: Event) {
    event.preventDefault();
    const userinput = this.gatherUserInput();
    if (Array.isArray(userinput)) {
      const [title, desc, people] = userinput;
      projectState.addProject(title, desc, people);
      this.clearUserInput();
    }
  }
}
