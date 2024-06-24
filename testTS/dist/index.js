"use strict";
function assignGrade(average) {
    if (average >= 90) {
        return "A";
    }
    else if (average >= 80) {
        return "B";
    }
    else if (average >= 70) {
        return "C";
    }
    else if (average >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}
const calculateAverage = (student) => {
    const sum = student.scores.korean +
        student.scores.math +
        student.scores.society +
        student.scores.science +
        student.scores.english;
    const average = sum / Object.keys(student.scores).length;
    return average;
};
function createStudent(name, age, 
// scores를 감싸지 않는 이유 -> 함수 호출 시 편하게 입력 가능
korean, math, society, science, english) {
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
// void 타입은 함수가 값을 변환하지 않음
function printResult(student) {
    const average = calculateAverage(student);
    const grade = assignGrade(average);
    console.log(`${student.name} (${student.age}세) - 평균: ${average.toFixed(2)}, 학점: ${grade}`);
}
function main() {
    const spartan = createStudent("Spartan", 30, 95, 89, 76, 90, 97);
    printResult(spartan);
}
main();
