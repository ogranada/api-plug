
const Plug = require('./index')

console.log('');
console.log('');
p = new Plug();
p.get('sampleServer', 'content', {id: 1, sample:[1,2,3]})
    .then((res)=>{
        console.log('res get:', res);
    })
    ;

p.save('sampleServer', 'content', {id: 1, sample:[1,2,3]})
    .then((res)=>{
        console.log('res post:', res);
    })
    ;

p.update('sampleServer', 'content', {id: 1, sample:[1,2,3]})
    .then((res)=>{
        console.log('res update:', res);
    })
    ;

p.delete('sampleServer', 'content', {id: 1, sample:[1,2,3]})
    .then((res)=>{
        console.log('res delete:', res);
    })
    ;

console.log('');
console.log('');
