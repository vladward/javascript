import {ActionType, calculator} from "./reducer";

test("test reducer", () => {
    // 1. Получаем тестовые данные
  const num1 = 5
  const num2 = 6
    // 2. Выполнение тестируемого кода
  const action: ActionType = {type: "sum", number: num2}

  // 3. Сравнение с ожидаемым результатом
  expect(calculator(num2, action)).toBe(11)
})