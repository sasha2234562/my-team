export const updateCardCount = (cardCount: number, setCardCount: (count: number) => void) => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 951 && cardCount !== 4) {
        setCardCount(4);
    } else if (screenWidth > 951 && screenWidth < 1276 && cardCount !== 6) {
        setCardCount(6);
    } else if (screenWidth >= 1276 && cardCount !== 8) {
        setCardCount(8);
    }
}