"use strict";
// let user : User[] = [] 는 왜 안쓰는가..?
// 관리 할 데이터 선언
let drinks = [];
let orders = [];
const isAdmin = (user) => {
    return user.role === "admin";
};
const isCustomer = (user) => {
    return user.role === "customer";
};
const addDrink = (user, name, price) => {
    if (!isAdmin(user)) {
        console.log("권한이 없습니다.");
        return;
    }
    const newDrink = { name, price };
    drinks.push(newDrink);
};
const removeDrink = (user, drinkName) => {
    if (!isAdmin(user)) {
        console.log("권한이 없습니다.");
        return;
    }
    drinks = drinks.filter((drink) => drink.name !== drinkName);
};
const getDrinks = (user) => {
    if (!user)
        return [];
    return drinks;
};
const findDrink = (drinkName) => {
    return drinks.find((drink) => drink.name === drinkName);
};
// 주문Id를 반환
const placeOrder = (user, drinkName) => {
    if (!isCustomer(user)) {
        console.log("권한이 없습니다.");
        return -1;
    }
    const drink = findDrink(drinkName);
    if (!drink) {
        console.log("해당 음료가 없습니다.");
        return -1;
    }
    const newOrder = {
        orderId: orders.length + 1,
        customerId: user.id,
        customerName: user.name,
        drinkName,
        status: "placed",
    };
    orders.push(newOrder);
    return newOrder.orderId;
};
const completeOrder = (user, orderId) => {
    if (!isAdmin(user)) {
        console.log("권한이 없습니다.");
        return;
    }
    const order = orders.find((order) => order.orderId === orderId);
    if (order) {
        order.status = "completed";
        console.log(`[고객 메시지] ${order.customerName}님 주문하신 ${order.drinkName}나왔습니다`);
    }
};
const pickUpOrder = (user, orderId) => {
    if (!isCustomer(user)) {
        console.log("권한이 없습니다.");
        return;
    }
    const order = orders.find((order) => order.orderId === orderId && order.customerId === user.id);
    if (order && order.status === "completed") {
        order.status = "picked-up";
        console.log(`[어드민 메시지] 고객 ID[${order.customerId}]님이 주문 ID[${orderId}]을 수령했습니다.`);
    }
};
function main() {
    const admin = {
        id: 1,
        name: "바리스타",
        role: "admin",
    };
    // 유저 생성
    const member1 = {
        id: 2,
        name: "르탄이",
        role: "customer",
    };
    const member2 = {
        id: 3,
        name: "꿈꾸는개발자",
        role: "customer",
    };
    // 음료 등록
    addDrink(admin, "아메리카노", 4000);
    addDrink(admin, "카페라떼", 4500);
    addDrink(admin, "에스프레소", 3000);
    // 음료 삭제
    removeDrink(admin, "에스프레소");
    console.log(`안녕하세요~ ${member1.name} 고객님! 별다방에 오신 것을 환영합니다. 저희는 ${JSON.stringify(getDrinks(member1))}를 판매하고 있습니다.`);
    // 음료 주문
    const orderId1 = placeOrder(member1, "아메리카노");
    if (orderId1 > 0) {
        setTimeout(() => {
            // 음료 제작 완료
            completeOrder(admin, orderId1);
            // 음료 수령
            pickUpOrder(member1, orderId1);
        }, 1000);
    }
    console.log(`안녕하세요~ ${member2.name} 고객님! 별다방에 오신 것을 환영합니다. 저희는 ${JSON.stringify(getDrinks(member2))}를 판매하고 있습니다.`);
    // 음료 주문
    const orderId2 = placeOrder(member2, "카페라떼");
    if (orderId2 > 0) {
        setTimeout(() => {
            // 음료 제작 완료
            completeOrder(admin, orderId2);
            // 음료 수령
            pickUpOrder(member2, orderId2);
        }, 3000);
    }
}
main();
