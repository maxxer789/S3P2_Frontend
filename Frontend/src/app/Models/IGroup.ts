import { Message } from "./IMessage";

export interface Group
{
    id: number;
    groupName: string;
    messages: Message[];
}