import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type MESSAGEMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatRoomMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DogMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChatRoomUserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class MESSAGE {
  readonly id: string;
  readonly content: string;
  readonly userID: string;
  readonly chatroomID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<MESSAGE, MESSAGEMetaData>);
  static copyOf(source: MESSAGE, mutator: (draft: MutableModel<MESSAGE, MESSAGEMetaData>) => MutableModel<MESSAGE, MESSAGEMetaData> | void): MESSAGE;
}

export declare class ChatRoom {
  readonly id: string;
  readonly newMessages?: number | null;
  readonly lastMessage?: MESSAGE | null;
  readonly MESSAGES?: (MESSAGE | null)[] | null;
  readonly Users?: (ChatRoomUser | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly chatRoomLastMessageId?: string | null;
  constructor(init: ModelInit<ChatRoom, ChatRoomMetaData>);
  static copyOf(source: ChatRoom, mutator: (draft: MutableModel<ChatRoom, ChatRoomMetaData>) => MutableModel<ChatRoom, ChatRoomMetaData> | void): ChatRoom;
}

export declare class User {
  readonly id: string;
  readonly name: string;
  readonly imageUri?: string | null;
  readonly status?: string | null;
  readonly bio?: string | null;
  readonly age?: string | null;
  readonly distance?: string | null;
  readonly MESSAGES?: (MESSAGE | null)[] | null;
  readonly Dog?: Dog | null;
  readonly chatrooms?: (ChatRoomUser | null)[] | null;
  readonly gender?: string | null;
  readonly match?: boolean | null;
  readonly time?: string | null;
  readonly message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userDogId?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Dog {
  readonly id: string;
  readonly dogName?: string | null;
  readonly breed?: string | null;
  readonly age?: number | null;
  readonly weight?: number | null;
  readonly neutered?: boolean | null;
  readonly hobby?: string | null;
  readonly snack?: string | null;
  readonly bio?: string | null;
  readonly dogImage?: string | null;
  readonly gender?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Dog, DogMetaData>);
  static copyOf(source: Dog, mutator: (draft: MutableModel<Dog, DogMetaData>) => MutableModel<Dog, DogMetaData> | void): Dog;
}

export declare class ChatRoomUser {
  readonly id: string;
  readonly chatRoom: ChatRoom;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ChatRoomUser, ChatRoomUserMetaData>);
  static copyOf(source: ChatRoomUser, mutator: (draft: MutableModel<ChatRoomUser, ChatRoomUserMetaData>) => MutableModel<ChatRoomUser, ChatRoomUserMetaData> | void): ChatRoomUser;
}