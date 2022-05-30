import { AvatarConfig, User } from "../models/types"

const avatar1: AvatarConfig = {
    background: '#52888B',
    head: '#F5D1B1',
    torso: '#Eb1C1B'
};
const avatar2: AvatarConfig = {
    background: '#F4A259',
    head: '#F8FFE5',
    torso: '#0C6DFF'
};

export const testUsers: User.Type[] = [
    {
        'id': 'user-1',
        'username': 'puffhead',
        'password': 'max',
        'avatar': avatar1
    },
    {
        'id': 'user-2',
        'username': 'subtlephan',
        'password': 'scott',
        'avatar': avatar2
    },
    {
        'id': 'user-3',
        'username': 'SimpleGhost',
        'password': 'brian',
        'avatar': avatar1
    },
    {
        'id': 'user-4',
        'username': 'jason',
        'password': 'jason',
    },
    {
        'id': 'user-5',
        'username': 'lisa',
        'password': 'lisa'
    }
]