import React from 'react'
import PropTypes from 'prop-types';

const Sort = React.memo(({items, indexSortBy, onIndexSortBy}) => {

        //состояние скрывать/показывать Popup
        const [isVisiblePopup, setIsVisiblePopup] = React.useState(false);
        //создаём ref-переменную для получения ссылки на элемнт sort
        const softRef = React.useRef();
        
        /*Единажды при рендеренге, вешаем событие click на body, для отслеживания нажатия и если это не .sort,
        скрываем popup */
        React.useEffect(() => {

            const checkPath = (event) => {
                //В sortRef.current хранится ссылка на .sort
                const path = event.path || ( event.composedPath && event.composedPath() );
                // if( !event.path.includes(softRef.current)) setIsVisiblePopup(false);
                if( !path.includes(softRef.current)) setIsVisiblePopup(false);
            }
            document.body.addEventListener('click', checkPath);

            return () => {
                document.body.removeEventListener('click', checkPath);
            }
        }, []);

        const onSelectItem = idx => {
            setIsVisiblePopup(false);
            onIndexSortBy(idx);
        }
        
        const togglePopup = () => {
            setIsVisiblePopup(!isVisiblePopup);
        }

        return (
            //передаём в softRef.current ссылку на элемент .sort
            <div className="sort" ref={softRef}>
                <p>
                    <svg
                        className={isVisiblePopup ? "rotated" : ""}
                        width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C"/>
                    </svg>
                    Сортировка по: <span className="sort__chosen" onClick={togglePopup}>{items[indexSortBy].name}</span>
                </p>
                { isVisiblePopup && <div className="sort__popup">
                                        <ul>
                                            {
                                                items.map( (item, idx) => (
                                                    <li key={ item.type + '-' + idx} 
                                                        className={ idx === indexSortBy ? "active" : ""} 
                                                        onClick={ () => onSelectItem(idx) } >{item.name}</li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                }
            </div>
        )
    }
)
Sort.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object.isRequired),
    indexSortBy: PropTypes.number.isRequired,
    onIndexSortBy: PropTypes.func.isRequired
}

export default Sort;
