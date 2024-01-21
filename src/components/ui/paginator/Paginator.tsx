import {useState, useEffect} from "react";
import p from "./Paginator.module.css";

type PropsPaginatorType = {
    totalUsersCount: number;
    pageSize: number;
    currentPage: number;
    onPageChanged: (page: number, pageSize: number) => void;
};

export const Paginator = (props: PropsPaginatorType) => {
    const pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    const pages: number[] = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    const portionSize = 5;
    const portionCount = Math.ceil(pageCount / portionSize);
    const [portionNumber, setPortionNumber] = useState<number>(1);
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionNumber = portionNumber * portionSize;

    useEffect(() => {
        const currentPortion = Math.ceil(props.currentPage / portionSize);
        setPortionNumber(currentPortion);
    }, [props.currentPage]);

    const setPortionNumberPrev = () => {
        setPortionNumber(portionNumber - 1);
    }

    const setPortionNumberNext = () => {
        setPortionNumber(portionNumber + 1);
    }

    const onPageChanged = (item: number) => {
        props.onPageChanged(item, props.pageSize)
    }

    return (
        <div className={p.numberPages}>
            {portionNumber > 1 && (
                <button
                    onClick={setPortionNumberPrev}
                    className={p.next}
                >
                    &#8656; PREV
                </button>
            )}
            {pages
                .filter((p) => p >= leftPortionNumber && p <= rightPortionNumber)
                .map((item, index) => {
                    return (
                        <span
                            className={props.currentPage === item ? p.active : ""}
                            key={index}
                            onClick={() => onPageChanged(item)}
                        >
              {item}
            </span>
                    );
                })}
            {portionNumber < portionCount && (
                <button
                    onClick={setPortionNumberNext}
                    className={p.prev}
                >
                    NEXT &#8658;
                </button>
            )}
        </div>
    );
};