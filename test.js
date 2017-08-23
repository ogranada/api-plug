
const Plug = require('./index')

console.log('');
console.log('1');
p = new Plug();
console.log('2');
console.log('--->', p.servers);
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
