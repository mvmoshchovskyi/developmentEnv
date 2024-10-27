export enum SortOptionValues {
  Title = 'title',
  Description = 'description'
}

export enum SortOptionNames {
  Title = 'Sort by Name',
  Description = 'Sort by Description'
}

export interface ISortOption {
  value: SortOptionValues;
  name: SortOptionNames;
}
