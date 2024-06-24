interface Student {
  name: string;
  age: number;
  scores: {
    korean: number;
    math: number;
    society: number;
    science: number;
    english: number;
  };
}

// 화살표 함수와 일반 함수 선언의 차이점
// 일반 함수 선언 : 함수내에서 this는 함수 호출 시 결정 / 함수 내부에서 arguments 객체 사용 가능
// 화살표 함수 : 자신만의 thi를 가지지 않고 정의된 범위의 this를 사용(렉시컬 스코프) / arguments객체를 가지지 않는 대신 필요 시 레스트 파라미더 사용 가능
// 용도 : 일반 함수는 주로 객체의 메서드나 생성자 함수 / 화살표는 콜백 함수나 간단한 함수 표현
function assignGrade(average: number): string {
  if (average >= 90) {
    return "A";
  } else if (average >= 80) {
    return "B";
  } else if (average >= 70) {
    return "C";
  } else if (average >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// 당연하게도 화살표 함수로 바꿀 수 있음
const calculateAverage = (student: Student): number => {
  const sum =
    student.scores.korean +
    student.scores.math +
    student.scores.society +
    student.scores.science +
    student.scores.english;
  // Object.keys는 매개변수의 키를 String형태에 배열로 반환
  // ex) ["korean", "math", "society", "science", "english"]
  const average = sum / Object.keys(student.scores).length;
  return average;
};

function createStudent(
  name: string,
  age: number,
  // scores를 감싸지 않는 이유 -> 함수 호출 시 편하게 입력 가능
  korean: number,
  math: number,
  society: number,
  science: number,
  english: number
): Student {
  return {
    name,
    age,
    // 여기가 간단해지지만 함수 호출 시 아래의 키,밸류 페어를 가진
    // 상수를 선언 후 함수 호출 시 매개변수로 넘겨줘야함
    scores: {
      korean,
      math,
      society,
      science,
      english,
    },
  };
}
// scores를 감싼 함수
// function createStudent(
//   name: string,
//   age: number,
//   scores: {
//     korean: number;
//     math: number;
//     society: number;
//     science: number;
//     english: number;
//   }
// ): Student {
//   return {
//     name,
//     age,
//     scores,
//   };
// }
// 예시코드
// scores를 감싸지 않은 경우
// const student1 = createStudent("John Doe", 16, 85, 90, 78, 88, 92);
// scores를 감싼 경우
// const scores = { korean: 85, math: 90, society: 78, science: 88, english: 92 };
// const student2 = createStudent("Jane Doe", 16, scores);

// void 타입은 함수가 값을 반환(return)하지 않음
function printResult(student: Student): void {
  const average = calculateAverage(student);
  const grade = assignGrade(average);
  console.log(
    `${student.name} (${student.age}세) - 평균: ${average.toFixed(
      2
    )}, 학점: ${grade}`
  );
}

function main(): void {
  const spartan = createStudent("Spartan", 30, 95, 89, 76, 90, 97);
  printResult(spartan);
}

main();
