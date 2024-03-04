
import {UserInfo} from "../../types/User"
export const  fetchUser = new Promise<UserInfo []>((resolve, reject) => {
    setTimeout(() => { 
        try {
            let dataConverted:UserInfo []=[];
            let data = localStorage.getItem('users');
            if (!data) {
                localStorage.setItem('users', JSON.stringify([]));
                data = '[]';
            }
            dataConverted=JSON.parse(data);
            
            resolve(dataConverted);
        } catch (e) {
            reject(e);
        }
    }, 100);
});

export function addUser(user:UserInfo) {
    fetchUser.then(usersFound => {
        
        let users:UserInfo [] = usersFound;
        user.id=users.length + 1;
        users.push(user);
        setUsers(users);
    }).catch(err => {
        console.error('Error adding user:', err);
    });
}

export function setUsers(users:UserInfo[]) {
    const dataStringify = JSON.stringify(users);
    localStorage.setItem('users', dataStringify);
}
export function changeStatusUser(id:number,status:string){
    fetchUser.then(users => {
        const indexUser:number = users.findIndex(user => user.id === id);
        users[indexUser].status=status;
        console.log('users',users)
        setUsers(users);
    }).catch(err => {
        console.error('Error removing user:', err);
    });
}

export function removeUser(idUser:number) {
    fetchUser.then(users => {
        const newUserArray = users.filter(user => user.id !== idUser);
        setUsers(newUserArray);
    }).catch(err => {
        console.error('Error removing user:', err);
    });
}
