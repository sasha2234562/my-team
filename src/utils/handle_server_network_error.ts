import axios from "axios";

/**
 * Обрабатывает ошибки сети, возникающие при отправке запросов на сервер
 * @param {unknown} err - Ошибка, которая произошла при отправке запроса на сервер
 * @param {AppDispatch} dispatch - Функция dispatch из библиотеки Redux для отправки actions
 * @returns {void} - Данная функция ничего не возвращает
 */
export const handleServerNetworkError = (err: unknown): void => {
    // ❗Проверка на наличие axios ошибки
    if (axios.isAxiosError(err)) {
        // dispatch(errorLogin(err.response?.data?.error))
    }
};
