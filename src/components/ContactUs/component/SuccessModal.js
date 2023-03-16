import React, {useEffect} from 'react';
import style from "./style.module.css";


const SuccessModal = ({ close }) => {

    useEffect(() => {
        window.document.body.classList.add("remove-scrollbar");
        return () => {
            console.log("remove ")
            window.document.body.className = "";
        }
    }, []);

    return (
        <div id="myModal" className={style.modal}>
            <div className={style.modalContent}>
                <div className={style.modalItem}>
                    <div className={style.close} onClick={close}>
                        <span >&times;</span>
                    </div>
                    <p className={style.modalText}>Success Send</p>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;