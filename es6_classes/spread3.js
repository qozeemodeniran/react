
const info = {
    firstname: 'Qozeem',
    age: 28,
    degree: 'MSIT'
}

const update = {
    lastname: 'Odeniran',
    cgpa: 4.0
}

const updated_info = {...info, ...update}

console.log(updated_info);