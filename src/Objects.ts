export type Item = {
  id: string,
  type?: ItemType,
  content?: string,
}

export enum ItemType {Todo, Done}

export type Action = {type: ActionType, payload: any}

export enum ActionType {DELETE, ADD, MODIFY }

export type State = Item[]