namespace App {
  //PROJECT TYPE
  export enum ProjectStatus {
    Active,
    Finished,
  }

  //Project
  export class Project {
    constructor(
      public id: string,
      public title: string,
      public description: string,
      public people: number,
      public status: ProjectStatus
    ) {}
  }
}
