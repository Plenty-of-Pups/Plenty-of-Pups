// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MESSAGE, ChatRoom, User, Dog, ChatRoomUser } = initSchema(schema);

export {
  MESSAGE,
  ChatRoom,
  User,
  Dog,
  ChatRoomUser
};