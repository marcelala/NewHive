 const avatars = () => {
    const result=[];
    for(let i =1; i<=10; i++) {
        result.push(`avatar${i}.jpg`);
    }
    result.push('avatar-default.png');
    return result;
}

export default avatars();