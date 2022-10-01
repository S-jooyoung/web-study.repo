{
  type Video = {
    title: string;
    author: string;
    descrition: string;
  };

  // [1,2].map(item => item * item); // [1, 4]
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P]; // for...in
  };

  type VideoOptional = Optional<Video>;

  const videoOp: VideoOptional = {
    title: "hi",
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: ReadOnly<Animal> = {
    name: "dog",
    age: 12,
  };
  //   type VideoOptional = {
  //     title?: string;
  //     author?: string;
  //     descrition?: string;
  //   };

  //   type VideoReadOnly = {
  //     readonly title: string;
  //     readonly author: string;
  //     readonly descrition: string;
  //   };

  type Nullable<T> = { [P in keyof T]: T[P] | null };

  const obj2: Nullable<Video> = {
    title: null,
    author: null,
    descrition: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
}
