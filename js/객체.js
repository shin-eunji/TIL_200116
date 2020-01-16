const dog = {
    Name: '멍멍',
    Age: 12,
    Cute: true
  }
  console.log(dog);
  console.log(dog.Name);
  console.log(dog.Age);




  const IronMan = {
    name: "토니스타크",
    actor: "로버트 다우니 주니어",
    alias: "아이언맨"
  };
  
  const captaninAmerica = {
    name: "스티븐 로저스",
    actor: "크리스 에반스",
    alias: "캡틴 아메리카"
  };
  
  function print({ alias, name, actor }) {
    // const { alias, name, actor } = hero;
    const text = `${alias}(${name}) 역할을 맡은 배우 ${actor}입니다.`;
    console.log(text);
  }
  
  print(IronMan);
  print(captaninAmerica);

  
  const dog = {
    name: "강아지",
    sound: "멍멍!",
    say: function say() {
      console.log(this.sound);
    }
  };
  
  const cat = {
    name: "고양이",
    sound: "냐옹"
  };
  cat.say = dog.say;
  dog.say();
  cat.say();
  