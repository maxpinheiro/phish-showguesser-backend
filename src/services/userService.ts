import { User } from "../models/types";
import { testUsers } from "../testData/users";

let users: User.Type[] = [...testUsers];

export async function getAllUsers(): Promise<User.Type[]> {
    return new Promise((resolve, reject) => {setTimeout(() => {resolve(users)}, 1000);});
}

export async function getUserById(userId: User.UserID): Promise<User.Type | null> {
    return new Promise((resolve, reject) => {setTimeout(() => {resolve(users.find(user => user.id == userId) || null);}, 1000);});
}

export async function getUserListByIds(userIds: User.UserID[]): Promise<User.Type[]> {
    return new Promise((resolve, reject) => {setTimeout(() => {resolve(users.filter(user => userIds.includes(user.id)))}, 1000);});
}

export async function createUser(username: string, password: string): Promise<User.Type | null> {
    return new Promise((resolve, reject) => {setTimeout(() => {
        const user = users.find(user => user.username == username);
        if (user) {
            resolve(null);
        } else {
            const newUser: User.Type = {
                'id': `user-${users.length + 1}`,
                username,
                password,
             };
            users.push(newUser);
            resolve(newUser);
        }
    }, 1000);});
}

export type LoginResponse = User.Type | 'incorrect password' | 'incorrect username';

export async function attemptLogin(username: string, password: string): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {setTimeout(() => {
        const user = users.find(user => user.username == username);
        if (user) {
            resolve(user.password == password ? user : 'incorrect password');
        } else {
            resolve('incorrect username');
        }
    }, 1000);});
}