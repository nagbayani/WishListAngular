export class WishItem {
  // mark accessibility of this property as public, access outside of class is allowed
  // Typescript, declare type after defining variable name
  // Whenever we pass in wishItem to the constructor, we need to pass in a string and a boolean
  constructor(public wishText: string, public isCompleted: boolean = false) {}
}
 