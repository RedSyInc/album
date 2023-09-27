import $ from './Preloader.module.css'

export const Preloader = () => (
    <div className={$.wrap}>
        <div className={$.ldsCircle}>
            <div></div>
        </div>
    </div>
)