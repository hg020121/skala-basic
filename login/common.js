export function isEmpty(value) {
    // 1. null 또는 undefined 체크
    if (value === null || value === undefined)
        return true;

    // 2. 문자열 체크 (공백 제외)
    if (typeof value === 'string') {
        return value.trim().length === 0;
    }

    // 3. 배열 체크
    if (Array.isArray(value)) {
        return value.length === 0;
    }

    // 4. 객체 체크
    if (typeof value === 'object') {
        // 객체의 키(Key) 개수가 0개인지 확인
        return Object.keys(value).length === 0;
    }

    // 5. 숫자나 불리언 등은 값이 있는 것으로 간주 (0도 값으로 취급)
    return false;
}

export function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}