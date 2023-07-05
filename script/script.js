function moveDisks(n, start, finish, auxiliary) {
    if (n === 1) {
      console.log(`Переместить диск 1 с ${start} на ${finish}`);
      return;
    }
    
    moveDisks(n - 1, start, auxiliary, finish);
    console.log(`Переместить диск ${n} с ${start} на ${finish}`);
    moveDisks(n - 1, auxiliary, finish, start);
  }
  

const n = 3; 
moveDisks(n, 'левый', 'правый', 'средний');