export class Page<T> {
   public content: T[] = [];
   public first = true;
   public last = true;
   public number = 0;
   public numberOfElements = 0;
   public size = 0;
   public totalElements = 0;
   public totalPages = 0;

   constructor() {}
}
